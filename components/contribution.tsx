'use client'

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { contributionsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa";

type ProjectProps = typeof contributionsData[number];

export default function Contribution({ title, description, type, url }: ProjectProps) {
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
            className='bg-gray-100 sm:max-w-[20rem] border border-black/5 overflow-hidden relative sm:h-[15rem] hover:bg-gray-200 transition rounded-lg shadow-2xl
            dark:bg-white/10 dark:hover:bg-white/20'>
            <div className='pt-4 pb-4 px-5 flex flex-col h-full items-center justify-between'>
                <h3 className='text-2xl font-semibold text-center'>{title}</h3>
                <p className='mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70 text-center'>{description}</p>
                <a
                    className="mt-2 mb-2 bg-white p-4 flex h-6 text-gray-700 items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
                    href={url} target="_blank">
                    <FaGithub/> GitHub <strong>{type}</strong> contribtution
                </a>
            </div>
        </section>
    </motion.div>
}