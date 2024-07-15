import { newE2EPage } from '@stencil/core/testing';

describe('date-range-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-range-picker></date-range-picker>');

    const element = await page.find('date-range-picker');
    expect(element).toHaveClass('hydrated');
  });
});
