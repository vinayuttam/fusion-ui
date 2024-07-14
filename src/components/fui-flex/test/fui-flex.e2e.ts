import { newE2EPage } from '@stencil/core/testing';

describe('fui-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-flex></fui-flex>');

    const element = await page.find('fui-flex');
    expect(element).toHaveClass('hydrated');
  });
});
