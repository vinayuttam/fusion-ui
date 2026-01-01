import { newSpecPage } from '@stencil/core/testing';
import { FUIAlert } from '../fui-alert';

describe('fui-alert', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert message="Default alert" show-icon="false"></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert message="Default alert" show-icon="false">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-info fui-alert-no-icon fui-alert-with-description" role="alert">
            <div class="fui-alert-content">
              <div class="fui-alert-message">Default alert</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders with success type', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert type="success" message="Success message" show-icon></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert show-icon="" type="success" message="Success message">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-success" role="alert">
            <div class="fui-alert-icon">
              <span class="fui-alert-icon-symbol">✓</span>
            </div>
            <div class="fui-alert-content">
              <div class="fui-alert-message">Success message</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders with description', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert message="Warning" description="This is a warning message" type="warning" show-icon></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert show-icon="" type="warning" message="Warning" description="This is a warning message">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-warning fui-alert-with-description" role="alert">
            <div class="fui-alert-icon">
              <span class="fui-alert-icon-symbol">⚠</span>
            </div>
            <div class="fui-alert-content">
              <div class="fui-alert-message">Warning</div>
              <div class="fui-alert-description">This is a warning message</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders closable alert', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert message="Closable alert" closable show-icon="false"></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert message="Closable alert" closable="" show-icon="false">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-closable fui-alert-info fui-alert-no-icon fui-alert-with-description" role="alert">
            <div class="fui-alert-content">
              <div class="fui-alert-message">Closable alert</div>
            </div>
            <button aria-label="Close" class="fui-alert-close-icon" type="button">
              ×
            </button>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders error alert with custom close text', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert type="error" message="Error" closable close-text="Close Now" show-icon="false"></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert close-text="Close Now" type="error" message="Error" closable="" show-icon="false">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-closable fui-alert-error fui-alert-no-icon fui-alert-with-description" role="alert">
            <div class="fui-alert-content">
              <div class="fui-alert-message">Error</div>
            </div>
            <button aria-label="Close" class="fui-alert-close-icon" type="button">
              Close Now
            </button>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders banner alert', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert message="Banner alert" banner show-icon></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert banner="" show-icon="" message="Banner alert">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-banner fui-alert-info" role="alert">
            <div class="fui-alert-icon">
              <span class="fui-alert-icon-symbol">ℹ</span>
            </div>
            <div class="fui-alert-content">
              <div class="fui-alert-message">Banner alert</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders with message only (no description)', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert message="Message only" show-icon></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert show-icon="" message="Message only">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-info" role="alert">
            <div class="fui-alert-icon">
              <span class="fui-alert-icon-symbol">ℹ</span>
            </div>
            <div class="fui-alert-content">
              <div class="fui-alert-message">Message only</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });

  it('renders with description only (no message)', async () => {
    const page = await newSpecPage({
      components: [FUIAlert],
      html: `<fui-alert description="Description only" show-icon></fui-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <fui-alert show-icon="" description="Description only">
        <mock:shadow-root>
          <div class="fui-alert fui-alert-info fui-alert-with-description" role="alert">
            <div class="fui-alert-icon">
              <span class="fui-alert-icon-symbol">ℹ</span>
            </div>
            <div class="fui-alert-content">
              <div class="fui-alert-description">Description only</div>
            </div>
          </div>
        </mock:shadow-root>
      </fui-alert>
    `);
  });
});
