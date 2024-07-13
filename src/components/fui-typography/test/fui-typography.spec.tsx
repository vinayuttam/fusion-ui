import { newSpecPage } from '@stencil/core/testing';
import { FUITypography } from '../fui-typography';

describe('fui-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUITypography],
      html: `<fui-typography></fui-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fui-typography>
    `);
  });
});
