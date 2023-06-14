"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSettings = exports.restoreSettings = void 0;
function restoreSettings() {
    let settings = null;
    try {
        const storedData = localStorage.getItem('settings');
        if (storedData) {
            settings = JSON.parse(storedData);
        }
    }
    catch (err) {
        // If stored data is not a strigified JSON this might fail,
        // that's why we catch the error
    }
    return settings;
}
exports.restoreSettings = restoreSettings;
function storeSettings(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
}
exports.storeSettings = storeSettings;
//# sourceMappingURL=settings.js.map