import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ScrollToTop from './components/ScrollToTop';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(`[Analytics] Page View: ${location.pathname}`);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="policies" element={<Policies />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
