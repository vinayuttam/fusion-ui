import { newSpecPage } from '@stencil/core/testing';
import { FUISegment } from '../fui-segment';

describe('fui-segment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUISegment],
      html: `<fui-segment></fui-segment>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-segment>
        <mock:shadow-root>
          <div class="fui-segment-group">
            <div class="fui-segment fui-segment-middle"></div>
         </div>
        </mock:shadow-root>
      </fui-segment>
    `);
  });
});
