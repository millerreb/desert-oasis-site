import React from 'react';
import Header from '@/components/Headers/Header'
import PageContent from './_components/PageContent';
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/maricopa-survey-redirect");

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
