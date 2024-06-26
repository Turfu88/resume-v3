import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className='d-flex align-items-center shadow-sm p-2 sticky-top bg-white rounded-top responsive-header'>
            <span className='h3'>Johan CLEMENT</span>
            <nav className='d-flex gap-4'>
                <Link className='link' to="/">
                    Présentation
                </Link>
                <Link className='link' to='/mes-projets'>
                    Projets
                </Link>
                <Link className='link' to='/faq'>
                    FAQ
                </Link>
            </nav>
        </div>
    );
}