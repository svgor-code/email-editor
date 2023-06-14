"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const lodash_1 = __importDefault(require("lodash"));
const core_1 = require("@material-ui/core");
const typography_1 = __importDefault(require("./typography"));
const shadows_1 = require("./shadows");
const SettingsContext_1 = require("../context/SettingsContext");
const baseConfig = {
    direction: 'ltr',
    typography: typography_1.default,
    overrides: {
        MuiLinearProgress: {
            root: {
                borderRadius: 3,
                overflow: 'hidden',
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 32,
            },
        },
        MuiChip: {
            root: {
                backgroundColor: 'rgba(0,0,0,0.075)',
            },
        },
    },
};
const themeConfigs = [
    {
        name: SettingsContext_1.THEMES.LIGHT,
        overrides: {
            MuiInputBase: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: core_1.colors.blueGrey[600],
                    },
                },
            },
        },
        palette: {
            type: 'light',
            action: {
                active: core_1.colors.blueGrey[600],
            },
            background: {
                default: core_1.colors.common.white,
                dark: '#f4f6f8',
                paper: core_1.colors.common.white,
            },
            primary: {
                main: core_1.colors.indigo[600],
            },
            secondary: {
                main: '#5850EC',
            },
            text: {
                primary: core_1.colors.blueGrey[900],
                secondary: core_1.colors.blueGrey[600],
            },
        },
        shadows: shadows_1.softShadows,
    },
    {
        name: SettingsContext_1.THEMES.ONE_DARK,
        palette: {
            type: 'dark',
            action: {
                active: 'rgba(255, 255, 255, 0.54)',
                hover: 'rgba(255, 255, 255, 0.04)',
                selected: 'rgba(255, 255, 255, 0.08)',
                disabled: 'rgba(255, 255, 255, 0.26)',
                disabledBackground: 'rgba(255, 255, 255, 0.12)',
                focus: 'rgba(255, 255, 255, 0.12)',
            },
            background: {
                default: '#282C34',
                dark: '#1c2025',
                paper: '#282C34',
            },
            primary: {
                main: '#8a85ff',
            },
            secondary: {
                main: '#8a85ff',
            },
            text: {
                primary: '#e6e5e8',
                secondary: '#adb0bb',
            },
        },
        shadows: shadows_1.strongShadows,
    },
    {
        name: SettingsContext_1.THEMES.UNICORN,
        palette: {
            type: 'dark',
            action: {
                active: 'rgba(255, 255, 255, 0.54)',
                hover: 'rgba(255, 255, 255, 0.04)',
                selected: 'rgba(255, 255, 255, 0.08)',
                disabled: 'rgba(255, 255, 255, 0.26)',
                disabledBackground: 'rgba(255, 255, 255, 0.12)',
                focus: 'rgba(255, 255, 255, 0.12)',
            },
            background: {
                default: '#2a2d3d',
                dark: '#222431',
                paper: '#2a2d3d',
            },
            primary: {
                main: '#a67dff',
            },
            secondary: {
                main: '#a67dff',
            },
            text: {
                primary: '#f6f5f8',
                secondary: '#9699a4',
            },
        },
        shadows: shadows_1.strongShadows,
    },
];
function createTheme(settings = {}) {
    let themeConfig = themeConfigs.find((theme) => theme.name === settings.theme);
    if (!themeConfig) {
        console.warn(new Error(`The theme ${settings.theme} is not valid`));
        [themeConfig] = themeConfigs;
    }
    let theme = (0, core_1.createTheme)(lodash_1.default.merge({}, baseConfig, themeConfig, {
        direction: settings.direction,
    }));
    if (settings.responsiveFontSizes) {
        theme = (0, core_1.responsiveFontSizes)(theme);
    }
    return theme;
}
exports.createTheme = createTheme;
//# sourceMappingURL=index.js.map