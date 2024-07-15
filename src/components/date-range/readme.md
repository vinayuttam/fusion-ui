# date-range



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute     | Description | Type                      | Default        |
| -------------- | ------------- | ----------- | ------------------------- | -------------- |
| `dateFormat`   | `date-format` |             | `string`                  | `'YYYY-MM-DD'` |
| `disabledDate` | --            |             | `(date: Date) => boolean` | `() => false`  |
| `endDate`      | --            |             | `Date`                    | `undefined`    |
| `startDate`    | --            |             | `Date`                    | `undefined`    |


## Events

| Event        | Description | Type                        |
| ------------ | ----------- | --------------------------- |
| `changeDate` |             | `CustomEvent<[Date, Date]>` |


## Dependencies

### Used by

 - [date-range-picker](../date-range-picker)

### Graph
```mermaid
graph TD;
  date-range-picker --> date-range
  style date-range fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
