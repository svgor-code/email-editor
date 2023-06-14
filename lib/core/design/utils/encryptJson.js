"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJson = exports.encodeJson = void 0;
const lzutf8_1 = __importDefault(require("lzutf8"));
function encodeJson(json) {
    return lzutf8_1.default.encodeBase64(lzutf8_1.default.compress(json));
}
exports.encodeJson = encodeJson;
function decodeJson(json) {
    return lzutf8_1.default.decompress(lzutf8_1.default.decodeBase64(json));
}
exports.decodeJson = decodeJson;
//# sourceMappingURL=encryptJson.js.map