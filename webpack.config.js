var Encore = require('@symfony/webpack-encore');

Encore
.setOutputPath('src/Resources/public/js/')
.addEntry('contao-flatpickr-bundle', './src/Resources/assets/js/contao-flatpickr-bundle.js')
.setPublicPath('/bundles/heimrichhannotcontaoflatpickr/js')
.setManifestKeyPrefix('bundles/heimrichhannotcontaoflatpickr/js')
.disableSingleRuntimeChunk()
.addExternals({
    'flatpickr': 'flatpickr'
})
.enableSourceMaps(!Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();