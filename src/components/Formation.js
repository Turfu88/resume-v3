import React from 'react';
import VerticalLine from './VerticalLine';

export function Formation(props) {
    const content = props.content;
    console.log(content.education_content[0].description);

    return (
        <div className='row text-start timeline'>
            <h3 className='h2 mb-4'>Formation</h3>
            <div>
                {content.education_content.map((experience, index) => (
                    <div className='d-flex' key={index}>
                        <p className='text-center' style={{ minWidth: '40px', position: 'relative', top: '-4px' }}>{experience.start}<br />{experience.end}</p>
                        <VerticalLine secondary={true} />
                        <div>
                            <p className='fw-bold h4 secondary'>
                                {experience.title}
                            </p>
                            <p className='fw-bold mb-2'>{experience.subtitle}</p>
                            <p dangerouslySetInnerHTML={{ __html: experience.description.replace(/\n/g, '<br>') }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}