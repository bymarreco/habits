"use client";

import { useForm } from "@mantine/form";
import {
  postGame,
  postBook,
  postMovie,
  postMusicAlbum,
  postSeries,
} from "../_lib/data-service";
import { Button, Group, TextInput } from "@mantine/core";

function HabitForm({ habitTypeId, onClose }) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      platform: "",
      author: "",
      director: "",
      duration: "",
      artist: "",
      cover: "",
      episodes: "",
    },
  });

  const handleSubmit = async (values) => {
    const payload = { ...values, habitTypeId };
    if (habitTypeId === 1) {
      postGame(payload);
      form.reset();
      onClose();
    } else if (habitTypeId === 2) {
      postBook(payload);
      form.reset();
      onClose();
    } else if (habitTypeId === 3) {
      postMovie(payload);
      form.reset();
      onClose();
    } else if (habitTypeId === 4) {
      postMusicAlbum(payload);
      form.reset();
      onClose();
    } else if (habitTypeId === 5) {
      postSeries(payload);
      form.reset();
      onClose();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Name"
        description="Enter name"
        {...form.getInputProps("name")}
      />
      {habitTypeId === 1 && (
        <TextInput
          label="Platform"
          description="Game platform"
          {...form.getInputProps("platform")}
        />
      )}
      {habitTypeId === 2 && (
        <>
          <TextInput
            label="Author"
            description="Book author"
            {...form.getInputProps("author")}
          />
          <TextInput
            label="Pages"
            description="Book Pages"
            {...form.getInputProps("pages")}
          />
        </>
      )}
      {habitTypeId === 3 || habitTypeId === 4 ? (
        <>
          <TextInput
            label="Director"
            description="Director"
            {...form.getInputProps("director")}
          />
          <TextInput
            label="Duration"
            description="Movie Duration"
            {...form.getInputProps("duration")}
          />
        </>
      ) : null}

      {habitTypeId === 5 && (
        <TextInput
          label="Episodes"
          description="Episodes"
          {...form.getInputProps("episodes")}
        />
      )}
      <TextInput
        label="Cover"
        description="Cover URL"
        {...form.getInputProps("cover")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default HabitForm;
