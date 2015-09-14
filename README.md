# Angular help block directive
![Angular help block directive demo](https://ngmilk.rocks/content/images/2015/09/kD5cm9.gif)


### [Quick Demo](http://ng-milk.github.io/angular-help-block-directive/)
A directive that will help you display your help blocks inline. Read more about it [here](https://ngmilk.rocks/2015/04/03/angular-directive-for-collapsible-help-blocks-ng-help-block/).


## Usage
1. Include `ng-help-block.js`.
2. Include `ng-help-block.css`.
3. Add `dm.helpBlock` as a dependency to your app.
4. Profit!

...
5. (optional) Include `ngAnimate` as a dependency to animate the help block toggling.


## Bower
Installable via `bower`:

```bash
bower install ng-help-block
```

## Example
See [index.html](https://github.com/ng-milk/angular-help-block-directive/blob/master/index.html) for an example.

```html
[...]
<section help-block help-block-title="Here to help" help-block-content="Help content"></section>
[...]
```

## Title icon
You can pass a 'title' icon to the directive via the `help-block-icon-class` attribute. In the example [index.html](https://github.com/ng-milk/angular-help-block-directive/blob/master/index.html) is used (the icon is provided by [font-awesome](https://fortawesome.github.io/Font-Awesome/)).

```html
<section help-block help-block-title="{{title}}" help-block-content="{{content}}" help-block-icon-class="fa fa-question-circle"></section>
```

## Further customization
The class `expanded` will be appended to the directive container when the help block is toggled.
To override the directive styles you can customize the following:
* `.hb-row {}` -> the directive container
* `.hb-row.expanded` -> the directive container when toggled
* `.hb-title` -> the directive title
* `.hb-content` -> the directive content

Check out [index.css](https://github.com/ng-milk/angular-help-block-directive/blob/master/src/index.css) for the full list of CSS props.


## About ngmilk
<img src="http://ngmilk.rocks/content/images/2014/10/111-1.jpg" width="200px"/>

**ngmilk** is the place to go for fresh front-end articles, with a focus on AngularJS.
See more on [ngmilk.rocks](https://ngmilk.rocks)

Follow [@ngmilkrocks](http://twitter.com/ngmilkrocks) on Twitter to stay ahead of the game.

