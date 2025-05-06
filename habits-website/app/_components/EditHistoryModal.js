import { Button, Group, Modal, NumberInput, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";

export default function EditHistoryModal({ item, onClose, onSave }) {
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    if (item) {
      setScore(item.score);
      setTimeSpent(item.timeSpent);
      setReview(item.review);
    }
  }, [item]);

  const handleSubmit = () => {
    onSave({ score, timeSpent, review });
  };

  return (
    <Modal
      opened={!!item}
      onClose={onClose}
      title={`Edit ${item?.habit.name}`}
      centered
    >
      <NumberInput
        label="Score"
        value={score}
        onChange={setScore}
        min={0}
        max={10}
        mb="sm"
      />
      <NumberInput
        label="Time Spent"
        value={timeSpent}
        onChange={setTimeSpent}
        min={0}
        mb="sm"
      />
      <TextInput
        label="Review"
        value={review}
        onChange={(e) => setReview(e.currentTarget.value)}
      />
      <Group mt="md" justify="flex-end">
        <Button onClick={handleSubmit}>Save</Button>
      </Group>
    </Modal>
  );
}
