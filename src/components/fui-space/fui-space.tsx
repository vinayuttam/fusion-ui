import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'fui-space',
  styleUrl: 'fui-space.css',
  shadow: true,
})
export class FUISpace {
  @Element() el: HTMLElement;

  @Prop() size: 'small' | 'middle' | 'large' | number | [number, number] = 'small';
  @Prop() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() align: 'start' | 'end' | 'center' | 'baseline';
  @Prop() wrap: boolean = false;
  @Prop() split: string;

  public getGapValue(): { gap?: string; rowGap?: string; columnGap?: string } {
    if (Array.isArray(this.size)) {
      const [rowGap, columnGap] = this.size;
      const result: { rowGap?: string; columnGap?: string } = {};
      if (rowGap !== undefined) {
        result.rowGap = `${rowGap}px`;
      }
      if (columnGap !== undefined) {
        result.columnGap = `${columnGap}px`;
      }
      return result;
    }

    const gap = this.convertSizeValue(this.size);
    return gap ? { gap } : {};
  }

  private convertSizeValue(size: 'small' | 'middle' | 'large' | number | undefined): string | undefined {
    if (size === undefined) return undefined;
    if (typeof size === 'string') {
      if (size === 'small') return '6px';
      if (size === 'middle') return '12px';
      if (size === 'large') return '24px';
      // Check if the string represents a number
      const numValue = parseFloat(size);
      if (!isNaN(numValue) && isFinite(numValue)) {
        return `${numValue}px`;
      }
      return size;
    }
    if (typeof size === 'number') {
      return `${size}px`;
    }
    return undefined;
  }

  private getAlignValue(): string {
    if (this.align) {
      switch (this.align) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        case 'center':
          return 'center';
        case 'baseline':
          return 'baseline';
        default:
          return 'flex-start';
      }
    }
    return this.direction === 'horizontal' ? 'center' : 'flex-start';
  }

  private getStyles(): Record<string, string> {
    const styles: Record<string, string> = {
      display: 'inline-flex',
      flexDirection: this.direction === 'vertical' ? 'column' : 'row',
      alignItems: this.getAlignValue(),
    };

    if (this.wrap) {
      styles.flexWrap = 'wrap';
    }

    const gapValue = this.getGapValue();
    Object.assign(styles, gapValue);

    return styles;
  }

  render() {
    const style = this.getStyles();

    const classes = [
      'fui-space',
      this.direction === 'vertical' ? 'fui-space-vertical' : 'fui-space-horizontal',
      typeof this.size === 'string' && ['small', 'middle', 'large'].includes(this.size) ? `fui-space-size-${this.size}` : '',
      this.align ? `fui-space-align-${this.align}` : '',
      this.wrap ? 'fui-space-wrap' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Host style={style} class={classes}>
        <slot></slot>
      </Host>
    );
  }

  componentDidLoad() {
    if (this.split) {
      this.addSplitSeparators();
    }
  }

  componentDidUpdate() {
    // Update split separators when component updates
    this.removeSplitSeparators();
    if (this.split) {
      this.addSplitSeparators();
    }
  }

  disconnectedCallback() {
    this.removeSplitSeparators();
  }

  private addSplitSeparators() {
    const children = Array.from(this.el.children);

    children.forEach((child, index) => {
      if (index < children.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'fui-space-split';
        separator.textContent = this.split;
        // Ensure split separators have proper styling
        separator.style.display = 'inline-flex';
        separator.style.alignItems = 'center';

        // Insert separator after the current child
        child.parentNode?.insertBefore(separator, child.nextSibling);
      }
    });
  }

  private removeSplitSeparators() {
    const separators = this.el.querySelectorAll('.fui-space-split');
    separators.forEach(separator => separator.remove());
  }
}
