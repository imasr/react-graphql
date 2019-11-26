import React from 'react';
import './Register.scss';
import formData from './form.json'

import Input from '../../shared/components/Input/Input';

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        console.log(formData)
        this.state = formData
    }
    submitForm = event => {

    }

    render() {
        const formArray = [];
        for (const key in this.state.formData) {
            formArray.push({
                id: key, 
                config: this.state.formData[key]
            });
        }
        console.log(formArray)

        let form = (
            <form onSubmit={this.submitForm}>
                {formArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        id={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        className={formElement.className}
                        changefield={()=>{}}
                    />
                ))}
            </form>
            )
        return (
            <div className="container">
                <div className="Login">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 maxWidth p-4">
                        <h5 className="py-2">Register</h5>
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}