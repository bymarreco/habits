import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import HistoryList from "../_components/HistoryList";
import AddHistoryModal from "../_components/AddHistoryModal";
import { Center } from "@mantine/core";

export const metadata = {
  title: "History",
};

export default async function Page() {
  return (
    <div>
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Explore and manage your History
        </h1>
      </div>
      <div className="m-8">
        <Center>
          <AddHistoryModal spacing="xl" />
        </Center>
      </div>
      <div>
        <Suspense fallback={<Spinner />}>
          <HistoryList />
        </Suspense>
      </div>
    </div>
  );
}
