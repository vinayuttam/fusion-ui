import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fui-flex',
  styleUrl: 'fui-flex.css',
  shadow: true,
})
export class FUIFlex {
  @Prop() vertical: boolean = false;
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Prop() justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'flex-start';
  @Prop() gap: string | [string, string];

  render() {
    const style = {
      display: 'flex',
      flexDirection: this.vertical ? 'column' : 'row',
      flexWrap: this.wrap,
      justifyContent: this.justify,
      alignItems: this.align,
    };

    if (typeof this.gap === 'string') {
      style['gap'] = this.gap;
    } else if (Array.isArray(this.gap)) {
      style['rowGap'] = this.gap[0];
      style['columnGap'] = this.gap[1];
    } else if (typeof this.gap === 'string' && this.gap === 'small') {
      style['gap'] = '6px';
    } else if (typeof this.gap === 'string' && this.gap === 'medium') {
      style['gap'] = '12px';
    } else if (typeof this.gap === 'string' && this.gap === 'large') {
      style['gap'] = '24px';
    }

    return (
      <div style={style}>
        <slot></slot>
      </div>
    );
  }
}
