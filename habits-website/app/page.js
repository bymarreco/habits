import Image from "next/image";
import Link from "next/link";
import bg from "../public/dsdsd.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mantine/core/styles.css";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Habits Carroussel"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to your habits tracker
        </h1>
        <Link
          href="/about"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Track your life
        </Link>
      </div>
    </main>
  );
}
