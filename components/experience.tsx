'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { theme } = useTheme();
    const { ref } = useSectionInView("Experience", 0.2);
    return (
        <section
            ref={ref}
            id='experience'
            className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement contentStyle={{
                                background: theme === 'light' ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                                contentArrowStyle={{
                                    borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.3)"
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: theme === 'light' ? "white" : "grey",
                                    fontSize: "1.5rem"
                                }}>
                                <h3 className='semi-bold capitalize'>{item.title}</h3>
                                <p className='font-light !mt-0 text-gray-700 dark:text-white/70'>{item.location}</p>
                                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/70'>{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section >
    )
}
