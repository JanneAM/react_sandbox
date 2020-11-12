import React, { Component } from 'react';
import './Form.css';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';

class Form extends Component {
    
    state = {
        user:{
        firstName:'',
        lastName:'',
        phoneNumber:null,
        role:'',
        message:''}
    };

    handleChange = event => {
        const { user } = this.state;
      user[event.target.name] = event.target.value;
      this.setState({ user });

    }

    render() {
        const { firstName,
                lastName,
                phoneNumber,
                role,
                message
            } = this.state;
        return (
            <div className="form-cont">
                
            <form>
            <h2>Hello,</h2>
            <h3>Input your information below</h3>
            <TextInput 
                name="firstname"
                type="text"
                label="Firstname"
                value={firstName}
                placeholder="Firstname"
                onChange={this.handleChange}/>
                

            <TextInput 
                name="lastname"
                label="Lastname"
                value={lastName}
                placeholder="Lastname"
                onChange={this.handleChange}/>

            <TextInput 
                name="phonenumber"
                type="text"
                label="Phonenumber"
                value={phoneNumber}
                placeholder="Phonenumber"
                onChange={this.handleChange}/>            

            <TextArea
                name="message"
                label="Message"
                value={message}
                placeholder="Message"
                onChange={this.handleChange}/>

                 </form>    
            </div>
        );
    }
}

export default Form;