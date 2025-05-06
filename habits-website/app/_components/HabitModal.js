"use client";

import HabitForm from "../_components/HabitForm";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function HabitModal({ habitTypeId, title }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title={title} centered>
        <HabitForm habitTypeId={habitTypeId} onClose={close} />
      </Modal>
      <Button variant="default" onClick={open}>
        Add new {title}
      </Button>
    </>
  );
}

export default HabitModal;
