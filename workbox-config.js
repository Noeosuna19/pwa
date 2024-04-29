module.exports = {
    globDirectory:  '.',
    GLOBpATTERNS : [
        '**/*.{png,html,json,js,}'
    ],
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
        ],
        swDest:  'sw.js'  
};