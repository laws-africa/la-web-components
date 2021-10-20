# la-decorate-internal-refs

This is a behaviour element that decorates internal references within an `<la-akoma-ntoso>` element by marking the
references with a flag, and by showing the contents of the target of the internal reference in a popup.

<!-- Auto Generated Below -->


## Usage

### Html

Place this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-internal-refs flag popups></la-decorate-internal-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-internal-refs flag popups akoma-ntoso="#doc"></la-decorate-internal-refs>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```



## Properties

| Property     | Attribute     | Description                                                                                                                                                                              | Type                  | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `string \| undefined` | `undefined` |
| `flag`       | `flag`        | If `true`, internal refs will be flagged with in icon to be more visible.                                                                                                                | `boolean`             | `false`     |
| `popups`     | `popups`      | If `true`, the content of internal ref targets will be shown as popups.                                                                                                                  | `boolean`             | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*