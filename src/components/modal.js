import React, { useEffect, useState }  from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css'
import LoginForm from './loginForm';

const LoginModal = ({ openModal }) => {
    const [showDialog, setShowDialog] = useState(false);
    const close = () => setShowDialog(false);

    useEffect(() => {
        if(openModal === 'login' || openModal === 'register'){
            setShowDialog(true)
        } else {
            setShowDialog(false)
        }
    }, [openModal]);

    const onSubmitLoginData = (formData) => {
        console.log("🚀 ~ onSubmitLoginData ~ formData:", formData)
    }

    const onSubmitRegisterData = (formData) => {
        console.log("🚀 ~ onSubmitRegisterData ~ formData:", formData)
    }
    
    return (
        <Dialog aria-label="Login modal" style={{ color: "red" }} isOpen={showDialog} onDismiss={close}>
            { openModal === 'login' ? (
                <div>
                    <LoginForm onSendData={onSubmitLoginData} buttonText="Login"/>
                    <button onClick={close}>close</button>
                </div>
            ) : (
                <div>
                    <LoginForm onSendData={onSubmitRegisterData} buttonText="Register"/>
                    <button onClick={close}>close</button>
                </div>
                
            )}
        </Dialog>
    );
}

export default LoginModal;