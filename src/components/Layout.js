import React from 'react';
import { Header } from './header';
import { Footer } from './Footer';

export function Layout(props) {
    return (
        <div className="container-sm p-0 my-4 rounded page-layout">
            <Header {...props} />
            <main className='pb-4 mb-4'>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}