import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}) => {
    return (
        <div className='bg-background min-h-screen'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;