import React from 'react';
import './Login.scss';
import Logo from '../assets/app_icon.png';


export default class Login extends React.Component {
    constructor() {
        super()
        this.submitForm = (email, password) => {
            console.log(email, password)
        }
        this.changeEmail = (ev) => {
            console.log(ev.target.value)
        }
        this.changePassword = (ev) => {
            console.log(ev.target.value)
        }
    }


    render() {
        const email = this.props.email;
        const password = this.props.password;
        return (
            <div className="container">
                <div className="Login">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 maxWidth p-4">
                        <div className="">
                            <img src={Logo} className="logo img rounded" width="60" alt="" />
                        </div>
                        <h5 className="py-2">Sign In</h5>
                        <form className="needs-validation" onSubmit={this.submitForm(email, password)}>
                            <fieldset className="form-group">
                                <input
                                    className="form-control font-size-14px  rounded-0"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={this.changeEmail} />
                            </fieldset>

                            <fieldset className="form-group">
                                <input
                                    className="form-control font-size-14px  rounded-0"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.changePassword} />
                            </fieldset>
                            <fieldset className="text-right">

                                <button className="btn btn-primary rounded-0 font-size-14px"
                                    type="submit"> Sign in
                                </button>
                            </fieldset>
                        </form>
                        <div class="font-size-14px">
                            <a href="/forgot" >Forgot password?</a>
                        </div>
                        <div class="py-2 font-size-14px">
                            <a href="/new" >New User?</a>
                        </div>
                        <div class="d-flex">
                            <a href="/fb" class="fb text-white rounded-circle mr-1 p-2 pointer" data-toggle="tooltip" data-placement="top"
                                title="Facebook login" >
                                <i class="fa fa-facebook fa-fw font-size-18px"></i>
                            </a>

                            <a href="/google" class="google rounded-circle text-white p-2 pointer" data-toggle="tooltip"
                                data-placement="top" title="Google Login" id="googleBtn">
                                <i class="fa fa-google fa-fw font-size-18px">
                                </i>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        )
    };
}