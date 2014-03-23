meteor-zf5
==========

Foundation 5 for Meteor

### Usage

in your main scss file (example it it is in client/stylesheet folder)

```
@import "../../packages/zf5/scss/normalize";
// settings override here (listed in zf5/scss/foundation/_settings.scss file [copy uncomented here]):

@import "../../packages/zf5/scss/foundation";

// your styles here
```

in your main view js file

```
Template.[your main layout name].rendered = function () {
	$(document).foundation();
}
```