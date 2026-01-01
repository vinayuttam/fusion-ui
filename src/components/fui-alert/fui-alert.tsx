import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fui-alert',
  styleUrl: 'fui-alert.css',
  shadow: true,
})
export class FUIAlert {
  @Prop() type: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Prop() closable: boolean = false;
  @Prop() closeText: string;
  @Prop() showIcon: boolean = true;
  @Prop() message: string;
  @Prop() description: string;
  @Prop() banner: boolean = false;

  @Event() close: EventEmitter;

  @State() visible: boolean = true;

  private handleClose = () => {
    this.visible = false;
    this.close.emit();
  };

  render() {
    if (!this.visible) {
      return null;
    }

    const getIcon = () => {
      switch (this.type) {
        case 'success':
          return '✓';
        case 'error':
          return '✕';
        case 'warning':
          return '⚠';
        case 'info':
        default:
          return 'ℹ';
      }
    };

    return (
      <div
        class={{
          'fui-alert': true,
          [`fui-alert-${this.type}`]: true,
          'fui-alert-closable': this.closable,
          'fui-alert-with-description': !!this.description || !this.showIcon,
          'fui-alert-no-icon': !this.showIcon,
          'fui-alert-banner': this.banner,
        }}
        role="alert"
      >
        {this.showIcon && (
          <div class="fui-alert-icon">
            <span class="fui-alert-icon-symbol">{getIcon()}</span>
          </div>
        )}
        <div class="fui-alert-content">
          {this.message && <div class="fui-alert-message">{this.message}</div>}
          {this.description && <div class="fui-alert-description">{this.description}</div>}
        </div>
        {this.closable && (
          <button type="button" class="fui-alert-close-icon" onClick={this.handleClose} aria-label="Close">
            {this.closeText || '×'}
          </button>
        )}
      </div>
    );
  }
}
