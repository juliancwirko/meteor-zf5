meteor-zf5
==========

#### Foundation for Sites 5.5.1 with Scss for Meteor 1.0.*

### Demo
[http://zf5.meteor.com](http://zf5.meteor.com)

### Important note

1. Quoting guys from [Meteoric](https://atmospherejs.com/meteoric/ionicons-sass) (this is the same scss case here)
"Due to a current limitation of the Meteor packaging system, the above paths may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run ```meteor reset```. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info." **update: It seems that this problem dosen't exist with newest version of Meteor, but I am not sure..**

2. **From version 1.0.0 paths are changed. You need to adjust your styles imports. Example below.**

## Usage

````meteor add juliancwirko:zf5````

#### SCSS part

**In your main scss file (for example if it is in client/stylesheet folder) copy and paste this:** (you can choose components you want - grid.scss is mandatory)

Full length paths on GitHub (Atmosphere cuts it..): [https://github.com/juliancwirko/meteor-zf5/blob/master/README.md#scss-part](https://github.com/juliancwirko/meteor-zf5/blob/master/README.md#scss-part)

I will try to figure it out how to do this better (without this long ugly paths).


    @charset "UTF-8";

    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/normalize.scss";

    //this is your local Foundation settings file copy it from git repo -> scss/foundation/_settings.scss into your client/stylesheet
    // @import "settings"

    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/grid.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/accordion.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/alert-boxes.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/block-grid.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/breadcrumbs.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/button-groups.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/buttons.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/clearing.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/dropdown.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/dropdown-buttons.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/flex-video.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/forms.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/icon-bar.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/inline-lists.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/joyride.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/keystrokes.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/labels.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/magellan.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/orbit.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/pagination.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/panels.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/pricing-tables.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/progress-bars.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/range-slider.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/reveal.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/side-nav.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/split-buttons.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/sub-nav.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/switches.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/tables.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/tabs.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/thumbs.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/tooltips.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/top-bar.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/type.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/offcanvas.scss";
    @import "../../.meteor/local/build/programs/server/assets/packages/juliancwirko_zf5/scss/foundation/components/visibility.scss";

    // your main styles goes here:

**remember that you can choose components you want**

#### JavaScript part

There is no simple way to init foundation js once :/ but you have a couple of options, you can:

Run Foundation reflow each time you will be loading templates with Foundation js plugins:

    Template.subtemplateOflayout.rendered = function () {
        $(document).foundation('reflow');
    }

You can call foundation reflow on templates which use Foundation js plugins like reveal, top bars etc.

Run Foundation init when subtemplates are rendered but only for specific plugins like:

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


You will find more info at: [Foundation JavaScript Docs](http://foundation.zurb.com/docs/javascript.html)

If you are using Iron Router you can use

    Router.onAfterAction(function () {
        $(document).foundation(); // or single plugin
    });


More: [Iron Router Hooks Docs](https://github.com/EventedMind/iron-router/blob/devel/DOCS.md#using-hooks)

**The basic logic is to run initialization or init with reflow on element actually presented in the DOM. With Meteor this isn't so simple. It needs some time to use to it.**


### Change log

- v1.0.0 - Foundation 5.5.1, Scss assets moved to the server (paths changed)
- v0.1.3 - Foundation 5.5.0
- v0.1.2 - Foundation 5.4.7
- v0.1.1 - Back to old version of the Scss package (we need to wait for Foundation 5 updates)
- v0.1.0 - Scss package version bump
- v0.0.16 - Foundation 5.4.6
- v0.0.15 - Foundation5 versions bump
- v0.0.14 - Foundation 5.4.5
- v0.0.13 - Foundation 5.4.4
- v0.0.12 - Foundation 5.4.3
- v0.0.10, v0.0.11 - attempts to integrate with Meteor 0.9.0
- v0.0.9 - Foundation 5.4.0
- v0.0.8 - Foundation 5.3.2, 5.3.3
- v0.0.6 - Foundation 5.3.1
- v0.0.5 - Foundation 5.3.0
- v0.0.3 - Foundation 5.2.3
- v0.0.2 - Foundation 5.2.2
