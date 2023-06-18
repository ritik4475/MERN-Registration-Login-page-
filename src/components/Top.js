import React from 'react'

function Top() {
    const style={
        width:'100%',
        opacity:'0.89'
    }
    const text = {
        position:'absolute',
        color:'white',
        left:'190px',
        bottom:'3rem',
    }
  return (
    <div style={{position:'relative'}}>
        <img src='images/topimg.png' alt='img' style={style}/>
        <div style={text}>
            <h2><b>Computer Engineering</b></h2>
            <h6>142,765 Computer Engineers follow this</h6>
        </div>
    </div>
  )
}

export default Top