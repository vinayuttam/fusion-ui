import { newE2EPage } from '@stencil/core/testing';

describe('fui-segment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-segment></fui-segment>');

    const element = await page.find('fui-segment');
    expect(element).toHaveClass('hydrated');
  });
});
