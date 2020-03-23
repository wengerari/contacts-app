import React from "react";
import "./sign-in.styles.scss";

import { connect } from "react-redux";

import { toggleIsLogged } from "../../redux/isLogged/isLogged.actions";

import { Form, Input, Button } from "antd";

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            login: "",
            password: "",
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.toggleIsLogged();  
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    

    render(){
        const {toggleIsLogged}= this.props;
        const layout = {
            labelCol: { span: 10 },
            wrapperCol: { span: 4 },
        };
            const tailLayout = {
            wrapperCol: { offset: 11, span: 16 },
        };
        
        const checkLogin = (rule, value) => {
            if (value ==="admin") {
             return Promise.resolve();
        }
         return Promise.reject('Введите admin');
        };

        const checkPassword = (rule, value) => {
            if (value === "111") {
             return Promise.resolve();
        }
         return Promise.reject('Введите 111');
        };

        return(
            <div>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={() => toggleIsLogged()}
                        className="sign-in-form"
                        >
                        <Form.Item
                            label="Login"
                            name="login"
                            rules={[{ validator: checkLogin}]}
                        >
                            <Input name="login"  value={this.state.login} onChange={this.handleChange} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ validator: checkPassword}]}
                        >
                            <Input.Password name="password"  value={this.state.password} onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">подтвердить</Button>
                        </Form.Item>
                    </Form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleIsLogged: () => dispatch(toggleIsLogged())
});

export default connect(null, mapDispatchToProps)(SignIn);