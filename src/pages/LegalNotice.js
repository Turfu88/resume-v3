import React from 'react';
import { Layout } from '../components/Layout';
import { useQuery } from 'react-query';
import { storyblokToken, getPageContent, renderHtmlContent } from '../helpers/storyblok';

export function LegalNotice(props) {
    const {data: dataContent} = useQuery('getPageContent', () => getPageContent('cv-mentions-legales', storyblokToken));
    const publicContent = dataContent || null;

    return (
        <Layout {...props}>
            <div className="mt-4 mx-4">
                <h1 className="text-center mb-4">Mentions légales</h1>
                {publicContent === null ?
                    <div mt="xl" mb="md">
                        <p>Chargement...</p>
                    </div>
                :
                    <div dangerouslySetInnerHTML={{ __html: renderHtmlContent(publicContent.body) }} />
                }
            </div>
        </Layout>
    );
}