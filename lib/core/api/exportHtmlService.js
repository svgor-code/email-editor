"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("./axios"));
class ExportHtmlService {
    constructor() {
        this.generateHtml = (jsx) => new Promise((resolve, reject) => {
            //check if url is present in env.
            const url = `${process.env.REACT_APP_TS_EMAIL_EDITOR_SSR}/api/html`;
            axios_1.default
                .post(url, { app: jsx }, { headers: { 'Content-Type': 'application/json' } })
                .then((response) => {
                if (response) {
                    resolve(response.data);
                }
                else {
                    reject(response);
                }
            })
                .catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
}
const exportHtmlService = new ExportHtmlService();
exports.default = exportHtmlService;
//# sourceMappingURL=exportHtmlService.js.map