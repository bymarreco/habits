import Image from "next/image";
import Image1 from "@/public/about-1.png";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-24 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Habits
        </h1>

        <div className="space-y-8">
          <p>
            Welcome to HabitTracker, your ultimate companion for building
            meaningful habits while enjoying your favorite forms of
            entertainment. Our platform is designed to help you track, organize,
            and reflect on your experiences with games, books, movies, series,
            and music albums.
          </p>
          <p>
            We believe that every moment spent engaging with stories, sounds,
            and adventures is valuable. HabitTracker empowers you to keep a
            detailed record of your media consumption, discover new favorites,
            and celebrate your progress.
          </p>
          <p>
            Whether you're a passionate gamer, an avid reader, a movie
            enthusiast, or a music lover, HabitTracker is here to enhance your
            journey. Join us in making entertainment tracking fun, insightful,
            and rewarding!
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={Image1}
          alt="Woman running with some habits draw around her and above her written: Habits & Life"
          placeholder="blur"
          quality={100}
        />
      </div>

      <div className="space-y-8 flex justify-center col-span-4">
        <div>
          <a
            href="/cabins"
            className="inline-block mt-4 bg-accent-500 px- py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Track your Habits
          </a>
        </div>
      </div>
    </div>
  );
}
