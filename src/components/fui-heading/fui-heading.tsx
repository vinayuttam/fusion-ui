import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fui-heading',
  styleUrl: 'fui-heading.css',
  shadow: true,
})
export class FUIHeading {
  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
  @Prop() type: 'secondary' | 'success' | 'warning' | 'danger';

  render() {
    const Tag = `h${this.level}`;

    return (
      <Tag
        class={{
          'fui-heading': true,
          [`fui-heading-${this.level}`]: true,
          [`fui-heading-${this.type}`]: !!this.type,
        }}
      >
        <slot></slot>
      </Tag>
    );
  }
}
