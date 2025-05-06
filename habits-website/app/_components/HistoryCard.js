import Image from "next/image";
import { Table } from "reactstrap";

function HistoryCard({ history }) {
  const {
    historyId,
    createdAt,
    score,
    review,
    timeSpent,
    habit: { name, cover },
  } = history;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className="w-25">Name</th>
            <th className="w-25">Name</th>
            <th className="w-25">Name</th>
            <th className="w-25">Name</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </div>
  );
}

export default HistoryCard;
