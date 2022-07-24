import React, { useCallback, useEffect, useState } from 'react'

const DarkModeSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState<Boolean>(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  )
  const [isSystemSource, setSystemSource] = useState<Boolean>(
    typeof window !== 'undefined' && !localStorage.getItem('theme')
  )

  // const initialModeByLocalStorage = () => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  // const initialSourceByLocalStorage = () => typeof window !== 'undefined' && !localStorage.getItem('theme')




// function invocated for update Theme
  const setMode = (modeDark: boolean, isSystem: boolean) => {
    if (typeof window === 'undefined') return;
      modeDark 
      ? document.documentElement.classList.add('dark') 
      : document.documentElement.classList.remove('dark')

      isSystem 
      ? localStorage.removeItem('theme') 
      : modeDark 
        ? localStorage.theme = 'dark' 
        : localStorage.theme = 'light'
  }


  //Main function update theme mode
  const updateThemeMode = useCallback(() => {
    if (typeof window === 'undefined') return;

      if(!isSystemSource) {
        isDarkMode ? setMode(true, false) : setMode(false, false)
        } else {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isSystemDark ? setMode(true, false) : setMode(false, false)
        localStorage.removeItem('theme')
        }

  }, [isSystemSource, isDarkMode])


  //Listener for change preference system OS autoUpdate
  const isSystemPreferenceChange = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)')
        isSystemDark.addEventListener("change", (e) => updateThemeMode() )
  },[updateThemeMode])

  updateThemeMode();
  isSystemPreferenceChange();

  return (
    <div id='este'>
      <button className={`${(isDarkMode && !isSystemSource) ? 'text-5xl' : 'text-xs'} dark:text-green-ddev dark:bg-lime-100 bg-lime-600 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-l`} onClick={() => {
        setIsDarkMode(true) 
        setSystemSource(false)} }>Dark</button>
      <button className={`${(!isDarkMode && !isSystemSource)  ? 'text-5xl' : 'text-xs'} dark:text-green-ddev dark:bg-lime-600 bg-lime-100 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-l`} onClick={() => {
        setIsDarkMode(false) 
        setSystemSource(false)}  }>Light</button>
      <button className={`${isSystemSource ? 'text-5xl' : 'text-xs'} dark:text-green-ddev dark:bg-lime-100 bg-lime-100 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-l`} onClick={() => setSystemSource(true)}>System</button>
    </div>
  )
}

export default DarkModeSwitch