import React, { Component } from 'react';
import { PersonalContext } from '../contexts/PersonalContext' 

class ColorToggle extends Component {
    static contextType = PersonalContext;
    render() {
        const { toggleTheme } = this.context;
        return (
           <button onClick = {toggleTheme}>Toggle the theme</button>
        );
    }
}

export default ColorToggle;