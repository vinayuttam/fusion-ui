import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fui-button',
  styleUrl: 'fui-button.css',
  shadow: true,
})
export class FUIButton {
  @Prop() type: 'primary' | 'default' | 'dashed' | 'text' | 'link' = 'default';
  @Prop() size: 'large' | 'middle' | 'small' = 'middle';
  @Prop() danger: boolean = false;
  @Prop() block: boolean = false;

  render() {
    const Element = 'button';

    return (
      <Element
        class={{
          'fui-btn': true,
          [`fui-btn-${this.type}`]: true,
          [`fui-btn-${this.size}`]: true,
          'fui-btn-danger': this.danger,
          'fui-btn-block': this.block,
        }}
      >
        <slot></slot>
      </Element>
    );
  }
}
