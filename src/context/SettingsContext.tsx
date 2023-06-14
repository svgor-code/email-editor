import _ from 'lodash';
import React, { createContext, useState, useEffect, useContext } from 'react';

import { storeSettings } from '../utils/settings';

export enum THEMES {
  LIGHT = 'LIGHT',
  ONE_DARK = 'ONE_DARK',
  UNICORN = 'UNICORN',
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

const defaultSettings: Settings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
};

const defaultValue = {
  settings: defaultSettings,
  saveSettings: () => null,
};

const SettingsContext = createContext<ISettingsContext>(defaultValue);

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
export default SettingsContext;
