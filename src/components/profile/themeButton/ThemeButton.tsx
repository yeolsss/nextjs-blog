'use client';

import { useTheme } from 'next-themes';
import { CiDark, CiLight } from 'react-icons/ci';
import styles from './themeButton.module.css';
import { useEffect } from 'react';

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    if (theme === 'system')
      systemTheme === 'dark' ? setTheme('light') : setTheme('dark');

    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    systemTheme === 'dark' ? setTheme('light') : setTheme('dark');
  }, []);

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
