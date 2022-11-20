import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <h1>Layout</h1>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout