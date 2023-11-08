import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
    const [theme, setTheme] = useState("mytheme");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document.querySelector('html')?.setAttribute("data-theme", localTheme as string);
  }, [theme]);

  return (
    <div className="theme-switcher mb-2">
        <select className="form-control w-15 max-w-xs p-5 rounded-md border-gray-300 bg-white text-gray-700" value={theme} onChange={handleChange}>
          <option value="mytheme">Defecto</option>
          <option value="black">Black</option>
          <option value="wireframe">Wireframe</option>
        </select>
    </div>
  );
}