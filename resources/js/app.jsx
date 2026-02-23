import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import './bootstrap';
import { StrictMode } from 'react';
import { AuthHeader } from './layouts/frontend/auth-header';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
        let page =  pages[`./pages/${name}.jsx`] 

        page.default.layout = page.default.layout || (page => <AuthHeader children={page} /> )

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(

                <StrictMode>
                    <App {...props} />
                </StrictMode>

        )
    },
})