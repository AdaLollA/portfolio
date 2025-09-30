'use client'

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

const skillGroupColors = [
    "bg-fuchsia-50 dark:bg-fuchsia-50/10",
    "bg-green-50 dark:bg-green-50/10",
    "bg-sky-50 dark:bg-sky-50/10"
]

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section
            ref={ref}
            id="skills"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skillGroup, groupIndex) => (
                        skillGroup.map((skill, skillIndex) => (
                            <motion.li
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={skillIndex}
                                viewport={{
                                    once: true
                                }}
                                className={`${skillGroupColors[groupIndex % 3]} borderBlack rounded-xl px-5 py-3 dark:text-white/70`}
                                key={skillIndex}>
                                {skill}
                            </motion.li>
                        ))
                    ))
                }
            </ul>
        </section>
    )
}
