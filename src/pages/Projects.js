import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { storyblokToken, getPageContent } from '../helpers/storyblok';
import { Loader } from '../components/Loader';

export function Projects(props) {
    const { pathname, hash, key } = useLocation();
    const { data: dataContent } = useQuery('getProjectsPageContent', () => getPageContent('cv-projects', storyblokToken));
    const content = dataContent || null;

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        <Layout {...props}>
            {content === null ?
                <Loader />
                :
                <>
                    <h1 className='mt-4 text-center'>{content.title}</h1>
                    {content.projects.map((project, key) => (
                        <section id={project.id} key={key}>
                            <div className={key % 2 !== 0 ? 'row timeline pb-4 flex-row-reverse' : 'row timeline pb-4'}>
                                <div className='col-12 col-md-7 mb-4'>
                                {project.redirection_url.url !== '' ?
                                    <a href={project.redirection_url.url} target="_blank" rel="noreferrer">
                                        <img src={project.image.filename} className="img-fluid" alt={project.image.alt} />
                                    </a>
                                    :
                                    <img src={project.image.filename} className="img-fluid" alt={project.image.alt} />
                                }
                                </div>
                                <div className='col-12 col-md-5'>
                                    <div className='bg-light rounded p-3'>
                                        <h2 className='h2 text-start'>
                                            {project.title}
                                        </h2>
                                        <p className='text-start'>
                                            {project.description}
                                        </p>
                                        {project.stacks.map((stack, index) => (
                                            <div key={index}>
                                                <div className='d-flex'>
                                                    <div className='font-bold' style={{ width: '100px' }}>
                                                        {stack.property}:
                                                    </div>
                                                    <div>{stack.stack}</div>
                                                </div>
                                                {index < project.stacks.lenght &&
                                                    <hr className='my-1' />
                                                }
                                            </div>
                                        ))}
                                        {project.redirection_url.url !== '' &&
                                            <div className='d-flex'>
                                                <div className='font-bold' style={{ width: '100px' }}>
                                                    Lien du site:
                                                </div>
                                                <a href={project.redirection_url.url} target="_blank" rel="noreferrer">
                                                    {project.title}
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <p className='text-start px-5'>
                                {project.details}
                            </p>
                            {key < content.projects.length - 1 &&
                                <div className='px-5 pt-2'>
                                    <hr />
                                </div>
                            }
                        </section>
                    ))}
                </>
            }
        </Layout>
    );
}
