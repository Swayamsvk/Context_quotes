import React, { Component } from 'react';
import { PersonalContext } from '../contexts/PersonalContext';


class Personal extends Component {
    static contextType = PersonalContext;
    render() {
        const { isColoured,blue,brown } = this.context;
        const theme = isColoured ? blue : brown;
        return (
            <div className="personal-list container-fluid" style={{ color: theme.word}}>
               <p>"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela</p>
               <p>"The way to get started is to quit talking and begin doing." -Walt Disney</p>
               <p>"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs</p>
               <p>"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt</p>
               <p>"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey</p>
               <p>"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." -James Cameron</p>
               <p>"Life is what happens when you're busy making other plans." -John Lennon</p>
                
            </div>
        );
    }
}

export default Personal;