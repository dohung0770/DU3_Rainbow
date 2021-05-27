const path = require('path');

const vueSrc = 'src';
const vueComp = vueSrc + '/components';
const vueLayout = vueSrc + '/layout'
console.log(vueComp)
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '~': path.join(__dirname, vueSrc),
                '@c': path.join(__dirname, vueComp),
                '@l': path.join(__dirname, vueLayout)
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
}