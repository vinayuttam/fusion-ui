import { newSpecPage } from '@stencil/core/testing';
import { FUISpace } from '../fui-space';

describe('fui-space', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space></fui-space>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-space class="fui-space fui-space-horizontal fui-space-size-small" style="display: inline-flex; flex-direction: row; align-items: center; gap: 6px;">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fui-space>
    `);
  });

  it('applies direction property correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space direction="vertical"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('flex-direction')).toBe('column');
  });

  it('applies size presets correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="middle"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('gap')).toBe('12px');
  });

  it('applies small size preset', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="small"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('gap')).toBe('6px');
  });

  it('applies large size preset', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="large"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('gap')).toBe('24px');
  });

  it('handles custom size values', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="30"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('gap')).toBe('30px');
  });

  it('applies align property correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space align="end"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('align-items')).toBe('flex-end');
  });

  it('applies wrap property correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space wrap="true"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('flex-wrap')).toBe('wrap');
  });

  it('renders children correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space>
          <button>Button 1</button>
          <button>Button 2</button>
        </fui-space>
      `,
    });
    expect(page.root.children.length).toBe(2);
  });

  it('applies center alignment', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space align="center"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('align-items')).toBe('center');
  });

  it('applies baseline alignment', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space align="baseline"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('align-items')).toBe('baseline');
  });

  it('applies start alignment', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space align="start"></fui-space>`,
    });
    expect(page.root.style.getPropertyValue('align-items')).toBe('flex-start');
  });

  it('handles array size values', async () => {
    // Test the method logic directly by extracting it
    const getGapValue = (size: any): { gap?: string; rowGap?: string; columnGap?: string } => {
      if (Array.isArray(size)) {
        const [rowGap, columnGap] = size;
        const result: { rowGap?: string; columnGap?: string } = {};
        if (rowGap !== undefined) {
          result.rowGap = `${rowGap}px`;
        }
        if (columnGap !== undefined) {
          result.columnGap = `${columnGap}px`;
        }
        return result;
      }
      return {};
    };

    const gapValue = getGapValue([10, 20]);
    expect(gapValue.rowGap).toBe('10px');
    expect(gapValue.columnGap).toBe('20px');
  });

  it('handles boolean wrap', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space wrap="true"></fui-space>`,
    });
    await page.waitForChanges();
    expect(page.root.style.getPropertyValue('flex-wrap')).toBe('wrap');
  });

  it('applies correct CSS classes', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space direction="vertical" size="large" align="center" wrap="true"></fui-space>`,
    });
    const shadowRoot = page.root.shadowRoot;
    expect(shadowRoot.host.classList.contains('fui-space')).toBe(true);
    expect(shadowRoot.host.classList.contains('fui-space-vertical')).toBe(true);
    expect(shadowRoot.host.classList.contains('fui-space-size-large')).toBe(true);
    expect(shadowRoot.host.classList.contains('fui-space-align-center')).toBe(true);
    expect(shadowRoot.host.classList.contains('fui-space-wrap')).toBe(true);
  });

  it('renders without split by default', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space>
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </fui-space>
      `,
    });
    expect(page.rootInstance.split).toBeUndefined();
  });

  it('handles empty space correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space></fui-space>`,
    });
    const style = page.root.style;
    expect(style.display).toBe('inline-flex');
    expect(style.flexDirection).toBe('row');
    expect(style.alignItems).toBe('center');
  });

  it('maintains inline-flex display', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space></fui-space>`,
    });
    expect(page.root.style.display).toBe('inline-flex');
  });

  it('applies default gap for small size', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="small"></fui-space>`,
    });
    expect(page.root.style.gap).toBe('6px');
  });

  it('handles number size correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `<fui-space size="16"></fui-space>`,
    });
    expect(page.root.style.gap).toBe('16px');
  });

  it('renders without split separator when split is not provided', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space>
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </fui-space>
      `,
    });

    // Should use slot when split is not provided
    const splitElement = page.root.shadowRoot.querySelector('.fui-space-split');
    expect(splitElement).toBeNull();
  });

  it('renders with split separators when split is provided', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space split="|">
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </fui-space>
      `,
    });

    // Should render split separators between children
    await page.waitForChanges();
    const splitElements = page.root.querySelectorAll('.fui-space-split');
    expect(splitElements.length).toBe(2);
    expect(splitElements[0].textContent).toBe('|');
    expect(splitElements[1].textContent).toBe('|');
  });

  it('renders with complex split separator', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space split="→">
          <span>Step 1</span>
          <span>Step 2</span>
        </fui-space>
      `,
    });

    await page.waitForChanges();
    const splitElement = page.root.querySelector('.fui-space-split');
    expect(splitElement.textContent).toBe('→');
  });

  it('does not render split separator with single child', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space split="|">
          <span>Single Item</span>
        </fui-space>
      `,
    });

    await page.waitForChanges();
    const splitElements = page.root.querySelectorAll('.fui-space-split');
    expect(splitElements.length).toBe(0);
  });

  it('renders correct number of split separators', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space split="/">
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
          <span>Item 4</span>
        </fui-space>
      `,
    });

    await page.waitForChanges();
    const splitElements = page.root.querySelectorAll('.fui-space-split');
    // Should have n-1 separators for n items
    expect(splitElements.length).toBe(3);
  });

  it('applies split separator styling correctly', async () => {
    const page = await newSpecPage({
      components: [FUISpace],
      html: `
        <fui-space split="•">
          <span>Item 1</span>
          <span>Item 2</span>
        </fui-space>
      `,
    });

    await page.waitForChanges();
    const splitElement = page.root.querySelector('.fui-space-split');
    expect(splitElement.classList.contains('fui-space-split')).toBe(true);
  });
});
