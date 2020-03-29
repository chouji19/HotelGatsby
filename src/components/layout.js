import React from 'react';
import Header from './header';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet'
import Footer from './footer';
import useSeo from '../hooks/use-seo';




const Layout = (props) => {

    const seo = useSeo();

    const { fallbackSeo: { description, title }} = seo;

    return ( 
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 65.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 16px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Rpboto', serif;
                    }
                    h1 {
                        font-family: 'PT Sans', sans-serif;

                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                `}

            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
                integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            {props.children}
            <Footer 
                title={title}
            />
        </>
     );
}
 
export default Layout;