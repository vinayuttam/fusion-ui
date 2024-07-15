import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  tag: 'fui-select',
  styleUrl: 'fui-select.css',
  shadow: true,
})
export class FUISelect {
  @Element() host: HTMLElement;

  @Prop() placeholder: string = 'Select an option';
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() multiple: boolean = false;
  @Prop() optionsJson: string;
  @Prop() tags: boolean = false;

  @State() options: SelectOption[] = [];
  @State() isOpen: boolean = false;
  @State() selectedValues: string[] = [];
  @State() searchValue: string = '';
  @State() customTags: SelectOption[] = [];
  @State() isFocused: boolean = false;

  @Event() change: EventEmitter<string | string[]>;

  private dropdownRef?: HTMLDivElement;
  private inputRef?: HTMLInputElement;
  private virtualScroll: { start: number; end: number } = { start: 0, end: 20 };
  private readonly itemHeight = 32; // height of each option in pixels

  @Watch('optionsJson')
  parseOptions() {
    if (this.optionsJson) {
      try {
        this.options = JSON.parse(this.optionsJson);
      } catch (e) {
        console.error('Failed to parse optionsJson:', e);
      }
    }
  }

  componentWillLoad() {
    this.parseOptions();
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  handleOutsideClick(event: MouseEvent) {
    if (!this.host.contains(event.target as Node)) {
      this.isOpen = false;
      this.isFocused = false;
      if (!this.selectedValues.length) {
        this.searchValue = '';
      }
    }
  }

  toggleDropdown = (event: Event) => {
    event.stopPropagation();
    if (!this.disabled && !this.loading) {
      this.isOpen = !this.isOpen;
      this.isFocused = true;
      if (this.isOpen) {
        setTimeout(() => this.inputRef?.focus(), 0);
      }
    }
  };

  handleOptionClick = (option: SelectOption) => {
    if (option.disabled) return;

    if (this.multiple || this.tags) {
      const index = this.selectedValues.indexOf(option.value);
      if (index === -1) {
        this.selectedValues = [...this.selectedValues, option.value];
      } else {
        this.selectedValues = this.selectedValues.filter(v => v !== option.value);
      }
    } else {
      this.selectedValues = [option.value];
      this.isOpen = false;
      this.isFocused = false;
    }

    this.searchValue = '';
    this.change.emit(this.multiple || this.tags ? this.selectedValues : this.selectedValues[0]);
  };

  handleSearch = (event: Event) => {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.virtualScroll = { start: 0, end: 20 };
    if (!this.isOpen) {
      this.isOpen = true;
    }
  };

  handleFocus = () => {
    this.isFocused = true;
    if (!this.isOpen) {
      this.isOpen = true;
    }
  };

  handleBlur = () => {
    // Delay blur to allow for option selection
    setTimeout(() => {
      if (!this.isOpen) {
        this.isFocused = false;
        if (!this.selectedValues.length) {
          this.searchValue = '';
        }
      }
    }, 200);
  };

  handleScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    const start = Math.floor(scrollTop / this.itemHeight);
    const end = Math.min(start + 20, this.filteredOptions.length);
    this.virtualScroll = { start, end };
  };

  handleClear = (event: Event) => {
    event.stopPropagation();
    this.selectedValues = [];
    this.searchValue = '';
    this.change.emit(this.multiple || this.tags ? [] : null);
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && this.tags && this.searchValue) {
      const newOption: SelectOption = {
        label: this.searchValue,
        value: this.searchValue,
      };
      this.customTags = [...this.customTags, newOption];
      this.selectedValues = [...this.selectedValues, newOption.value];
      this.searchValue = '';
      this.change.emit(this.selectedValues);
    }
  };

  get filteredOptions(): SelectOption[] {
    const allOptions = [...this.options, ...this.customTags];
    return allOptions.filter(option =>
      option.label.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  renderOption = (option: SelectOption) => {
    const isSelected = this.selectedValues.includes(option.value);
    return (
      <div
        class={{
          'fui-select-option': true,
          'fui-select-option--selected': isSelected,
          'fui-select-option--disabled': option.disabled,
        }}
        onClick={() => this.handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  };

  render() {
    const visibleOptions = this.filteredOptions.slice(this.virtualScroll.start, this.virtualScroll.end);

    return (
      <div class={{
        'fui-select': true,
        'fui-select--disabled': this.disabled,
        'fui-select--open': this.isOpen,
        'fui-select--multiple': this.multiple || this.tags,
        'fui-select--focused': this.isFocused,
      }}>
        <div class="fui-select-selector" onClick={this.toggleDropdown}>
          {this.selectedValues.length === 0 && !this.searchValue && !this.isFocused ? (
            <span class="fui-select-placeholder">{this.placeholder}</span>
          ) : (
            <span class="fui-select-selected">
              {(this.multiple || this.tags) ? (
                this.selectedValues.map(v => (
                  <span class="fui-select-tag">
                    {this.filteredOptions.find(o => o.value === v)?.label}
                    <span class="fui-select-tag-remove" onClick={(e) => {
                      e.stopPropagation();
                      this.handleOptionClick(this.filteredOptions.find(o => o.value === v));
                    }}>×</span>
                  </span>
                ))
              ) : (
                this.filteredOptions.find(o => o.value === this.selectedValues[0])?.label
              )}
            </span>
          )}
          <input
            type="text"
            class="fui-select-search"
            ref={el => this.inputRef = el as HTMLInputElement}
            value={this.searchValue}
            onInput={this.handleSearch}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          />
          {(this.multiple || this.tags) && this.selectedValues.length > 0 && (
            <span class="fui-select-clear" onClick={this.handleClear}>×</span>
          )}
          <span class="fui-select-arrow"></span>
        </div>
        {this.isOpen && (
          <div
            class="fui-select-dropdown"
            ref={el => this.dropdownRef = el as HTMLDivElement}
            onScroll={this.handleScroll}
          >
            <div class="fui-select-options-container" style={{ height: `${this.filteredOptions.length * this.itemHeight}px` }}>
              <div class="fui-select-options-viewport" style={{ transform: `translateY(${this.virtualScroll.start * this.itemHeight}px)` }}>
                {visibleOptions.map(this.renderOption)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
