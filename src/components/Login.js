import React from 'react';
import './Login.scss';
import Logo from '../assets/app_icon.png';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: { email: '', password: '' },
            error: {}
        }
    }

    handleValidation = event => {
        let formObj = this.state.form
    }

    submitForm = event => {
        console.log(this.state)
        if (this.handleValidation()) {
        }
        event.preventDefault();
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
                        <div className="">
                            <img
                                src={Logo}
                                className="logo img rounded"
                                width="60"
                                alt="" />
                        </div>
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
                                    onChange={this.changefield}
                                />
                            </div>

                            <div >
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    margin="normal"
                                    variant="outlined"
                                    className="font-size-14px fullWidth rounded-0"
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    onChange={this.changefield}
                                />
                            </div>
                            <div
                                className="text-right">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="btnLogin font-size-14px"
                                    width={1}
                                    type="submit"
                                >Sign in</Button>
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
                                title="Facebook login" >
                                <i className="fa fa-facebook fa-fw font-size-18px"></i>
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