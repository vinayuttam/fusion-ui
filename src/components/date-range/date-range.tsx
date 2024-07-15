import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { format, isAfter, isValid, subDays, startOfMonth, endOfMonth } from 'date-fns';

@Component({
  tag: 'date-range',
  styleUrl: 'date-range.css',
  shadow: true,
})
export class DateRange {
  @Prop({ mutable: true }) startDate: Date;
  @Prop({ mutable: true }) endDate: Date;
  @Prop() disabledDate: (date: Date) => boolean = () => false;
  @Prop() dateFormat: string = 'YYYY-MM-DD';

  @Event() changeDate: EventEmitter<[Date, Date]>;

  @State() isOpen: boolean = false;
  @State() selecting: 'start' | 'end' = 'start';
  @State() hoverDate: Date;

  private presetRanges = [
    { label: 'Today', getValue: () => [new Date(), new Date()] as [Date, Date] },
    {
      label: 'Yesterday', getValue: () => {
        const yesterday = subDays(new Date(), 1);
        return [yesterday, yesterday] as [Date, Date];
      }
    },
    {
      label: 'This Week', getValue: () => {
        const today = new Date();
        return [subDays(today, today.getDay()), today] as [Date, Date];
      }
    },
    { label: 'Last 7 Days', getValue: () => [subDays(new Date(), 6), new Date()] as [Date, Date] },
    { label: 'This Month', getValue: () => [startOfMonth(new Date()), endOfMonth(new Date())] as [Date, Date] },
    { label: 'Last 30 Days', getValue: () => [subDays(new Date(), 29), new Date()] as [Date, Date] },
  ];

  render() {
    return (
      <div class="date-range">
        <input
          type="text"
          value={this.formatDateRange()}
          onClick={() => this.isOpen = !this.isOpen}
          readOnly
        />
        {this.isOpen && (
          <div class="date-picker">
            <div class="preset-ranges">
              {this.presetRanges.map(range => (
                <button onClick={() => this.applyPresetRange(range.getValue)}>
                  {range.label}
                </button>
              ))}
            </div>
            <div class="calendars">
              <calendar-view
                date={this.startDate || new Date()}
                selectedStartDate={this.startDate}
                selectedEndDate={this.endDate}
                hoverDate={this.hoverDate}
                disabledDate={this.disabledDate}
                onDateSelect={this.handleDateSelect.bind(this)}
                onDateHover={this.handleDateHover.bind(this)}
              />
              <calendar-view
                date={this.endDate || new Date()}
                selectedStartDate={this.startDate}
                selectedEndDate={this.endDate}
                hoverDate={this.hoverDate}
                disabledDate={this.disabledDate}
                onDateSelect={this.handleDateSelect.bind(this)}
                onDateHover={this.handleDateHover.bind(this)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  private formatDateRange(): string {
    if (!this.startDate && !this.endDate) {
      return '';
    }
    return `${this.formatDate(this.startDate)} - ${this.formatDate(this.endDate)}`;
  }

  private formatDate(date: Date): string {
    return isValid(date) ? format(date, this.dateFormat) : '';
  }

  private handleDateSelect(event: CustomEvent<Date>) {
    const selectedDate = event.detail;
    if (this.selecting === 'start') {
      this.startDate = selectedDate;
      this.selecting = 'end';
    } else {
      if (isAfter(selectedDate, this.startDate)) {
        this.endDate = selectedDate;
        this.isOpen = false;
        this.changeDate.emit([this.startDate, this.endDate]);
      } else {
        this.startDate = selectedDate;
        this.endDate = null;
      }
      this.selecting = 'start';
    }
  }

  private handleDateHover(event: CustomEvent<Date>) {
    this.hoverDate = event.detail;
  }

  private applyPresetRange(getValue: () => [Date, Date]) {
    const [start, end] = getValue();
    this.startDate = start;
    this.endDate = end;
    this.isOpen = false;
    this.changeDate.emit([start, end]);
  }
}
