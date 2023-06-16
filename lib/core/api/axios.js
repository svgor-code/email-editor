"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vanillaInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create();
exports.default = instance;
exports.vanillaInstance = axios_1.default.create();
//# sourceMappingURL=axios.js.map