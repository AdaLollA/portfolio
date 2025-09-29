'use client'

import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

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
                    maxLength={5000}
                    className="h-52 my-3 rounded-lg borderBlack px-4 py-4"
                    placeholder="Your message" />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
