"use client";

import { Table } from "reactstrap";
import { useMemo, useState } from "react";
import { updateHistory } from "../_lib/data-service";
import FilterControls from "./FilterControls";
import HistoryRow from "./HistoryRow";
import EditHistoryModal from "./EditHistoryModal";

function HistoricTable({ history }) {
  const [sortBy, setSortBy] = useState("name-asc");
  const [selectedTypes, setSelectedTypes] = useState(["1", "2", "3", "4", "5"]);
  const [editItem, setEditItem] = useState(null);

  const handleSave = async () => {
    const payload = {
      score,
      timeSpent,
      review,
    };
    try {
      await updateHistory(editItem.id, payload);
      closeModal();
    } catch (error) {
      console.error("Failed to update history: ", error);
    }
  };

  const filteredAndSortedHistory = useMemo(() => {
    let filtered = history.filter((item) =>
      selectedTypes.includes(String(item.habit.habitTypeId))
    );

    const sortFunctions = {
      "name-asc": (a, b) => a.habit.name.localeCompare(b.habit.name),
      "score-asc": (a, b) => a.score - b.score,
      "score-desc": (a, b) => b.score - a.score,
      "time-asc": (a, b) => a.timeSpent - b.timeSpent,
      "time-desc": (a, b) => b.timeSpent - a.timeSpent,
    };

    filtered.sort(sortFunctions[sortBy]);

    return filtered;
  }, [history, selectedTypes, sortBy]);

  return (
    <>
      <FilterControls
        sortBy={sortBy}
        onSortChange={setSortBy}
        selectedTypes={selectedTypes}
        onTypeChange={setSelectedTypes}
      />

      <Table responsive hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Cover</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time Spent</th>
            <th>Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedHistory.map((item) => (
            <HistoryRow
              key={item.id}
              item={item}
              onEdit={() => setEditItem(item)}
            />
          ))}
        </tbody>
      </Table>

      <EditHistoryModal
        item={editItem}
        onClose={() => setEditItem(null)}
        onSave={handleSave}
      />
    </>
  );
}

export default HistoricTable;
