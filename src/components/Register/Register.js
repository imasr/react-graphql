import React from 'react';
import './Register.scss';
import formData from './registrationForm.json'
import Logo from '../../assets/app_icon.png';
import Utils from '../../services/Utils';
import axios from '../../services/api.services';

import Input from '../../shared/components/Input/Input';
import Image from '../../shared/components/Image/Image';
import CustomButton from '../../shared/components/Button/Button';
import Spinner from '../../shared/components/Spinner/Spinner';


export default class Register extends React.Component {

    constructor(props) {
        super(props)
        console.log(formData)
        this.state = formData
    }
    submitForm = event => {
        event.preventDefault()

        this.setState({ loading:true });
        const formData={}
        for (let key in this.state.InputElements) {
            formData[key.toLowerCase()] = this.state.InputElements[key].value;
        }
        console.log(formData);

        axios.post('register', formData ).then( response => {
                console.log(response);
                localStorage.setItem('user',JSON.stringify(response.data.result)) 
                this.setState({ loading: false });
            }).catch( error => {
                console.log(error);
                this.setState({ loading: false });
            } );
       
    }

    checkValidity=(type, value, rule)=>{
        let isfieldValid=true
        if(rule){
            if(isfieldValid && rule.required){
                isfieldValid = value.trim() !== '' 
            }
            if(isfieldValid && rule.maxLength){
                isfieldValid =  value.trim().length <= rule.maxLength
            }
            if(isfieldValid && rule.minLength){
                isfieldValid = isfieldValid && value.trim().length >= rule.minLength
            }
            if(isfieldValid && type === 'email'){
                isfieldValid =  Utils.validateEmail(value)
            }
            if(isfieldValid && type === 'password'){
                isfieldValid =  Utils.validatePassword(value)
            }
        }
        return isfieldValid
    }

    onChange=(event, field)=>{
        const InputElements = {
            ...this.state.InputElements
        };
        const updatedFormElement = { 
            ...InputElements[field]
        };
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.checkValidity(updatedFormElement.elementConfig.type, updatedFormElement.value, updatedFormElement.validation);

        InputElements[field] = updatedFormElement;

        let formIsValid = true
        for (const inputName in InputElements){
            formIsValid= formIsValid && InputElements[inputName].valid
        }

        this.setState({ InputElements, formIsValid });
    }

    render() {
        const formArray = [];
        for (const key in this.state.InputElements) {
            formArray.push({
                id: key, 
                config: this.state.InputElements[key]
            });
        }
        console.log(this.state)

        let form = (
            <div>
                <h5 className="py-2">Register</h5>
                <Image src={Logo} variant="rounded"/>
                <form onSubmit={this.submitForm}>
                    {formArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            id={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            className={formElement.className}
                            changeEvent={event=>this.onChange(event, formElement.id)}
                        />
                    ))}
                <CustomButton key={this.state.Button.text}
                        id={this.state.Button.text}
                        elementType={this.state.Button.elementType} 
                        elementConfig={this.state.Button.elementConfig}
                        text={this.state.Button.text}
                        className={this.state.Button.className}
                        disabled={!this.state.formIsValid}
                        />
                </form>
            </div>
            )
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className="container">
                <div className="Login">
                    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 background-white p-4">
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}