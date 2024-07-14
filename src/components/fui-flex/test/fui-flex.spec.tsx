import { newSpecPage } from '@stencil/core/testing';
import { FuiFlex } from '../fui-flex';

describe('fui-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FuiFlex],
      html: `<fui-flex></fui-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-flex>
        <mock:shadow-root>
          <div style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; align-items: flex-start;">
            <slot></slot>
         </div>
        </mock:shadow-root>
      </fui-flex>
    `);
  });
});
