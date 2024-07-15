import { newSpecPage } from '@stencil/core/testing';
import { DateRangePicker } from '../date-range-picker';

describe('date-range-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateRangePicker],
      html: `<date-range-picker></date-range-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <date-range-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-range-picker>
    `);
  });
});
