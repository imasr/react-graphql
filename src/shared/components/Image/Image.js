import React from 'react';
import './Image.scss';

import Avatar from '@material-ui/core/Avatar';


const Image = (props) => {
    console.log(props)
    return(
        <Avatar variant={props.variant} alt="Remy Sharp" src={props.src} />

    )
    
}
export default Image