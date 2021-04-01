import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
const Layout = ({ children }) => {
    return ( 
        <div className="content">
                <Navbar />
                { children }  
                <Footer />
       </div>
     );
}
 
export default Layout;