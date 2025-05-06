"use client";

import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Modal,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { updateHabit, deleteHabit } from "../_lib/data-service";

function HabitCard({ habit, detailsPath }) {
  const { id, name, cover } = habit.habit;
  const [editOpened, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [deleteOpened, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditSave = async () => {
    await updateHabit(id, { name: editedName });
    closeEdit();
  };

  const handleDelete = async () => {
    await deleteHabit(id);
    closeDelete();
  };

  return (
    <>
      <Card shadow="md" padding="lg" radius="md" withBorder w={300}>
        <Card.Section>
          <Image src={cover} height={200} alt={name} fit="cover" radius="md" />
        </Card.Section>
        <Text fw={700} size="xl" mt="md" mb="xs" align="center">
          {name}
        </Text>
        <Group grow mt="md">
          <Button
            component={Link}
            href={`/${detailsPath}/${id}`}
            variant="light"
            color="blue"
          >
            Details
          </Button>
          <Button variant="light" color="orange" onClick={openEdit}>
            Edit
          </Button>
          <Button variant="light" color="red" onClick={openDelete}>
            Delete
          </Button>
        </Group>
      </Card>

      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Habit"
        centered
      >
        <TextInput
          label="Habit Name"
          value={editedName}
          onChange={(e) => setEditedName(e.currentTarget.value)}
        />
        <Group justify="flex-end" mt="md">
          <Button onClick={handleEditSave}>Save</Button>
        </Group>
      </Modal>

      <Modal
        opened={deleteOpened}
        onClose={closeDelete}
        title="Confirm Deletion"
        centered
      >
        <Text>
          Are you sure you want to delete <b>{name}</b>
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={closeDelete}>
            Cencel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  );
}

export default HabitCard;
