import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'fui-segment-option',
  styleUrl: 'fui-segment-option.css',
  shadow: false,
})
export class FUISegmentOption {
  @Prop() label: string;
  @Prop() value: string;
  @Prop() disabled: boolean = false;

  // This component doesn't render anything
  render() {
    return null;
  }
}
