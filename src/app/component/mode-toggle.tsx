'use client';
import { Moon, Sun } from 'lucide-react';
import {useTheme} from 'next-themes';
import { useEffect, useState } from 'react';

function ModeToggle() {
const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
      
    };    
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    };
  }, []);

 const SWITCH_THEME = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light"); // <--- THIS WAS MISSING. You must allow going back to system.
        break;
      case "system":
        setTheme(systemTheme === "dark" ? "light" : "dark");
        break;
  
    }
  };

  return (
    <button
    onClick={SWITCH_THEME}
    className="flex right-4 top-4 items-center justify-center size-6 p-2  border border-neutral-200
     dark:border-neutral-700 rounded-md cursor-pointer absolute">
        <Sun className=' absolute size-3.5   dark:scale-100 scale-0 dark:rotate-45 rotate-0' />
        <Moon className='absolute size-3.5  dark:scale-0 scale-100 dark:rotate-0 rotate-45'/>
    </button>
  )
}

export default ModeToggle