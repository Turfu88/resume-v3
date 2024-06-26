import React from 'react';

export function Presentation(props) {
    const content = props.content;

    return (
        <div className='row p-5'>
            <div className='col-12 col-md-5 order-2 order-md-1'>
                <h1 className='h2 text-start mt-4'>{content.title} <br /> {content.title_2}</h1>
                <p className='text-start'>
                {content.subtitle}
                </p>
            </div>
            <div className='col-12 col-md-7 text-center order-1 order-md-2'>
                <img src={content.image.filename} alt={content.image.alt} className="img-fluid" style={{borderRadius: '50%', width: '300px'}}  />
            </div>
        </div>
    );
}
