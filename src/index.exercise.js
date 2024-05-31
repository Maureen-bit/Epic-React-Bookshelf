import React, { useState }  from 'react';
import { createRoot } from 'react-dom/client';
import { Logo } from './components/logo';
import LoginModal from 'components/modal';

const App = () => {

    const [openModal, setOpenModal] = useState('none');

    return (
        <>  
            <h1>Bookshelf</h1>
            <Logo />
            <div>
                <button onClick={() => setOpenModal('login')}>Login</button>
                <button onClick={() => setOpenModal('register')}>Register</button>
            </div>
            <LoginModal openModal={openModal} />
        </>
    )
};

export default App;

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);