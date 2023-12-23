import { useState, useEffect } from 'react'
import Header from './components/header'
import './App.css'
import Banner from './components/Banner'
import logo from './assets/logo.png'
import bannerImage from './assets/banner-image.jpg'
import ListPost from './components/ListPost'
import Card from './components/Card'
import Nomor from './components/Nomor'

function App() {
  const [activeMenu, setActiveMenu] = useState('Ideas');
  
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolling(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [posts, setPosts] = useState([]);

  const [config, setConfig] = useState({
    sort: 'latest',
    itemsPerPage: 10,
    currentPage: 1,
  });

  const fetchData = async () => {
    try {
      const response = await fetch('https://suitmedia-backend.suitdev.com/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: {
            number: config.currentPage,
            size: config.itemsPerPage,
          },
          sort: config.sort,
          append: ['small_image', 'medium_image'],
        }),
      });
  
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


  return (
    <div className='window'>
        <header>
          <div>
            <nav className='fixed-header'>
              <div>
                <img src={logo} alt=" "/>
              </div>
              <div>
                <ul className='nav_list'>
                  <li className={`nav_item ${activeMenu === 'Work' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Work')}>Work</li>
                  <li className={`nav_item ${activeMenu === 'About' ? 'active-link' : ''}`} onClick={() => handleMenuClick('About')}>About</li>
                  <li className={`nav_item ${activeMenu === 'Services' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Services')}>Services</li>
                  <li className={`nav_item ${activeMenu === 'Ideas' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Ideas')}>Ideas</li>
                  <li className={`nav_item ${activeMenu === 'Careers' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Careers')}>Careers</li>
                  <li className={`nav_item nav_ujung ${activeMenu === 'Contact' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Contact')}>Contact</li>
                </ul>
              </div>
            </nav>
          </div>
          </header>

          <main>
          <section className={`banner ${isScrolling ? 'is-scrolling' : ''}`}>
            <div className="parallax-container">
              <img src={bannerImage} alt="Banner" className="parallax-image" />
              <div className="banner-text">
                <h1>Ideas</h1>
                <p>Where All Our Great Things Begin</p>
              </div>
            </div>
          </section>
          </main>
          <div classname="mx-20">
            <ListPost/>
            <div className='grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-2 xl:gap-4 my-8 xl:mx-20 mx-0 md:mx-8'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>   
            </div>
            <Nomor/>
          </div>
    </div>
  )
}

export default App
