import {createContext, useState } from 'react'

export const GlobalThemeContext = createContext(null as any);
const ThemeContext = ({children}: any) => {
    const[theme,setTheme]= useState('light');
  return (
   <GlobalThemeContext.Provider value={{theme,setTheme}}>
    {children}
   </GlobalThemeContext.Provider>
  )
}

export default ThemeContext
