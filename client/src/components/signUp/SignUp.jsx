import React from 'react';
import "./signup.css";
import signup from "./signup.jpg"
import { useNavigate } from "react-router-dom";
import Header2 from '../header/Header2';



class SignUpForm extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            re_pass: '',
            agree: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCheckboxChange = (e) => {
        this.setState({ agree: e.target.checked });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    

    render() {
        return (

            <>
            <Header2/>

            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={this.handleSubmit} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" value={this.state.pass} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re_pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={this.state.re_pass} onChange={this.handleChange} />
                                </div>
                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signup}  alt="" /> </figure>
                          
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}


export default SignUpForm;
