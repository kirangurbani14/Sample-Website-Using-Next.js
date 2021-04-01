import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
    return ( 
        <nav>
            <h3 className="logo">Sample Website</h3>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/About">
                    <a>About</a>
                </Link>
                <Link href="/Friends">
                    <a>Friends List</a>
                </Link>
            
        </nav>
     );
}
 
export default Navbar;