# React Responsive Text

is a high order wrapper based on http://simplefocus.com/flowtype/

## Usage

Just import and wrap with your desired settings

```javascript

import ReactResponsiveText from 'react-responsive-type';
...

class SomeApp extends Component{
  ...
}

export default ReactResponsiveText(SomeApp,{
  minimum: 500,
  maximum: 1200
});
```

### Settings

 * __minimum__: The minimum element width text will stop being resize
 * __maximum__: The minimum element width text will stop being resize
 * __minFont__: The minimum font size that the element will be resized to
 * __maxFont__: The maximum font size that the element will be resized to
 * __fontRatio__: When using your own font-size use this setting to adjust font sizes(bigger numbers will make the font smaller and vice versa)

## Issues / PR

 If you found any issue with this module, please [let me know](https://github.com/JellyKid/react-responsive-type).


## Thanks
* [gianu](https://github.com/gianu/react-fittext) for inspiration
* [FlowType.JS](http://simplefocus.com/flowtype/) for help with the magic ;)
