# Reactive Web Design in React

Installs 
- `npm i react-router-dom`

Features
- Font Awesome Icons


Cool 

- Global Button 

```jsx
/* Button.js */
import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {
        // If it doesn't have a style, set it STYLES[0]
        const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];
        return (
            <Link to="/sign-up" className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                {children}
                </button>
            </Link>
        );
};

export default Button;
```

```css
/* Button.css */
/* Creating CSS variables */
:root {
    --primary: #fff;
}

.btn {
    padding: 8px 20px;
    border-radius: 2px;
    outline: none;
    border:none;
    cursor: pointer;
}

.btn--primary {
    background-color: var(--primary);
    color: #242424;
    border: 1px solid var(--primary);
}

.btn--outline {
    background-color: transparent;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid var(--primary);
    transition: all 0.3s ease-out;
}

.btn--medium {
    padding: 8px 20px;
    font-size: 20px;
}

.btn--large {
    padding: 12px 26px;
    font-size: 20px;
}

.btn--medium:hover, .btn--large:hover {
    background: #fff;
    color: #242424;
    transition: all 0.3s ease-out;
} 
```

- Creating CSS variables

```css
/* Creating CSS variables */
:root {
    --primary: #fff;
}

.btn--primary {
    background-color: var(--primary); /* Call variable */ 
}
```