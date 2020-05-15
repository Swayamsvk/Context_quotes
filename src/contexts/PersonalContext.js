import React, { createContext,Component } from 'react';

export const PersonalContext = createContext();


class PersonalContextProvider extends Component {
    
    state = {
        isColoured: true,
        blue:{ word: '#2B547E'},
        brown: { word:'#7D542A'}
    }

    toggleTheme = () => {
        this.setState({isColoured:!this.state.isColoured});
    }
    render() {
        return (
           <PersonalContext.Provider value={{...this.state,toggleTheme:this.toggleTheme }}>
            {this.props.children}
           </PersonalContext.Provider>
        );
    }
}

export default PersonalContextProvider;