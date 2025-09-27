import Image from "next/image";

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <Image
                        src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100'
                        alt="Lorenz Portrait"
                        width='192'
                        height='192'
                        quality='95'
                        priority={true}
                        className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" />
                        <span className="text-4xl absolute bottom-0 right-0">👋</span>
                </div>
            </div>
        </section>
    )
}
