import { newE2EPage } from '@stencil/core/testing';

describe('fui-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-heading></fui-heading>');

    const element = await page.find('fui-heading');
    expect(element).toHaveClass('hydrated');
  });
});
