import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval, isBefore } from 'date-fns';

@Component({
  tag: 'fui-calendar-view',
  styleUrl: 'fui-calendar-view.css',
  shadow: true,
})
export class FUICalendarView {
  @Prop() date: Date;
  @Prop() selectedStartDate: Date;
  @Prop() selectedEndDate: Date;
  @Prop() hoverDate: Date;
  @Prop() disabledDate: (date: Date) => boolean = () => false;

  @Event() dateSelect: EventEmitter<Date>;
  @Event() dateHover: EventEmitter<Date>;

  @State() currentMonth: Date;

  componentWillLoad() {
    this.currentMonth = startOfMonth(this.date || new Date());
  }

  render() {
    const monthStart = startOfMonth(this.currentMonth);
    const monthEnd = endOfMonth(this.currentMonth);
    const dateRange = eachDayOfInterval({ start: monthStart, end: monthEnd });

    return (
      <div class="calendar">
        <div class="header">
          <button onClick={() => this.changeMonth(-1)}>&lt;</button>
          <span>{format(this.currentMonth, 'MMMM yyyy')}</span>
          <button onClick={() => this.changeMonth(1)}>&gt;</button>
        </div>
        <div class="days">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div class="day-name">{day}</div>
          ))}
        </div>
        <div class="dates">
          {dateRange.map(date => (
            <button
              class={{
                'date': true,
                'current-month': isSameMonth(date, this.currentMonth),
                'selected': isSameDay(date, this.selectedStartDate) || isSameDay(date, this.selectedEndDate),
                'in-range': this.isInRange(date),
                'range-start': isSameDay(date, this.selectedStartDate),
                'range-end': isSameDay(date, this.selectedEndDate),
                'disabled': this.disabledDate(date),
              }}
              onClick={() => this.onDateClick(date)}
              onMouseEnter={() => this.onDateHover(date)}
              disabled={this.disabledDate(date)}
            >
              {format(date, 'd')}
            </button>
          ))}
        </div>
      </div>
    );
  }

  private changeMonth(delta: number) {
    this.currentMonth = addMonths(this.currentMonth, delta);
  }

  private onDateClick(date: Date) {
    this.dateSelect.emit(date);
  }

  private onDateHover(date: Date) {
    this.dateHover.emit(date);
  }

  private isInRange(date: Date): boolean {
    if (this.selectedStartDate && this.selectedEndDate) {
      return isWithinInterval(date, { start: this.selectedStartDate, end: this.selectedEndDate });
    }
    if (this.selectedStartDate && this.hoverDate) {
      return isWithinInterval(date, {
        start: this.selectedStartDate,
        end: isBefore(this.hoverDate, this.selectedStartDate) ? this.selectedStartDate : this.hoverDate
      });
    }
    return false;
  }
}
