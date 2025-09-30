'use client'

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { contributionsData } from "@/lib/data";

type ProjectProps = typeof contributionsData[number];

export default function Contribution({ title, description, tags, imageUrl }: ProjectProps) {
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
            className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition rounded-lg shadow-2xl
            dark:bg-white/10 dark:hover:bg-white/20'>
            <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li
                            key={index}
                            className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'>{tag}</li>
                    ))}
                </ul>
            </div>
        </section>
    </motion.div>
}