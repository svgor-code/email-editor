import React from 'react';
export declare enum THEMES {
    LIGHT = "LIGHT",
    ONE_DARK = "ONE_DARK",
    UNICORN = "UNICORN"
}
type Settings = {
    direction: 'ltr' | 'rtl';
    responsiveFontSizes: boolean;
    theme: THEMES;
};
interface ISettingsContext {
    settings: Settings;
    saveSettings: (updatedSettings?: {}) => void;
}
declare const SettingsContext: React.Context<ISettingsContext>;
export declare const SettingsProvider: ({ settings, children }: {
    settings: any;
    children: any;
}) => React.JSX.Element;
export declare const SettingsConsumer: React.Consumer<ISettingsContext>;
export default SettingsContext;
