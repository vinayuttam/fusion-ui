import { newSpecPage } from '@stencil/core/testing';
import { FUIFlex } from '../fui-flex';

describe('fui-flex', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-flex>
        <mock:shadow-root>
          <div class="fui-flex" style="display: flex; flex-direction: row; align-items: flex-start;">
            <slot></slot>
         </div>
        </mock:shadow-root>
      </fui-flex>
    `);
  });

  it('applies orientation property correctly', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex orientation="vertical"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flexDirection).toBe('column');
    expect(element.style.alignItems).toBe('stretch');
  });

  it('applies wrap property correctly', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex wrap="wrap"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flexWrap).toBe('wrap');
  });

  it('applies justify and align properties', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex justify="center" align="center"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.justifyContent).toBe('center');
    expect(element.style.alignItems).toBe('center');
  });

  it('applies gap presets correctly', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex gap="small"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.gap).toBe('6px');
  });

  it('applies middle gap preset', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex gap="middle"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.gap).toBe('12px');
  });

  it('applies large gap preset', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex gap="large"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.gap).toBe('24px');
  });

  it('handles custom gap values', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex gap="30px"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.gap).toBe('30px');
  });

  it('applies flex property', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex flex="1 1 200px"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flex).toBe('1 1 200px');
  });

  it('uses custom component element', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex component="section"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('section');
    expect(element).toBeTruthy();
    expect(element.style.display).toBe('flex');
  });

  it('handles default alignment based on direction', async () => {
    // Test horizontal default
    const page1 = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    const element1 = page1.root.shadowRoot.querySelector('div');
    expect(element1.style.alignItems).toBe('flex-start');

    // Test vertical default
    const page2 = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex orientation="vertical"></fui-flex>`,
    });
    const element2 = page2.root.shadowRoot.querySelector('div');
    expect(element2.style.alignItems).toBe('stretch');
  });

  it('renders children correctly', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `
        <fui-flex>
          <div>Child 1</div>
          <div>Child 2</div>
        </fui-flex>
      `,
    });
    expect(page.root.children.length).toBe(2);
    expect(page.root.children[0].textContent).toBe('Child 1');
    expect(page.root.children[1].textContent).toBe('Child 2');
  });

  it('handles all justify values', async () => {
    const justifyValues = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'left', 'right'];

    for (const justify of justifyValues) {
      const page = await newSpecPage({
        components: [FUIFlex],
        html: `<fui-flex justify="${justify}"></fui-flex>`,
      });
      const element = page.root.shadowRoot.querySelector('div');
      expect(element.style.justifyContent).toBe(justify);
    }
  });

  it('handles all align values', async () => {
    const alignValues = ['stretch', 'center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline'];

    for (const align of alignValues) {
      const page = await newSpecPage({
        components: [FUIFlex],
        html: `<fui-flex align="${align}"></fui-flex>`,
      });
      const element = page.root.shadowRoot.querySelector('div');
      expect(element.style.alignItems).toBe(align);
    }
  });

  it('handles all wrap values', async () => {
    const wrapValues = ['wrap', 'wrap-reverse'];

    for (const wrap of wrapValues) {
      const page = await newSpecPage({
        components: [FUIFlex],
        html: `<fui-flex wrap="${wrap}"></fui-flex>`,
      });
      const element = page.root.shadowRoot.querySelector('div');
      expect(element.style.flexWrap).toBe(wrap);
    }
  });

  it('prioritizes orientation over vertical', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex vertical orientation="horizontal"></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flexDirection).toBe('row'); // Should be horizontal (orientation wins)
    expect(element.style.alignItems).toBe('flex-start'); // Horizontal default
  });

  it('handles array gap values', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    // Set array prop after initialization since HTML attributes can't pass arrays
    page.rootInstance.gap = ['10px', '20px'];
    await page.waitForChanges();
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.rowGap).toBe('10px');
    expect(element.style.columnGap).toBe('20px');
  });

  it('handles boolean wrap true', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    // Set boolean prop after initialization since HTML attributes are strings
    page.rootInstance.wrap = true;
    await page.waitForChanges();
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flexWrap).toBe('wrap');
  });

  it('handles array gap values', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    // Set array prop after initialization since HTML attributes can't pass arrays
    page.rootInstance.gap = ['10px', '20px'];
    await page.waitForChanges();
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.rowGap).toBe('10px');
    expect(element.style.columnGap).toBe('20px');
  });

  it('handles boolean wrap true', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    // Set boolean prop after initialization since HTML attributes are strings
    page.rootInstance.wrap = true;
    await page.waitForChanges();
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.flexWrap).toBe('wrap');
  });

  it('respects Ant Design default behavior for empty container', async () => {
    const page = await newSpecPage({
      components: [FUIFlex],
      html: `<fui-flex></fui-flex>`,
    });
    const element = page.root.shadowRoot.querySelector('div');
    expect(element.style.display).toBe('flex');
    expect(element.style.flexDirection).toBe('row');
    expect(element.style.alignItems).toBe('flex-start');
  });
});
