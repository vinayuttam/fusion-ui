import { newE2EPage } from '@stencil/core/testing';

describe('fui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-text></fui-text>');

    const element = await page.find('fui-text');
    expect(element).toHaveClass('hydrated');
  });
});
