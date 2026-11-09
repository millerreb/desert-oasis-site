import Header from '@/components/Headers/Header'
import React from 'react';
import PageContentChandler from './_components/PageContentChandler';
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/chandler-survey-redirect");

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
