import React from 'react';
import Contact from '../components/contact';
import Image from '../components/image';
import Layout from '../components/layout';
import Presentation from '../components/presentation';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Image />
        <Presentation name="presentation" />
        <Contact name="contact" />
    </Layout>
);

export default IndexPage;
