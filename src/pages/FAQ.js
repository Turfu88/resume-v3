import React from 'react';
import { Layout } from '../components/Layout';
import { useQuery } from 'react-query';
import { storyblokToken, getPageContent } from '../helpers/storyblok';
import { Loader } from '../components/Loader';

export function FAQ(props) {
    const { data: dataContent } = useQuery('getFAQPageContent', () => getPageContent('cv-faq', storyblokToken));
    const content = dataContent || null;

    return (
        <Layout {...props}>
            {content === null ?
                <Loader />
                :
                <>
                    <h1 className='text-center mt-4'>
                        {content.title}
                    </h1>
                    <div className='timeline'>
                        {content.faqs.map((faq, index) => (
                            <div key={index}>
                                <div className="w-100">
                                    <div
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapsable_${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapsable_${index}`}
                                    >
                                        <div className='d-flex justify-content-between bg-light px-2 py-2 rounded mb-2'>
                                            <div className='font-bold'>
                                                {faq.question}
                                            </div>
                                            <div className='font-bold'>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse mb-4" id={`collapsable_${index}`}>
                                    <div className="px-2 py-1">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </Layout>
    );
}
