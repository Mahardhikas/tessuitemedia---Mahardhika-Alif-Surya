import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner.jsx'
import logo from './assets/logo.png'
import bannerImage from './assets/banner-image.jpg'
import ListPost from './components/ListPost'
import Card from './components/Card'
import Nomor from './components/Nomor'
import Header from './components/header'

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
        <Header/>
        <Banner/>
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
