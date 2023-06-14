"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unescapeHTML = void 0;
const decoder = require('he');
const pretty = require('pretty');
const unescapeHTML = (htmlBody) => {
    if (htmlBody == null) {
        return null;
    }
    return pretty(decoder.decode(htmlBody));
};
exports.unescapeHTML = unescapeHTML;
//# sourceMappingURL=unescapeHtml.js.map