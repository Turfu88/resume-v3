import React from 'react';
import VerticalLine from './VerticalLine';

export function Experiences(props) {
    const content = props.content;

    return (
        <div className='row text-start timeline'>
            <h3 className='h2 mb-4'>
                {content.experience_title}
            </h3>
            <div>
                {content.experience_content.map((experience, index) => (
                    <div className='d-flex' key={index}>
                        <p className='text-center' style={{ minWidth: '40px', position: 'relative', top: '-4px' }}>{experience.start}<br />{experience.end}</p>
                        <VerticalLine />
                        <div>
                            <p className='fw-bold h4 primary'>
                                {experience.title}
                            </p>
                            <p className='fw-bold'>{experience.subtitle}</p>
                            <p dangerouslySetInnerHTML={{ __html: experience.description.replace(/\n/g, '<br>') }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}