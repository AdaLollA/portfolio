'use client'

import { useActiveSection } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import faceImg from "@/public/face.png";

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}>
                        <Image
                            src={faceImg}
                            alt="Lorenz' Face"
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white/60 object-cover shadow-xl" />
                    </motion.div>
                    <motion.span
                        className="text-4xl absolute bottom-0 -left-5"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.7, stiffness: 125, delay: 0.1 }}>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I'm Lorenz.</span> I'm a{" "}
                <span className="italic">full-stack developer</span> with{" "}
                <span className="font-bold">{new Date().getFullYear() - 2014} years</span> of experience. My current focus is{" "}
                <span className="underline">data science & seo</span>.
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <Link
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/cv.pdf"
                    download>
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
                    href="https://github.com/AdaLollA" target="_blank">
                    <FaGithubSquare />
                </a>

                <a
                    className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-200"
                    href="https://www.linkedin.com/in/lorenz-graf-65201a138/" target="_blank">
                    <BsLinkedin />
                </a>
            </motion.div>
        </section>
    )
}
