import { Center } from "@mantine/core";
import HabitModal from "../_components/HabitModal";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import HabitList from "../_components/HabitList";
import { getBooks } from "../_lib/data-service";

export const metadata = {
  title: "Books",
};

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Explore and Manage Your Favorite Books
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        DWhether you're a lover of fiction, nonfiction, or poetry, this is the
        perfect space to track your literary journey. Log the books you've read,
        the number of pages, and your favorite authors. Reflect on each story
        and discover new reads to add to your collection.
      </p>

      <div className="m-8">
        <Center>
          <HabitModal habitTypeId={2} title="Book" spacing="xl" />
        </Center>
      </div>
      <Suspense fallback={<Spinner />}>
        <HabitList fetchHabits={getBooks} detailsPath="books" />
      </Suspense>
    </div>
  );
}
