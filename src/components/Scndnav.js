import React from 'react'

function Scndnav() {
    const style={
        display:'flex',
        marginLeft:'12rem',
        marginTop:'2rem',
        
    }
    const text={
        textDecoration:'none',
        color:'black',
        marginRight:'1.5rem'
    }
    const text1={
        textDecoration:'none',
        color:'#8A8A8A',
        marginRight:'1.5rem'
    }
    const btn1={
        marginLeft:'18rem',
        marginRight:'1rem',
        border:'none',
        backgroundColor:'#EDEEF0',
        borderRadius:'4px',
        fontSize:'15px'
    }
    const btn2={
        border:'none',
        backgroundColor:'#2F6CE5',
        borderRadius:'4px',
        color:'#FFFFFF',
        fontSize:'15px'

    }
    const img1={
        marginLeft:'0.8rem'
    }
    const img2={
        marginRight:'0.6rem'
    }
  return (
    <div>
    <div style={style}>
        <a href="/" style={text}>All Posts(32)</a>
        <a href="/" style={text1}>Article</a>
        <a href="/" style={text1}>Event</a>
        <a href="/" style={text1}>Education</a>
        <a href="/" style={text1}>Job</a>
        <button style={btn1}>
            Write a Post
            <img src='images/vectorarrow.png' alt='arr' style={img1}/>
        </button>
        <button style={btn2}>
        <img src='images/vectorjoin.png' alt='arr' style={img2}/>  
            Join Group
        </button>
        </div>
        <hr style={{width:'67%',marginLeft:'11.5rem'}}/>
        </div>
  )
}

export default Scndnav