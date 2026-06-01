import React from 'react';
import Header from '@/components/Headers/Header'
import PageContent from './_components/PageContent';

const page = () => {
    return (
        <section>
            <Header
                title="Thank You"
                subtitle="Your feedback is important to us."
            />
            <PageContent />
        </section>
    )
}

export default page
