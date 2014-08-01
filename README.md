meteor-zf5
==========

Foundation 5 with Sass for Meteor

### Demo
[http://zf5.meteor.com](http://zf5.meteor.com)

### Usage

#### SCSS part

In your main scss file (example if it is in client/stylesheet folder)

```
@import "../../packages/zf5/scss/normalize";
// settings override here (zf5/scss/foundation/_settings.scss file [copy lines here]):

@import "../../packages/zf5/scss/foundation";
// or you can import ony couple components like that
// @import "../../packages/zf5/scss/foundation/components/grid";
// @import "../../packages/zf5/scss/foundation/components/accordion";
// @import "../../packages/zf5/scss/foundation/components/alert-boxes";
// and so one

// your main styles here:
```


#### JavaScript part

There is no simple way to init foundation js once :/ but you have a couple of options, you can:

- Run Foundation reflow each time you will be loading templates with Foundation js plugins:
````
Template.subtemplateOflayout.rendered = function () {
    $(document).foundation('reflow');
}
````
You can call foundation reflow on templates which use Foundation js plugins like reveal, top bars etc.

- Run Foundation init when subtemplates are rendered but only for specific plugins like:
````
Template.subtemplateOflayout.rendered = function () {
    $(document).foundation({
        reveal : {
            animation_speed: 500
        },
        tooltip : {
            disable_for_touch: true
        },
        topbar : {
            custom_back_text: false,
            is_hover: false,
            mobile_show_parent_link: true
        }
    });
}
````
You will find more info at: [Foundation JavaScript Docs](http://foundation.zurb.com/docs/javascript.html)

- If you are using Iron Router you can use 
````
Router.onAfterAction(function () {
    $(document).foundation(); // or single plugin
});
````
More: [Iron Router Hooks Docs](https://github.com/EventedMind/iron-router/blob/devel/DOCS.md#using-hooks)

**The basic logic is to run initialization or init with reflow on element actually presented in the DOM. With Meteor this isn't so simple. It needs some time to use to it.**


### Change log

v0.0.8 - Foundation 5.3.2, 5.3.3

v0.0.6 - Foundation 5.3.1

v0.0.5 - Foundation 5.3.0

v0.0.3 - Foundation 5.2.3

v0.0.2 - Foundation 5.2.2