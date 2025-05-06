import { Button } from "@mantine/core";
import Image from "next/image";

export default function HistoryRow({ item, onEdit }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <Image
          src={item.habit.cover}
          alt={item.habit.name}
          height={60}
          width={60}
          quality={100}
        />
      </td>
      <td>{item.habit.name}</td>
      <td>{item.score}</td>
      <td>{item.timeSpent}</td>
      <td>{item.review}</td>
      <td>
        <Button size="xs" fullWidth variant="default" onClick={onEdit}>
          Edit
        </Button>
        <Button size="xs" fullWidth variant="default">
          Remove
        </Button>
      </td>
    </tr>
  );
}
