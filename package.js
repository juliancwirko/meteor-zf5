Package.describe({
  summary: 'Foundation for Sites 5 with Scss',
  version: '4.0.0',
  name: 'juliancwirko:zf5',
  git: 'https://github.com/juliancwirko/meteor-zf5.git',
});

Package.onUse(function(api) {
  api.imply('fourseven:scss@4.5.4');
  api.use([
    'jquery@1.11.4',
    'fourseven:scss@4.5.4',
  ], 'client');

  api.addFiles([
    'js/vendor/modernizr.js',
    'js/foundation.js',
  ], 'client');

  api.addFiles([

    'scss/_normalize.scss',
    'scss/_foundation.scss',

    'scss/foundation/_functions.scss',
    'scss/foundation/_settings.scss',

    'scss/foundation/components/_global.scss',
    'scss/foundation/components/_visibility.scss',
    'scss/foundation/components/_type.scss',
    'scss/foundation/components/_top-bar.scss',
    'scss/foundation/components/_tooltips.scss',
    'scss/foundation/components/_thumbs.scss',
    'scss/foundation/components/_tabs.scss',
    'scss/foundation/components/_tables.scss',
    'scss/foundation/components/_switches.scss',
    'scss/foundation/components/_sub-nav.scss',
    'scss/foundation/components/_split-buttons.scss',
    'scss/foundation/components/_side-nav.scss',
    'scss/foundation/components/_reveal.scss',
    'scss/foundation/components/_range-slider.scss',
    'scss/foundation/components/_progress-bars.scss',
    'scss/foundation/components/_pricing-tables.scss',
    'scss/foundation/components/_panels.scss',
    'scss/foundation/components/_pagination.scss',
    'scss/foundation/components/_orbit.scss',
    'scss/foundation/components/_offcanvas.scss',
    'scss/foundation/components/_magellan.scss',
    'scss/foundation/components/_labels.scss',
    'scss/foundation/components/_keystrokes.scss',
    'scss/foundation/components/_joyride.scss',
    'scss/foundation/components/_inline-lists.scss',
    'scss/foundation/components/_icon-bar.scss',
    'scss/foundation/components/_grid.scss',
    'scss/foundation/components/_forms.scss',
    'scss/foundation/components/_flex-video.scss',
    'scss/foundation/components/_dropdown-buttons.scss',
    'scss/foundation/components/_dropdown.scss',
    'scss/foundation/components/_clearing.scss',
    'scss/foundation/components/_buttons.scss',
    'scss/foundation/components/_button-groups.scss',
    'scss/foundation/components/_breadcrumbs.scss',
    'scss/foundation/components/_block-grid.scss',
    'scss/foundation/components/_alert-boxes.scss',
    'scss/foundation/components/_accordion.scss',

  ], 'client');
});
