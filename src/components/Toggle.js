import React from "react";
import { ThemeContext } from "../theme/ThemeProvider";

export default function Toggle() {
    const { theme, setTheme } = React.useContext(ThemeContext)
    const toggleTheme = () => {
        setTheme(curr => curr === 'light' ? 'dark' : 'light')
    }
    React.useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);
    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}