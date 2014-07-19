meteor-zf5
==========

Foundation 5 with Sass for Meteor

### Demo
[http://zf5.meteor.com](http://zf5.meteor.com)

### Usage

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

Sometimes you should use **$(document).foundation('reflow')** especially if there is any new javascript foundation element added

### Change log

v0.0.6 - Foundation 5.3.1

v0.0.5 - Foundation 5.3.0

v0.0.3 - Foundation 5.2.3

v0.0.2 - Foundation 5.2.2