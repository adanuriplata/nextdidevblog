import React, { useCallback, useEffect, useState } from 'react'
import {DarkModeIcon } from '../icons/DarkModeIcon'
// import {DarkModeIcon, SystemModeIcon } from '../icons/DarkModeIcon'



export const DarkModeSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState<Boolean>(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  )
  const [isSystemSource, setSystemSource] = useState<Boolean>(
    typeof window !== 'undefined' && !localStorage.getItem('theme')
  )

  // setIsDarkMode(typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark')
  // setSystemSource(typeof window !== 'undefined' && !localStorage.getItem('theme'))

  // const [isDarkMode, setIsDarkMode] = useState<Boolean>()
  // const [isSystemSource, setSystemSource] = useState<Boolean>()






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
    <>
      <div className={`${false ? 'bg-gray-700' : 'hover:bg-gray-700'} cursor-pointer text-gray-300 font-sans items-center font-medium px-3 py-2 hover:bg focus:outline-none rounded-md transition duration-500 ease-in-out `} onClick={() => {
        setIsDarkMode(!isDarkMode) 
        setSystemSource(false)} }>
            <DarkModeIcon />
      </div>
      {/* TODO: solve details of not matching server and client styles */}
      {/* <div className={`${isSystemSource ? 'bg-gray-700' : 'hover:bg-gray-700'} cursor-pointer text-gray-300 font-sans items-center font-medium px-3 py-2 hover:bg focus:outline-none rounded-md transition duration-500 ease-in-out `} onClick={() => {
        // setIsDarkMode(!isDarkMode) 
        setSystemSource(true)} }>
            <SystemModeIcon />
      </div> */}
    </>
  )
}

export default DarkModeSwitch