import { newE2EPage } from '@stencil/core/testing';

describe('fui-segment-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-segment-option></fui-segment-option>');

    const element = await page.find('fui-segment-option');
    expect(element).toHaveClass('hydrated');
  });
});
