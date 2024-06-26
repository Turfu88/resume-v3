import React from 'react';

export default function VerticalLine({secondary}) {
    
    return (
        <div className={`border border-start mx-4 ${secondary ? 'bd-secondary' : 'bd-primary'}`}>
            <span
                className={secondary ? 'bd-secondary' : 'bd-primary'}
                style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid black',
                    position: 'absolute',
                    borderRadius: '50%',
                    marginLeft: '-8px',
                    marginTop: '7px',
                    backgroundColor: 'white'
                }}
            ></span>
        </div>
    )
}