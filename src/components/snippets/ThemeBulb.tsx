import { useState } from 'react';

const ThemeBulb = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    return (
        <img src={`/icons/lightbulb${darkTheme ? '_off' : ''}.svg`} style={{ position: 'absolute', width: '38px', padding: '6px 8px 0 0', right: 0 }}
            onClick={() => {  setDarkTheme(!darkTheme) }}
        />
    )
}

export default ThemeBulb;