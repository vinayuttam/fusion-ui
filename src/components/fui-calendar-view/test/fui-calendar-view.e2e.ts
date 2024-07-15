import { newE2EPage } from '@stencil/core/testing';

describe('calendar-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<calendar-view></calendar-view>');

    const element = await page.find('calendar-view');
    expect(element).toHaveClass('hydrated');
  });
});
