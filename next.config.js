const widthSass = require('@zeit/next-sass');

module.exports = widthSass({
    /* config options here */
    webpack: function (cfg) {
        const originalEntry = cfg.entry;
        cfg.entry = async () => {
            const entries = await originalEntry();
            if(
                entries['main.js'] &&
                !entries['main.js'].includes('./client/polyfills.js')
            ) {
                entries['main.js'].unshift('./client/polyfills.js');
            }
            return entries;
        }
        return cfg;
    }
});