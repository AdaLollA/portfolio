'use client'

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Science</span>, I further persued my
                passion for programming. I soon stared internships and learned{" "}
                <span className="font-bold">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem.
            </p>

            <p className="mb-3">
                My core stacks are {" "}
                <span className="font-bold">
                    React / Next.js / Node.js / Vercel
                </span> or {" "}
                <span className="font-bold">
                    Angular / Ionic / Node.js / Firebase
                </span>
                . I am also familiar with native development. I am always looking to
                learn new technologies. Currently I am not looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, biking, and playing with my cat. I also enjoy{" "}
                <span className="underline">learning new things</span>. I am currently
                learning about{" "}
                <span className="italic">history and geopolitics</span>. I also
                play the guitar, ukulele and a bit of piano.
            </p>
        </motion.section>
    )
}
