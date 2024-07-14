import { newSpecPage } from '@stencil/core/testing';
import { FUISegmentOption } from '../fui-segment-option';

describe('fui-segment-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FUISegmentOption],
      html: `<fui-segment-option></fui-segment-option>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-segment-option></fui-segment-option>
    `);
  });
});
