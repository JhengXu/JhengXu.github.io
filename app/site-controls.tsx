'use client';

import { useEffect, useState } from 'react';

type Language = 'zh' | 'en';
type Theme = 'light' | 'dark';

const LANGUAGE_KEY = 'jianhua-site-language';
const THEME_KEY = 'jianhua-site-theme';

export default function SiteControls() {
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<Theme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
      const savedTheme = window.localStorage.getItem(THEME_KEY);

      if (savedLanguage === 'zh' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
      }

      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }

      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.dataset.language = language;
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    window.localStorage.setItem(LANGUAGE_KEY, language);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [language, ready, theme]);

  const nextLanguage = language === 'zh' ? 'en' : 'zh';
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <div className="siteControls" aria-label={language === 'zh' ? '显示设置' : 'Display settings'}>
      <button
        className="siteControlButton languageToggle"
        type="button"
        onClick={() => setLanguage(nextLanguage)}
        aria-label={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
        title={language === 'zh' ? 'English' : '中文'}
      >
        {language === 'zh' ? 'EN' : '中'}
      </button>
      <button
        className="siteControlButton themeToggle"
        type="button"
        onClick={() => setTheme(nextTheme)}
        aria-label={
          language === 'zh'
            ? theme === 'light'
              ? '切换到夜间模式'
              : '切换到日间模式'
            : theme === 'light'
              ? 'Switch to dark mode'
              : 'Switch to light mode'
        }
        title={
          language === 'zh'
            ? theme === 'light'
              ? '夜间模式'
              : '日间模式'
            : theme === 'light'
              ? 'Dark mode'
              : 'Light mode'
        }
      >
        <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
      </button>
    </div>
  );
}
