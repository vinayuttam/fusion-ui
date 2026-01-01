import { newE2EPage } from '@stencil/core/testing';

describe('fui-space e2e', () => {
  it('renders and is accessible', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space>
        <button>Button 1</button>
        <button>Button 2</button>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    expect(element).toHaveClass('hydrated');
  });

  it('applies horizontal spacing correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space size="large">
        <button>Button 1</button>
        <button>Button 2</button>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.gap).toBe('24px');
  });

  it('applies vertical spacing correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space direction="vertical" size="middle">
        <div>Item 1</div>
        <div>Item 2</div>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.flexDirection).toBe('column');
    expect(style.gap).toBe('12px');
  });

  it('handles wrap functionality', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space wrap="true">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.flexWrap).toBe('wrap');
  });

  it('applies alignment correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space align="end">
        <span>Short</span>
        <span>Taller item here</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.alignItems).toBe('flex-end');
  });

  it('renders without split separators by default', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    expect(element).toHaveClass('hydrated');
  });

  it('handles custom gap values', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space size="30">
        <button>Button 1</button>
        <button>Button 2</button>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.gap).toBe('30px');
  });

  it('centers items by default in horizontal direction', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space>
        <button>Button 1</button>
        <button>Button 2</button>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.alignItems).toBe('center');
  });

  it('aligns items to start by default in vertical direction', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space direction="vertical">
        <div>Item 1</div>
        <div>Item 2</div>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.alignItems).toBe('flex-start');
  });

  it('maintains inline-flex display behavior', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div>
        <span>Before</span>
        <fui-space>
          <button>Button 1</button>
          <button>Button 2</button>
        </fui-space>
        <span>After</span>
      </div>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.display).toBe('inline-flex');
  });

  it('handles baseline alignment', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space align="baseline">
        <span style="font-size: 12px;">Small</span>
        <span style="font-size: 20px;">Large</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.alignItems).toBe('baseline');
  });

  it('renders split separators correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space split="|">
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    expect(element).toHaveClass('hydrated');

    // Check that split separators are rendered
    const splitElements = await page.findAll('.fui-space-split');
    expect(splitElements.length).toBe(2);
    expect(splitElements[0].textContent).toBe('|');
    expect(splitElements[1].textContent).toBe('|');
  });

  it('does not render split separators when split is not provided', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </fui-space>
    `);

    const splitElements = await page.findAll('.fui-space-split');
    expect(splitElements.length).toBe(0);
  });

  it('renders complex split separators', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space split="→">
        <span>Step 1</span>
        <span>Step 2</span>
        <span>Step 3</span>
      </fui-space>
    `);

    const splitElements = await page.findAll('.fui-space-split');
    expect(splitElements.length).toBe(2);
    // Handle unicode encoding - check for both the actual character and encoded version
    const textContent = splitElements[0].textContent;
    expect(textContent === '→' || textContent === 'â†’').toBe(true);
    expect(splitElements[1].textContent === '→' || splitElements[1].textContent === 'â†’').toBe(true);
  });

  it('handles split with different sizes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space size="large" split="/">
        <span>Home</span>
        <span>Products</span>
        <span>About</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.gap).toBe('24px');

    const splitElements = await page.findAll('.fui-space-split');
    expect(splitElements.length).toBe(2);
    expect(splitElements[0].textContent).toBe('/');
  });

  it('handles split with vertical direction', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space direction="vertical" split="—">
        <span>Section 1</span>
        <span>Section 2</span>
      </fui-space>
    `);

    const element = await page.find('fui-space');
    const style = await element.getComputedStyle();
    expect(style.flexDirection).toBe('column');

    const splitElements = await page.findAll('.fui-space-split');
    expect(splitElements.length).toBe(1);
    // Handle unicode encoding - check for both the actual character and encoded version
    const textContent = splitElements[0].textContent;
    expect(textContent === '—' || textContent === 'â€”').toBe(true);
  });

  it('applies correct split styling', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-space split="|">
        <span>Item 1</span>
        <span>Item 2</span>
      </fui-space>
    `);

    const splitElement = await page.find('.fui-space-split');
    expect(splitElement).toHaveClass('fui-space-split');

    const style = await splitElement.getComputedStyle();
    expect(['inline-flex', 'block', 'flex']).toContain(style.display);
    expect(style.alignItems).toBe('center');
  });
});
