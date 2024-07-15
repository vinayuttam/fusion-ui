import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'date-range-picker',
  styleUrl: 'date-range-picker.css',
  shadow: true,
})
export class DateRangePicker {
  @Prop() disabledDate: (date: Date) => boolean = () => false;
  @Prop() dateFormat: string = 'yyyy-MM-dd';

  @Event() changeDate: EventEmitter<[Date, Date]>;

  @State() startDate: Date;
  @State() endDate: Date;

  render() {
    return (
      <date-range
        startDate={this.startDate}
        endDate={this.endDate}
        disabledDate={this.disabledDate}
        dateFormat={this.dateFormat}
        onChangeDate={this.handleChange.bind(this)}
      />
    );
  }

  private handleChange(event: CustomEvent<[Date, Date]>) {
    const [start, end] = event.detail;
    this.startDate = start;
    this.endDate = end;
    this.changeDate.emit([start, end]);
  }
}
