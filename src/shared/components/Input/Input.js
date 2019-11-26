import React from 'react';
import './Input.scss';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Input = (props) => {
    console.log(props)
    let inputElement = null
    switch ( props.elementType ) {
        case 'input':
            inputElement=<TextField
                            margin="normal"
                            variant="outlined"
                            className="font-size-14px fullWidth rounded-0"
                            {...props.elementConfig}
                            id={props.id}
                            label={props.id}
                            name={props.id}
                            value={props.value}
                            onChange={props.changefield} />
            break;
        case 'select':
            inputElement=
            <FormControl variant="outlined" className="fullWidth MuiFormControl-marginNormal font-size-14px fullWidth rounded-0" >
                <InputLabel id="demo-simple-select-error-label">{props.id}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id={props.id}
                    value={props.value}
                    onChange={props.changefield}>
                    <MenuItem value=""><em>None</em></MenuItem>
                        {props.elementConfig.options.map(option=>(
                        <MenuItem key={option.value} value={option.value}>
                            {option.displayValue}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>    
            break;
        case 'button':
            inputElement=<Button
                            variant="contained"
                            color="primary"
                            className="btnLogin font-size-14px"
                            width={1}
                            {...props.elementConfig}> {props.id}
                            </Button>
            break;    
        default:
            break;
    }


    return (
         inputElement
    )
}
export default Input