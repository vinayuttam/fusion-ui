import { newSpecPage } from '@stencil/core/testing';
import { DateRange } from '../date-range';

describe('date-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateRange],
      html: `<date-range></date-range>`,
    });
    expect(page.root).toEqualHtml(`
      <date-range>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-range>
    `);
  });
});
