import type { Bill } from "../App";

type Props = {
  bills: Bill[];
  showAddBill: () => void;
  removeBill: (index: number) => void;
};

function BillsTable(props: Props) {
  const removeBill = (index: number) => {
    props.removeBill(index);
  };
  return (
    <table className="table w-full">
      <thead className="text-left">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {props.bills?.map((value, index) => {
          return (
            <tr className="p4" key={index}>
              <td>{value.date.toString()}</td>
              <td>${value.amount}</td>
              <td>{value.category}</td>
              <td>
                <button onClick={() => removeBill(index)}>𝗫</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BillsTable;
