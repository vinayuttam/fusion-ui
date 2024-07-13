import { newSpecPage } from '@stencil/core/testing';
import { FUIHeading } from '../fui-heading';

describe('fui-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUIHeading],
      html: `<fui-heading></fui-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-heading>
        <mock:shadow-root>
          <h1 class="fui-heading fui-heading-1">
            <slot></slot>
          </h1>
        </mock:shadow-root>
      </fui-heading>
    `);
  });
});
