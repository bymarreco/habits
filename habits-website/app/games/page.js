import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import { Center } from "@mantine/core";
import HabitModal from "../_components/HabitModal";
import { getGames } from "../_lib/data-service";
import HabitList from "../_components/HabitList";

export const metadata = {
  title: "Games",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Explore and Manage Your Favorite Games
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Dive into the world of gaming and keep track of every adventure. From
        epic RPGs to competitive shooters, record your progress, platform
        preferences, and time spent. Rate your favorite titles and create a
        personalized game library to showcase your gaming journey.
      </p>

      <div className="m-8">
        <Center>
          <HabitModal habitTypeId={1} title="Game" spacing="xl" />
        </Center>
      </div>

      <Suspense fallback={<Spinner />}>
        <HabitList fetchHabits={getGames} detailsPath="games" />
      </Suspense>
    </div>
  );
}
