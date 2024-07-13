import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fui-text',
  styleUrl: 'fui-text.css',
  shadow: true,
})
export class FuiText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
