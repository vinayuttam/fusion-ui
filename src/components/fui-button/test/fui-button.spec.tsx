import { newSpecPage } from '@stencil/core/testing';
import { FUIButton } from '../fui-button';

describe('fui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUIButton],
      html: `<fui-button></fui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-button>
        <mock:shadow-root>
          <button class="fui-btn fui-btn-default fui-btn-middle">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </fui-button>
    `);
  });
});
