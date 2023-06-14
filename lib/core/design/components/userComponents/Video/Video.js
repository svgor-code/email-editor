"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const VideoSettings_1 = require("./VideoSettings");
const Video = (_a) => {
    var { props, style, parentStyle } = _a, rest = __rest(_a, ["props", "style", "parentStyle"]);
    const { connectors: { connect, drag }, id } = (0, core_1.useNode)();
    //bgimage/bgcolor
    var parentStyleCopy = Object.assign({}, parentStyle);
    if (parentStyleCopy.backgroundImage !== "") {
        parentStyleCopy.backgroundImage = "url(" + parentStyleCopy.backgroundImage + ")";
    }
    return (react_1.default.createElement(core_2.Grid, { item: true, xs: 12, id: id, style: Object.assign({
            textAlign: parentStyleCopy.align
        }, parentStyleCopy), ref: connect }, props.src ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("video", { style: style, controls: true },
            react_1.default.createElement("source", { src: props.src, type: "video/mp4" }),
            "Your browser does not support HTML video."))) : (react_1.default.createElement("img", { style: style, src: `https://raven-images.s3.ap-south-1.amazonaws.com/images/placeholder_video.jpg` }))));
};
exports.Video = Video;
exports.Video.craft = {
    props: VideoSettings_1.VideoDefaultProps,
    related: {
        settings: VideoSettings_1.VideoSettings
    },
    displayName: "Video",
    rules: {
        canMoveIn: () => false
    }
};
//# sourceMappingURL=Video.js.map