import React from 'react';
import { Link } from 'react-router-dom';

export function LatestProjects(props) {
    const content = props.content;

    return (
        <div className='text-start timeline'>
            <h3 className='h2 mb-4'>{content.last_projects_title}</h3>
            <div className="row">
                {content.last_projects.map((project, index) => (
                    <div className='col-12 col-md-6 col-lg-4 mb-4' key={index}>
                        <div className='border w-10 rounded p-2 text-center h-100 d-flex flex-column card-shadow'>
                            <p className='font-bold'>{project.title}</p>
                            <div className='flex-grow-1 mb-2'>{project.description}</div>
                            <Link to={project.cta.url}>
                                <button type="button" className="btn bg-primary">{project.cta_content}</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}