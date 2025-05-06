import HabitCard from "./HabitCard";

async function HabitList({ fetchHabits, detailsPath }) {
  const habitsResponse = await fetchHabits();
  const habits = habitsResponse?.$values ?? [];

  if (habits.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">No habits found.</div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {habits.map((habit) => (
        <HabitCard
          key={habit.HabitId}
          habit={habit}
          detailsPath={detailsPath}
        />
      ))}
    </div>
  );
}

export default HabitList;
