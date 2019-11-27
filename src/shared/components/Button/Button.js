import React from 'react';
import './Button.scss';
import Button from '@material-ui/core/Button'

const CustomButton = (props) => {
    console.log(props)
    return(
       <Button
            variant="contained"
            color="primary"
            className="btnLogin font-size-14px"
            width={1}
            disabled={props.disabled}
            {...props.elementConfig}> {props.text}
        </Button>

    )
}
    
export default CustomButton