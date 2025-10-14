import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <a href="#home" style={{ marginRight: '1rem' }}>Home</a>
            <a href="#about" style={{ marginRight: '1rem' }}>About</a>
            <a href="#projects">Projects</a>
        </nav>
    );
}


