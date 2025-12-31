import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';

interface SegmentedOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  tag: 'fui-segment',
  styleUrl: 'fui-segment.css',
  shadow: true,
})
export class FUISegment {
  @Element() host: HTMLElement;

  @Prop() optionsJson: string;
  @Prop() value: string;
  @Prop() block: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() size: 'large' | 'middle' | 'small' = 'middle';

  @State() options: SegmentedOption[] = [];
  @State() selectedValue: string;

  @Event({
    eventName: 'segmentValueChange',
  })
  valueChange: EventEmitter<string>;

  componentWillLoad() {
    this.parseOptions();
    this.selectedValue = this.value || (this.options.length > 0 ? this.options[0].value : null);
  }

  parseOptions() {
    if (this.optionsJson) {
      try {
        this.options = JSON.parse(this.optionsJson);
      } catch (e) {
        console.error('Failed to parse optionsJson:', e);
      }
    } else {
      const optionElements = this.host.querySelectorAll('fui-segment-option');
      this.options = Array.from(optionElements).map(el => ({
        label: el.getAttribute('label'),
        value: el.getAttribute('value'),
        disabled: el.hasAttribute('disabled'),
      }));
    }
  }

  handleOptionClick(option: SegmentedOption) {
    if (!this.disabled && !option.disabled && this.selectedValue !== option.value) {
      this.selectedValue = option.value;
      this.valueChange.emit(this.selectedValue);
    }
  }

  render() {
    const classList = {
      'fui-segment': true,
      [`fui-segment-${this.size}`]: true,
      'fui-segment-block': this.block,
      'fui-segment-disabled': this.disabled,
    };

    return (
      <div class="fui-segment-group">
        <div class={classList}>
          {this.options.map(option => (
            <div
              class={{
                'fui-segment-item': true,
                'fui-segment-item-selected': this.selectedValue === option.value,
                'fui-segment-item-disabled': option.disabled,
              }}
              onClick={() => this.handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
