import Header from "@/components/header";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="h-[5000] pt-28 sm:pt-36 flex flex-col items-center px-4">
      <Header />
      <Intro />
    </main>
  );
}
