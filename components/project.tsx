'use client'

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return <motion.div
        className="group mb-7 last:mb-0 "
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
        <section
            ref={ref}
            className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg shadow-2xl'>
            <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li
                            key={index}
                            className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="max-h-[230px] sm:max-h-[initial] overflow-hidden top-8 -right-40 sm:w-[28.25rem] sm:absolute object-cover sm:object-[initial] rounded-t-lg shadow-2xl sm:group-even:-right-[initial] sm:group-even:-left-40 sm:block

                            group-hover:-translate-x-3 
                            group-hover:translate-y-3 
                            group-hover:-rotate-2  

                            group-hover:scale-[1.04] transition 

                            group-even:group-hover:translate-x-3 
                            group-even:group-hover:rotate-2">
                <Image
                    className=''
                    src={imageUrl}
                    alt={title}
                    quality={95} />
            </div>
        </section>
    </motion.div>
}