"use client";
import { useEffect, useState } from "react";
import {
  TextInput,
  NativeSelect,
  NumberInput,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { getHabits } from "../_lib/data-service";
import { postHabit } from "../_lib/data-service";

function AddHistoryFormMantine() {
  const [habitType, setHabitType] = useState(1);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function loadHabits() {
      const data = await getHabits(habitType);
      const habits = data?.$values ?? [];
      setHabits(
        habits.map((habit) => ({ label: habit.name, value: habit.id }))
      );
    }
    loadHabits();
  }, [habitType]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      habitType: "1",
      habits: "1",
      score: 0,
      timeSpent: 0,
      review: "",
    },
  });

  const handleSubmit = async (values) => {
    const payload = {
      createdAt: new Date().toISOString(),
      habitId: parseInt(values.habits),
      userId: 1,
      review: values.review,
      timeSpent: values.timeSpent,
      score: values.score,
    };
    postHabit(payload);
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <NativeSelect
        label="Habit Type"
        description="Select a Habit Type"
        data={[
          { label: "Games", value: 1 },
          { label: "Books", value: 2 },
          { label: "Movies", value: 3 },
          { label: "Series", value: 4 },
          { label: "Music Albums", value: 5 },
        ]}
        value={habitType}
        key={form.key.habitType}
        onChange={(event) => setHabitType(event.target.value)}
      />
      <NativeSelect
        label="habits list"
        description="Select a Habit"
        data={habits}
        key={form.key(habits)}
        {...form.getInputProps("habits")}
      />
      <NumberInput
        label="Enter the score between 0-10"
        placeholder="Don't enter more than 10 and less than 0"
        min={0}
        max={10}
        key={form.key("score")}
        {...form.getInputProps("score")}
      />
      <NumberInput
        label="Enter the time spent"
        placeholder="Don't enter less than 0"
        min={0}
        key={form.key("timeSpent")}
        {...form.getInputProps("timeSpent")}
      />
      <TextInput
        label="Review input"
        description="Review description"
        key={form.key("review")}
        {...form.getInputProps("review")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default AddHistoryFormMantine;
