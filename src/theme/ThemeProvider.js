import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'dark',
  setTheme: () => {},
});

export default function ThemeProvider(props){
    const [theme, setTheme] = React.useState( localStorage.getItem('theme') || 'dark')
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
           {props.children}
        </ThemeContext.Provider>
    )
}
