var Encore = require('@symfony/webpack-encore');

Encore
.setOutputPath('src/Resources/public/assets')
.setPublicPath('/bundles/heimrichhannotflatpickr/assets/')
.setManifestKeyPrefix('bundles/heimrichhannotflatpickr/assets')
.addEntry('contao-flatpickr-bundle', './src/Resources/assets/js/contao-flatpickr-bundle.js')
.addEntry('contao-flatpickr-bundle-theme', './src/Resources/assets/js/contao-flatpickr-bundle-theme.js')
.disableSingleRuntimeChunk()
.splitEntryChunks()
.configureSplitChunks(function(splitChunks) {
    splitChunks.name =  function (module, chunks, cacheGroupKey) {
        const moduleFileName = module.identifier().split('/').reduceRight(item => item).split('.').slice(0, -1).join('.');
        return `${moduleFileName}`;
    };
})
.configureBabel(null)
.enableSourceMaps(!Encore.isProduction())
.enableSassLoader()
.enablePostCssLoader()
;

module.exports = Encore.getWebpackConfig();