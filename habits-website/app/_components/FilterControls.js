import { Box, Checkbox, Group, Select } from "@mantine/core";

const HABIT_TYPES = [
  { label: "Games", value: "1" },
  { label: "Books", value: "2" },
  { label: "Movies", value: "3" },
  { label: "Series", value: "4" },
  { label: "Music Albums", value: "5" },
];

const sortOptions = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "score-asc", label: "Score (Low to High)" },
  { value: "score-desc", label: "Score (High to Low)" },
  { value: "time-asc", label: "Time Spent (Low to High)" },
  { value: "time-desc", label: "Time Spent (High to Low)" },
];

export default function FilterControls({
  sortBy,
  onSortChange,
  selectedTypes,
  onTypeChange,
}) {
  return (
    <Group align="flex-start" mb="md" justify="space-between">
      <Box w={250}>
        <Select
          label="Sort by"
          value={sortBy}
          onChange={onSortChange}
          data={sortOptions}
        />
      </Box>

      <Checkbox.Group
        label="Filter by Habit Type"
        value={selectedTypes}
        onChange={onTypeChange}
      >
        <Group mt="xs">
          {HABIT_TYPES.map((type) => (
            <Checkbox key={type.value} value={type.value} label={type.label} />
          ))}
        </Group>
      </Checkbox.Group>
    </Group>
  );
}
