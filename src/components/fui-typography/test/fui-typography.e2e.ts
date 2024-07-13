import { newE2EPage } from '@stencil/core/testing';

describe('fui-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-typography></fui-typography>');

    const element = await page.find('fui-typography');
    expect(element).toHaveClass('hydrated');
  });
});
