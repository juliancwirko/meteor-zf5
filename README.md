meteor-zf5
==========

#### Foundation for Sites 5.5.3 with Scss for Meteor

### Demo
[http://zf5.meteor.com](http://zf5.meteor.com)

### Important note

**From version 2.0.0 it uses new build plugin. If you want to use it with older Meteor versions use version 1.0.4 of the package**

## Usage

````meteor add juliancwirko:zf5````

Then you will be able to import all (or chosen) Foundation partials in your main .scss file:

    @charset "UTF-8";

    @import "{juliancwirko:zf5}/scss/normalize.scss";

    //local Foundation settings file. You can overwrite the settings here. Copy it from git repo -> scss/foundation/_settings.scss near main .scss file. Replace the functions path with '{juliancwirko:zf5}/scss/foundation/functions' Then Uncomment the line below:
    // @import "settings"

    @import "{juliancwirko:zf5}/scss/foundation/components/grid.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/accordion.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/alert-boxes.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/block-grid.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/breadcrumbs.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/button-groups.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/buttons.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/clearing.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/dropdown.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/dropdown-buttons.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/flex-video.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/forms.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/icon-bar.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/inline-lists.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/joyride.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/keystrokes.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/labels.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/magellan.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/orbit.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/pagination.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/panels.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/pricing-tables.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/progress-bars.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/range-slider.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/reveal.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/side-nav.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/split-buttons.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/sub-nav.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/switches.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/tables.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/tabs.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/thumbs.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/tooltips.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/top-bar.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/type.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/offcanvas.scss";
    @import "{juliancwirko:zf5}/scss/foundation/components/visibility.scss";

    // instead importing partials you can import all in one import. If you want to do this remove all imports above and uncomment the one below
    // @import "{juliancwirko:zf5}/scss/foundation.scss";

    // your project styles goes here

**remember that you can choose components you want. Go and read more on the Foundataion docs.**

### JavaScript part

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


More: [Iron Router Hooks Docs](https://github.com/iron-meteor/iron-router/blob/devel/Guide.md#hooks)

**The basic logic is to run initialization or init it with reflow on element actually presented in the DOM. We don't have here 'document ready' callback. So we need to plug into templates lifetime cycle callbacks. Usage with Meteor isn't so simple. It needs some time to use to it.**

### Also take a look at

- [sGrid - Stylus Flexbox Grid System](http://s-grid.meteor.com)
- [jeet - Stylus Grid System](https://atmospherejs.com/juliancwirko/s-jeet)
- [Scotty - Meteor Boilerplate with Stylus, Flow Router, sGrid and many more](https://github.com/juliancwirko/scotty)
- [and other my repos](https://github.com/juliancwirko)

### Change log

- v2.0.1 Foundation 5.5.3 adjustments
- v2.0.0 new build plugin support with new fourseven:scss (v3.4.0-beta1)
- v1.0.4 fourseven:scss update (v3.2.0)
- v1.0.3 fourseven:scss update (v3.0.0)
- v1.0.2 Foundation 5.5.2 adjustments
- v1.0.1 - fourseven:scss update, scss.json usage readme update
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
