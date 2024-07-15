import { newE2EPage } from '@stencil/core/testing';

describe('fui-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-select></fui-select>');

    const element = await page.find('fui-select');
    expect(element).toHaveClass('hydrated');
  });
});
