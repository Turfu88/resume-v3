import React from 'react';
import { downloadDocument } from '../helpers/download';

export function AboutMe(props) {
    const content = props.content;

    function handleDownloadResume() {
        downloadDocument('/CV_Johan_Clement_2024.pdf', 'cv - johan clement.pdf');
    }

    return (
        <div className='row p-5'>
            <div className='col-12 col-md-4'>
                <img src={content.details_image.filename} className="img-fluid" alt={content.details_image.alt} />
            </div>
            <div className='col-12 col-md-8'>
                <h2 className='h2 text-start mt-4'>{content.details_title}</h2>
                <p className='text-start'>
                    {content.details_content}
                </p>
                <ul className="list-unstyled row text-start fw-bold">
                    <li className="col-12 col-lg-6">
                        Expérience: <span className='fw-normal'>{content.experience_years}</span>
                    </li>
                    <li className="col-12 col-lg-6">
                        Email: <span className='fw-normal'>{content.email}</span>
                    </li>
                    <li className="col-12 col-lg-6">
                        Téléphone: <span className='fw-normal'>{content.phone}</span>
                    </li>
                    <li className="col-12 col-lg-6">
                        Age: <span className='fw-normal'>{content.age}</span>
                    </li>
                </ul>
                <div className="text-start">
                    <button type="button" className="btn bg-primary" onClick={handleDownloadResume}>
                        {content.button_cta}
                    </button>
                </div>
            </div>
        </div>
    );
}