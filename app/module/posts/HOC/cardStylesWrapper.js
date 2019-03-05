import React from 'react';
import {card2} from '../styles';


const translateProps = (props) => {
    // console.warn(JSON.stringify(s.commentLogo))
    let _styles = {...card2.default}
    _styles = {..._styles, ...card2[props.name]};
    if(props.index%2==1){
      _styles = {..._styles, ...card2.cardBackgroundWhite};
    }
    const newProps = {...props,styles:_styles}
    return newProps;
}

export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}
