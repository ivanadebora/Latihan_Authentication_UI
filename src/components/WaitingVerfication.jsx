import React, {Component} from 'react';

class WaitingVerification extends Component {
    render(){
        return(
            <div>
                <h2>Tolong disimak!</h2>
                <p>Silahkan mengecek email Anda untuk verifikasi akun Anda</p>
                <p>Bila anda tidak mendapat email, klik button dibawah untuk Resend</p>
                <input type="button" value="Resend email" />
            </div>
        )
    }
}

export default WaitingVerification