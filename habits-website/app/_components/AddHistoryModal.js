"use client";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddHistoryFormMantine from "../_components/AddHistoryFormMantine";

function AddHistoryModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <AddHistoryFormMantine />
      </Modal>
      <Button variant="default" onClick={open}>
        Add new Habit
      </Button>
    </>
  );
}

export default AddHistoryModal;
