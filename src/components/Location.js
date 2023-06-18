import React from 'react'

function Location() {
  return (
    <div style={{ width: '20%' }}>
      <div style={{ display: 'flex', marginTop: '3rem' }}>
        <img src='images/vector (1).png' style={{ height: '1rem', marginTop: '0.2rem' }} />
        <p style={{ fontSize: '17px', marginLeft: '0.5rem', color: 'black' }}>Noida, India</p>
        <img src='images/vector (2).png' style={{ height: '1rem', marginLeft: '7rem' }} />
      </div>
      <hr style={{ width: '95%' }} />
      <div style={{ display: 'flex' }}>
        <img src='images/vector.png' style={{ height: '1rem', marginRight: '0.8rem', marginTop: '0.1rem' }} />
        <p style={{ fontSize: '14px', color: 'gray' }}>Your location will help us serve better and extend a personalised experience.</p>
      </div>
    </div>
  )
}

export default Location