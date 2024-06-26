import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Experiences } from '../components/Experiences';
import { Formation } from '../components/Formation';
import { LatestProjects } from '../components/LatestProjects';
import { Layout } from '../components/Layout';
import { Presentation } from '../components/Presentation';
import { useQuery } from 'react-query';
import { storyblokToken, getPageContent } from '../helpers/storyblok';
import { Loader } from '../components/Loader';

export function Home(props) {
    const { data: dataContent } = useQuery('getHomepageContent', () => getPageContent('cv-home', storyblokToken));
    const publicContent = dataContent || null;

    return (
        <Layout {...props}>
            {publicContent === null ?
                <Loader />
                :
                <>
                    <Presentation content={publicContent} />
                    <hr />
                    <AboutMe content={publicContent} />
                    <hr />
                    <Experiences content={publicContent} />
                    <hr />
                    <LatestProjects content={publicContent} />
                    <hr />
                    <Formation content={publicContent} />
                </>
            }
        </Layout>
    );
}