import React from 'react'


const ImageView = ({ children }) => {
    return (
        <div style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            display: 'flex',
            marginTop: 24,
            marginBottom: 24,
            flexWrap: 'wrap'
        }}>
            {children}
        </div>
    )
}

export default ImageView
