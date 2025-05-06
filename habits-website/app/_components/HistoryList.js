import { getHistory } from "../../app/_lib/data-service";
import HistoricTable from "../_components/HistoricTable";

async function HistoryList() {
  const historic = await getHistory(1);

  if (historic.length === 0) return null;

  const history = historic?.$values ?? [];

  return (
    <div>
      <HistoricTable history={history} />
    </div>
  );
}

export default HistoryList;
