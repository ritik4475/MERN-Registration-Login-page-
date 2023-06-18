import React, { useState } from 'react'
import Modal from './Modal';

function Navb() {

  //const [openmodal, setmodal] = useState(false);
  return (

    <div >
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{position:'fixed',width:'100%'}}>
        <div class="container-fluid" >
          <a class="navbar-brand" href="/" style={{ fontSize: '24px', color: '#5C5D5D' }}><span style={{ color: '#27A365' }}>ATG.</span>W<img src='images/logo (2).png' alt='logo' style={{ height: '20px', width: '24px' }} />RLD</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <form class="d-flex" role="search">
                <div style={{ marginLeft: '20rem', width: '370px', backgroundColor: '#F2F2F2', display: 'flex', borderRadius: '20px', paddingLeft: '1rem', paddingRight: '1rem', height: '2.5rem' }}>
                  <img src='images/search.png' alt='src' style={{ width: '16.03px', height: '16.03px', marginTop: '0.7rem' }} />
                  <input type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" style={{ border: 'none', backgroundColor: '#F2F2F2', width: '410px', color: '#5C5C5C', fontSize: '14px', fontStyle: 'normal', marginLeft: '1rem', outline: 'none' }} />
                </div>
              </form>

              <li >
              <a href='/register'  style={{textDecoration:'none', color: '#2E2E2E', marginLeft: '15rem', border: 'none', backgroundColor: 'transparent' }}>
                  Create account. <span style={{ color: '#2F6CE5' }}><b>It's free!</b></span>
                </a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navb