import { newE2EPage } from '@stencil/core/testing';

describe('fui-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Test alert"></fui-alert>');

    const element = await page.find('fui-alert');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with correct message', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Test alert message"></fui-alert>');

    const messageElement = await page.find('fui-alert >>> .fui-alert-message');
    expect(messageElement).toBeTruthy();
    expect(await messageElement.textContent).toBe('Test alert message');
  });

  it('renders with description', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Test" description="Test description"></fui-alert>');

    const descriptionElement = await page.find('fui-alert >>> .fui-alert-description');
    expect(descriptionElement).toBeTruthy();
    expect(await descriptionElement.textContent).toBe('Test description');
  });

  it('renders with success type', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert type="success" message="Success" show-icon></fui-alert>');

    const alertElement = await page.find('fui-alert >>> .fui-alert');
    expect(alertElement).toHaveClass('fui-alert-success');

    const iconElement = await page.find('fui-alert >>> .fui-alert-icon-symbol');
    expect(iconElement).toBeTruthy();
    expect(await iconElement.textContent).toBe('✓');
  });

  it('renders with error type', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert type="error" message="Error" show-icon></fui-alert>');

    const alertElement = await page.find('fui-alert >>> .fui-alert');
    expect(alertElement).toHaveClass('fui-alert-error');

    const iconElement = await page.find('fui-alert >>> .fui-alert-icon-symbol');
    expect(iconElement).toBeTruthy();
    expect(await iconElement.textContent).toBe('✕');
  });

  it('renders with warning type', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert type="warning" message="Warning" show-icon></fui-alert>');

    const alertElement = await page.find('fui-alert >>> .fui-alert');
    expect(alertElement).toHaveClass('fui-alert-warning');

    const iconElement = await page.find('fui-alert >>> .fui-alert-icon-symbol');
    expect(iconElement).toBeTruthy();
    expect(await iconElement.textContent).toBe('⚠');
  });

  it('renders closable alert', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Closable alert" closable></fui-alert>');

    const closeButton = await page.find('fui-alert >>> .fui-alert-close-icon');
    expect(closeButton).toBeTruthy();
    expect(await closeButton.textContent).toBe('×');
  });

  it('renders closable alert with custom close text', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Closable alert" closable close-text="Close Now"></fui-alert>');

    const closeButton = await page.find('fui-alert >>> .fui-alert-close-icon');
    expect(closeButton).toBeTruthy();
    expect(await closeButton.textContent).toBe('Close Now');
  });

  it('renders with banner style', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Banner alert" banner></fui-alert>');

    const alertElement = await page.find('fui-alert >>> .fui-alert');
    expect(alertElement).toHaveClass('fui-alert-banner');
  });

  it('does not render icon when show-icon is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="No icon alert" show-icon="false"></fui-alert>');

    const iconElement = await page.find('fui-alert >>> .fui-alert-icon');
    expect(iconElement).toBeFalsy();
  });

  it('emits close event when close button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Closable alert" closable></fui-alert>');

    const closeButton = await page.find('fui-alert >>> .fui-alert-close-icon');

    const closeEvent = await page.spyOnEvent('close');

    await closeButton.click();

    expect(closeEvent).toHaveReceivedEvent();
  });

  it('hides alert when close button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<fui-alert message="Closable alert" closable></fui-alert>');

    const closeButton = await page.find('fui-alert >>> .fui-alert-close-icon');

    await closeButton.click();

    const alertContent = await page.find('fui-alert >>> .fui-alert');
    expect(alertContent).toBeFalsy();
  });
});
