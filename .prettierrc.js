"use strict";
// https://prettier.io/docs/en/options.html
var prettier_options = {
    "printWidth": 120, // Default = 80
    "tabWidth": 4, // Default = 2
    "useTabs": false, // Default = false
    "semi": true, // Default = true
    "singleQuote": false, // Default = false
    "quoteProps": "as-needed", // Default = "as-needed" Options: "<as-needed|consistent|preserve>"
    "jsxSingleQuote": false, // Default = false
    "trailingComma": "es5", // Default = "es5" Options: "<es5|none|all>""
    "bracketSpacing": true, // Default = true
    "jsxBracketSameLine": false, // Default = false
    "arrowParens": "always", // Default = "always" Options: "<always|avoid>"
    "rangeStart": 0, // Default = 0
    "rangeEnd": Infinity, // Default = Infinity
    "htmlWhitespaceSensitivity": "css", // Default = css Options: "<css|strict|ignore>"
    "vueIndentScriptAndStyle": false, // Default false
    "endOfLine": "auto", // Default "lf" Options "<lf|crlf|cr|auto>"
};
module.exports = prettier_options;
