import React, { Component } from 'react'



class Login extends Component {

    enderError = () => {
        if (this.props.error.length > 0) {
            return <p className="alert alert-danger">{this.props.error}</p>
        }
    }
    
    renderButton = () => {
        if (this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <input type="button" name="submit" id="submit" className="form-submit" defaultValue="Login" onClick ={this.onBtnRegisterClick}/>
    }
    render(){
            return (
                <div className= "bodyRegister"> 
            <div className="main">
                <section className="signup">
                {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container1">
                        <div className="signup-content">
                            <form method="POST" id="signup-form" className="signup-form">
                                    <h2 className="form-title">Create account</h2>
                                    <div><br/></div>
                                    <div className="form-group">
                                        <input type="text" className="form-input" ref="username" name="username" id="username" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-input" ref="password" name="password" id="password" placeholder="Password" />
                                    </div>
                                    {this.renderError()}
                                    {this.renderLoading()}
                            </form>
                            <p className="loginhere">
                              Have already an account ? <a href="/login" className="loginhere-link">Login here</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            </div> 
            ); 
    }
}




export default Login;
