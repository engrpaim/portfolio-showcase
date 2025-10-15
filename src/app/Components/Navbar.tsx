import Link from 'next/link';
import  './../page.module.css';
export default function Navbar(){
    return(
        <div className="nav-bar-container">
            <div className='nav-bar-content'>
                <div className="nav-title">
                    <a href="#portfolio"><strong>Jose&nbsp;Batacan</strong></a>
                </div>
                <nav>
                    <a href="#works" style={{ marginRight: '1rem' }}>works</a>
                    <a href="#about" style={{ marginRight: '1rem' }}>about</a>
                    <a href="#contacts">contacts</a>
                </nav>
            </div>
        </div>
    );
}


