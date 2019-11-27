import React from 'react';
import './Register.scss';
import formData from './form.json'
import Logo from '../../assets/app_icon.png';

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
        const loading = {
            ...this.state.loading
        };

        this.setState({ loading:true });
        setTimeout(() => {
            this.setState({ loading : false });
        }, 5000);
    }

    onChange=(event, field)=>{
        const InputElements = {
            ...this.state.InputElements
        };
        const updatedFormElement = { 
            ...InputElements[field]
        };
        updatedFormElement.value = event.target.value
        InputElements[field] = updatedFormElement;

        this.setState({ InputElements });
    }

    render() {
        const formArray = [];
        for (const key in this.state.InputElements) {
            formArray.push({
                id: key, 
                config: this.state.InputElements[key]
            });
        }
        console.log(formArray)

        let form = (
            <div>
                <h5 className="py-2">Register</h5>
                <Image src={Logo} />
                <form onSubmit={this.submitForm}>
                    {formArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            id={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            className={formElement.className}
                            changefield={event=>this.onChange(event,formElement.id)}
                        />
                    ))}
                <CustomButton key={this.state.Button.text}
                        id={this.state.Button.text}
                        elementType={this.state.Button.elementType} 
                        elementConfig={this.state.Button.elementConfig}
                        text={this.state.Button.text}
                        className={this.state.Button.className}
                        disabled={this.state.formIsValid}
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