import React from 'react'
function Post(props) {
    const style = {
        border: '1px solid #E0E0E0',
        width: '65%',
        marginLeft: '11rem',
        marginBottom: '1.5rem'
    }
    const img = {
        width: '100%'
    }
    return (
        <div style={style}>
            <img src={props.value} alt='img' style={img} />
            <p style={{ marginLeft: '1rem', marginTop: '0.5rem', fontSize: '15px' }}>✍️<b style={{ marginLeft: '0.5rem' }}>Article</b></p>
            <h5 style={{ marginLeft: '1rem', fontSize: '20px' }}><b>What if famous brands had regular fonts? Meet</b><img src='images/dots.png' style={{ height: '1rem', marginLeft: '4rem' }} /><br /> <b>RegulaBrands!</b></h5>
            <p style={{ marginLeft: '1rem', color: '#5C5C5C', fontSize: '16px', marginTop: '1rem' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
                <img src='images/profile1.png' style={{ marginLeft: '1rem' }} />
                <p style={{ height: '1rem', marginTop: '0.7rem', marginLeft: '0.9rem' }}>Sarthak Kamra</p>
                <img src='images/view.png' style={{ height: '0.7rem', marginTop: '1rem', marginLeft: '12rem' }} />
                <p style={{ marginTop: '0.7rem', color: '#525252', fontSize: '14px', marginLeft: '0.5rem' }}>1.4k views</p>
                <button style={{ height: '1.7rem', width: '35px', border: 'none', borderRadius: '5px', backgroundColor: '#EDEEF0', marginTop: '0.5rem', marginLeft: '2.8rem' }}>
                    <img src='images/share (2).png' />
                </button>
            </div>
        </div>
    )
}

export default Post