import { Center } from "@mantine/core";
import HabitModal from "../_components/HabitModal";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import { getSeries } from "../_lib/data-service";
import HabitList from "../_components/HabitList";

export const metadata = {
  title: "Series",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Explore and Manage Your Favorite Series
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Dive into the world of gaming and keep track of every adventure. From
        epic RPGs to competitive shooters, record your progress, platform
        preferences, and time spent. Rate your favorite titles and create a
        personalized serie library to showcase your gaming journey.
      </p>
      <div className="m-8">
        <Center>
          <HabitModal habitTypeId={5} title="Series" spacing="xl" />
        </Center>
      </div>
      <Suspense fallback={<Spinner />}>
        <HabitList fetchHabits={getSeries} detailsPath="series" />
      </Suspense>
    </div>
  );
}
