import React from 'react';
import './Login.scss';
import Logo from '../../assets/app_icon.png';
import Image from '../../shared/components/Image/Image';

import formData from './loginForm.json'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const passwordObj = {
    minUppercaseCharCount: 1,
    minLowercaseCharCount: 1,
    minDigitsCount: 1,
    minSpecCharCount: 1,
    minLength: 6
};
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const regixPasswordPattern = RegExp(`^(?=.*?[A-Z]{${passwordObj.minUppercaseCharCount}})(?=.*?[a-z]{${passwordObj.minLowercaseCharCount}})(?=.*?[0-9]{${passwordObj.minDigitsCount}})(?=.*?[#?!@$%^&*-]{${passwordObj.minSpecCharCount}}).{${passwordObj.minLength},}$`)

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: { email: '', password: '' },
            error: {}
        }

    }

    handleValidation = () => {
        let error = this.state.error
        if (!this.state.form.email) {
            error['email'] = "Email Required"
        } else if (!this.state.form.password) {
            error['password'] = "Password Required"
        } else if (this.state.form.email && !validEmailRegex.test(this.state.form.email)) {
            error['email'] = "Invalid Email"
        } else if (this.state.form.password && !regixPasswordPattern.test(this.state.form.password)) {
            error['password'] = "Invalid Password pattern"
        } else {
            error = {}
        }
        this.setState({ error })
        return Object.keys(error).length ? false : true
    }

    submitForm = event => {
        event.preventDefault();
        if (this.handleValidation()) {
            console.info('Valid Form')
        } else
            console.info('InValid Form')
        console.log(this.state)
    }

    changefield = (ev) => {
        let form = this.state.form
        form[ev.target.name] = ev.target.value
        this.setState({ form });
    }


    render() {
        return (
            <div className="container">
                <div className="Login">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 maxWidth p-4">
                        <Image src={Logo} />
                        <h5 className="py-2">Sign In</h5>
                        <form className="needs-validation" onSubmit={this.submitForm}>
                            <div>
                                <TextField
                                    label="Email"
                                    margin="normal"
                                    variant="outlined"
                                    className="font-size-14px fullWidth rounded-0"
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    onChange={this.changefield} />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    margin="normal"
                                    variant="outlined"
                                    className="font-size-14px fullWidth rounded-0"
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    onChange={this.changefield} />
                            </div>
                            <div className="text-right">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="btnLogin font-size-14px"
                                    width={1}
                                    type="submit">Sign in</Button>
                            </div>
                        </form>
                        <div className="font-size-14px">
                            <a href="/forgot" >Forgot password?</a>
                        </div>
                        <div className="py-2 font-size-14px">
                            <a href="/new" >New User?</a>
                        </div>
                        <div className="py-2 font-size-14px">
                            <a href="/fb" className="fb text-white mr-1 p-2 pointer" data-toggle="tooltip" data-placement="top"
                                title="Facebook login" > <i className="fa fa-facebook fa-fw font-size-18px"></i>
                            </a>

                            <a href="/google" className="google text-white p-2 pointer" data-toggle="tooltip"
                                data-placement="top" title="Google Login" id="googleBtn">
                                <i className="fa fa-google fa-fw font-size-18px">
                                </i>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        )
    };
}