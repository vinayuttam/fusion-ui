import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fui-typography',
  styleUrl: 'fui-typography.css',
  shadow: true,
})
export class FUITypography {
  @Prop() type: 'text' | 'secondary' | 'success' | 'warning' | 'danger' = 'text';
  @Prop() disabled: boolean = false;
  @Prop() mark: boolean = false;
  @Prop() code: boolean = false;
  @Prop() keyboard: boolean = false;
  @Prop() underline: boolean = false;
  @Prop() deleted: boolean = false;
  @Prop() strong: boolean = false;
  @Prop() italic: boolean = false;

  render() {
    const Tag = this.code ? 'code' : this.keyboard ? 'kbd' : 'span';

    return (
      <Tag
        class={{
          'fui-typography': true,
          [`fui-typography-${this.type}`]: true,
          'fui-typography-disabled': this.disabled,
          'fui-typography-mark': this.mark,
          'fui-typography-underline': this.underline,
          'fui-typography-delete': this.deleted,
          'fui-typography-strong': this.strong,
          'fui-typography-italic': this.italic,
        }}
      >
        <slot></slot>
      </Tag>
    );
  }
}
