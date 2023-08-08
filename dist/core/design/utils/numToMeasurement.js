"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementDimensions = exports.pxToPercent = exports.percentToPx = exports.isPercentage = void 0;
const isPercentage = function (val) {
    return typeof val == "string" && val.indexOf("%") > -1;
};
exports.isPercentage = isPercentage;
const percentToPx = function (value, comparativeValue) {
    if (value.indexOf("px") > -1 || value == "auto" || !comparativeValue)
        return value;
    var percent = parseInt(value);
    return (percent / 100) * comparativeValue + "px";
};
exports.percentToPx = percentToPx;
const pxToPercent = function (value, comparativeValue) {
    // if ( typeof value == 'number' ) return;
    var val = (Math.abs(value) / comparativeValue) * 100;
    if (value < 0)
        return -1 * val;
    else
        return Math.round(val);
};
exports.pxToPercent = pxToPercent;
const getElementDimensions = function (element) {
    var computedStyle = getComputedStyle(element);
    var height = element.clientHeight, width = element.clientWidth; // width with padding
    height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    return {
        width: width,
        height: height
    };
};
exports.getElementDimensions = getElementDimensions;
// export function titleCase(str) {
//     if (str == null) {
//         return "";
//     }
//     return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
// }
//# sourceMappingURL=numToMeasurement.js.map