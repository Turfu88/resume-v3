import React from 'react';

export function Footer() {
    return (
        <div className='text-center py-5 bg-light rounded'>
            © JOHAN CLÉMENT {new Date().getFullYear()} | <a href="/mentions-legales" className="link-primary">Mentions légales</a>
        </div>
    );
}