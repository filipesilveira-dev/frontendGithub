import ComplaintItem from "./ComplaintItem";
import type { Complaint } from "../types/Complaint";

type Props = {
  complaints: Complaint[];
};

const ComplaintsList = ({ complaints }: Props) => {
  if (complaints.length === 0) {
    return <p>Nenhuma reclamação foi registrada.</p>;
  }
  return (
    <div>
      {complaints.map((item) => (
        // "key" garante o controle do React
        <ComplaintItem key={item._id} complaint={item} />
      ))}
    </div>
  );
};

export default ComplaintsList;
