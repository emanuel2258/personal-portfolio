import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {

    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout;