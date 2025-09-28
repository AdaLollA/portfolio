'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}>
                        <Image
                            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100'
                            alt="Lorenz Portrait"
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" />
                    </motion.div>
                    <motion.span
                        className="text-4xl absolute bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.7, stiffness: 125, delay: 0.1 }}>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">8 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.1}}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <Link
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
                    href="#contact">
                    Contact me here <BsArrowRight />
                </Link>

                <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
                    Download CV <HiDownload />
                </a>

                <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full">
                    <BsLinkedin />
                </a>

                <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem]">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
