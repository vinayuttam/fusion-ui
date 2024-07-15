import { newSpecPage } from '@stencil/core/testing';
import { FUISelect } from '../fui-select';

describe('fui-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUISelect],
      html: `<fui-select></fui-select>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fui-select>
    `);
  });
});
