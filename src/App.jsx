import './App.css'
import Banner from './components/Banner.jsx'
import ListPost from './components/ListPost'
import Card from './components/Card'
import Nomor from './components/Nomor'
import { Header } from './components/header'
function App() {


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
