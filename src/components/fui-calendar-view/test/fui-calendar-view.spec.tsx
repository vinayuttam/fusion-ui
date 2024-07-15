import { newSpecPage } from '@stencil/core/testing';
import { FUICalendarView } from '../fui-calendar-view';

describe('fui-calendar-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUICalendarView],
      html: `<fui-calendar-view></fui-calendar-view>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-calendar-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fui-calendar-view>
    `);
  });
});
