'use client'

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 text-center -mt-6">Please contact me through this form.</p>

            <form className="mt-10 flex flex-col" action={async (FormData) => {
                await sendEmail(FormData);
            }}>
                <input
                    name="senderEmail"
                    required
                    maxLength={500}
                    type="email"
                    className="h-14 rounded-lg border borderBlack px-4"
                    placeholder="Your email" />
                <textarea
                    name="message"
                    required
                    maxLength={500}
                    className="h-52 my-3 rounded-lg borderBlack px-4 py-4"
                    placeholder="Your message" />
                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer hover:bg-gray-950">
                    Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </form>
        </motion.section>
    )
}
