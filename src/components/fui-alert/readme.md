# FUI Alert Component

A versatile alert component for displaying important messages to users with different types, icons, and close functionality.

## Usage

```html
<fui-alert type="success" message="Success message" description="Additional description text" show-icon closable> </fui-alert>
```

## Examples

### Basic Alert

```html
<fui-alert type="success" message="Operation successful"></fui-alert>
```

### Alert with Description

```html
<fui-alert type="warning" message="Warning" description="Please review your input before continuing"> </fui-alert>
```

### Closable Alert

```html
<fui-alert type="info" message="Information" closable close-text="Dismiss"> </fui-alert>
```

### Banner Alert

```html
<fui-alert type="error" message="Error occurred" banner show-icon> </fui-alert>
```

### Alert Without Icon

```html
<fui-alert type="success" message="Simple success message"></fui-alert>
```

## Types and Icons

- **Success**: Green background with ✓ icon
- **Info**: Light blue background with ℹ icon
- **Warning**: Yellow background with ⚠ icon
- **Error**: Light red background with ✕ icon

## Styling

The component uses CSS custom properties that match the existing Fusion UI design system:

- Background colors: `var(--fui-color-{type}-bg)`
- Border colors: `var(--fui-color-{type}-border)`
- Text colors: `var(--fui-text-color)` and `var(--fui-text-color-secondary)`
- Border radius: `var(--fui-border-radius)`

## Accessibility

- Uses `role="alert"` for screen readers
- Close button has proper `aria-label`
- Icon symbols are semantic (✓, ⚠, ✕, ℹ)
- Keyboard accessible close button

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                          | Default     |
| ------------- | ------------- | ----------- | --------------------------------------------- | ----------- |
| `banner`      | `banner`      |             | `boolean`                                     | `false`     |
| `closable`    | `closable`    |             | `boolean`                                     | `false`     |
| `closeText`   | `close-text`  |             | `string`                                      | `undefined` |
| `description` | `description` |             | `string`                                      | `undefined` |
| `message`     | `message`     |             | `string`                                      | `undefined` |
| `showIcon`    | `show-icon`   |             | `boolean`                                     | `true`      |
| `type`        | `type`        |             | `"error" \| "info" \| "success" \| "warning"` | `'info'`    |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
