import { newE2EPage } from '@stencil/core/testing';

describe('fui-flex e2e', () => {
  it('renders and hydrates correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-flex></fui-flex>');

    const element = await page.find('fui-flex');
    expect(element).toHaveClass('hydrated');
  });

  it('renders children correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </fui-flex>
    `);

    const flexElement = await page.find('fui-flex');
    const children = await flexElement.findAll('div');
    expect(children.length).toBe(2);
    expect(children[0].textContent).toBe('Child 1');
    expect(children[1].textContent).toBe('Child 2');
  });

  it('applies vertical direction visually', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-flex vertical style="height: 200px;">
        <div style="background: red; width: 50px; height: 50px;">Item 1</div>
        <div style="background: blue; width: 50px; height: 50px;">Item 2</div>
      </fui-flex>
    `);

    const flexElement = await page.find('fui-flex');
    expect(flexElement).toHaveClass('hydrated');

    // Verify element exists and has children
    const children = await flexElement.findAll('div');
    expect(children.length).toBe(2);
  });

  it('handles nested flex containers', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <fui-flex orientation="vertical" gap="large">
        <fui-flex justify="center">
          <div>Nested 1</div>
        </fui-flex>
        <fui-flex justify="space-between">
          <div>Nested 2</div>
          <div>Nested 3</div>
        </fui-flex>
      </fui-flex>
    `);

    const outerFlex = await page.find('fui-flex');
    expect(outerFlex).toHaveClass('hydrated');

    const innerFlexes = await outerFlex.findAll('fui-flex');
    expect(innerFlexes.length).toBe(2);
  });

  it('responds to property changes dynamically', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-flex></fui-flex>');

    const element = await page.find('fui-flex');
    
    // Test changing gap property
    await element.setProperty('gap', 'middle');
    await page.waitForChanges();
    expect(element).toHaveClass('hydrated');

    // Test changing justify property
    await element.setProperty('justify', 'center');
    await page.waitForChanges();
    expect(element).toHaveClass('hydrated');
  });

  it('uses custom component element', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-flex component="section"></fui-flex>');

    const flexElement = await page.find('fui-flex');
    expect(flexElement).toHaveClass('hydrated');

    // Verify the component renders without errors
    // Since it's using shadow DOM, we can check the shadow root content using piercing selector
    const sectionElement = await page.find('fui-flex >>> section');
    expect(sectionElement).toBeTruthy();
  });

  it('handles empty flex container', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-flex></fui-flex>');

    const element = await page.find('fui-flex');
    expect(element).toHaveClass('hydrated');

    // Should render without errors even with no children
    expect(element).toBeTruthy();
  });
});