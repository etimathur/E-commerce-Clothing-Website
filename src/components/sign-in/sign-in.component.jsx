import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-buton.component';
import {signInWithGoogle} from '../../firebase/firebase.util';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
        const {value,name} =event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email"value={this.state.email} handleChange={this.handleChange} required label="Email"/>
                    
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="Password"/>
                    
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}SIGN IN WITH GOOGLE{' '}</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;
