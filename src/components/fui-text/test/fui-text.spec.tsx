import { newSpecPage } from '@stencil/core/testing';
import { FuiText } from '../fui-text';

describe('fui-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FuiText],
      html: `<fui-text></fui-text>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fui-text>
    `);
  });
});
