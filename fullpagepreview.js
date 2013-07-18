(function($) {
    Drupal.behaviors.infusion_uio = {
        attach: function(context, settings) {

            demo.initSettingsStore();
            demo.initPageEnhancer("uio-demo-theme");
            if (Drupal.settings.infusion_uio.uio_interface == 'Full Page With Preview') {
                demo.initFullWithPreview("#myUIOptions", {
                    preview: {
                        options: {
                            templateUrl: "uiOptionsPreview.html"
                        }
                    }
                });
            }
        }
    };
})(jQuery);

