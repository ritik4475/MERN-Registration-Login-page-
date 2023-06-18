import React from 'react'
import Navb from './components/Navb';
import Top from './components/Top';
import Scndnav from './components/Scndnav';
import Post from './components/Post';
import Location from './components/Location';
import Login from './components/Login';
import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Modal from './components/Modal';

export default function App() {

  const img1 = "images/postimg1.png";
  const img2 = "images/postimg2.png";
  const img3 = "images/postimg3.png";

  return (

    <div className='App' style={{ backgroundColor: 'white' }}>
      <BrowserRouter>
        <Routes>
        /**home page */
          <Route exact path='/' element={ <>
            <Navb />
            <Top />
            <Scndnav />
            <div style={{ display: 'flex' }}>
              <div>
                <Post value={img1} />
                <Post value={img2} />
                <Post value={img3} />
              </div>
              <Location />
            </div>
          </> }/>
          /**Login page */
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Modal />}/>
        </Routes>
      </BrowserRouter>

      

    </div>
  )
}
