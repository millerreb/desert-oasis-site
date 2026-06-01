import Header from '@/components/Headers/Header'
import React from 'react';
import PageContentChandler from './_components/PageContentChandler';

const page = () => {
    return (
        <section>
            <Header
                title="Thank You"
                subtitle="Your feedback is important to us."
            />
            <PageContentChandler />
        </section>
    )
}

export default page;
