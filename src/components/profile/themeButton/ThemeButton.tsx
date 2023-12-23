'use client';

import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';
import styles from './themeButton.module.css';
import React, { useEffect } from 'react';

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    if (!theme) {
      setTheme(systemTheme || 'light');
    }
  }, [systemTheme, theme, setTheme]);
  return (
    <div>
      <button onClick={handleToggleTheme}>
        {theme === 'light' ? (
          <CiLight className={styles.icon} />
        ) : (
          <CiDark className={styles.icon} />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
