'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { accoladesData, contributionsData } from '@/lib/data'
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                {
                    contributionsData.map((contribution, index) => (
                        <React.Fragment key={index}>
                            <Contribution {...contribution} />
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='flex w-full justify-around mt-28'>
                {
                    accoladesData.map((accoladeGroup, i) => (
                        <div key={i}>
                            <h3 className='text-2xl mb-3'>{accoladeGroup.title}</h3>
                            <div>
                                {
                                    accoladeGroup.accolades.map((accolade, j) => (
                                        <div key={j}>
                                            <p className='inline opacity-60'>{accolade.prefix} - </p>
                                            <a href={accolade.url} target='_blank' className='font-bold hover:text-blue-400'>{accolade.title}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}