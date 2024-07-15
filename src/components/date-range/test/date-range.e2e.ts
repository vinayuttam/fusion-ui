import { newE2EPage } from '@stencil/core/testing';

describe('date-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-range></date-range>');

    const element = await page.find('date-range');
    expect(element).toHaveClass('hydrated');
  });
});
