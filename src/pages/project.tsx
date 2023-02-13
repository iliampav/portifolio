import Head from 'next/head'

import { ProjectBanner } from '../components/projects/banner'

export const Project = () => {
    return (
        <>
            <Head>
            <meta charSet="UTF-8" />
            <meta name="author" content="Iliam Ferreira Pavkovic"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Front-end Projects - Title</title>
            <meta name="keywords" content="Html, css, javascript, react, nodejs, developer, front-end, web, design, pixel, perfect, freelancer"></meta>
            <meta name="description" content="Pavko's portifolio of web deveplopment, focused on responsive design, using the best UI and UX prectices"></meta>
            </Head>
            <ProjectBanner />
        </>
    )
}