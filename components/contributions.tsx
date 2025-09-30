'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { contributionsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import Contribution from './contribution';

export default function Contributions() {
    const { ref } = useSectionInView('Contributions', 0.1);

    return (
        <section
            ref={ref}
            id='contributions'
            className='scroll-mt-28 mb-28'>
            <SectionHeading>Contributions</SectionHeading>
            <div>
                {
                    contributionsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Contribution {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}