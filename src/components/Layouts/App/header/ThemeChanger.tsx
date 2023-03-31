
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

export const ThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <button className='w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-500 transition duration-150 rounded-full' onClick={() => setTheme('light')}>
        <RiSunFill className='text-slate-500 dark:text-slate-200' />
      </button>
    )
  } else {
    return (
      <button className='w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-500 transition duration-150 rounded-full' onClick={() => setTheme('dark')}>
        <RiMoonFill className='text-slate-500 dark:text-slate-200' />
      </button>
    )
  }

} 