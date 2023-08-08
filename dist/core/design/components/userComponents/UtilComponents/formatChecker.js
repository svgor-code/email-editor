"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = void 0;
function getType(val) {
    if (!Number.isNaN(parseFloat(val))) {
        return "numeric";
    }
    const types = ["%", "px", "vh", "vw", "em", "rem"];
    if (typeof val === "string") {
        types.map(type => {
            if (val.indexOf(type) > -1) {
                return type;
            }
        });
    }
    return null;
}
exports.getType = getType;
//# sourceMappingURL=formatChecker.js.map