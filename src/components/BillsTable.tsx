import type { Bill } from "../App";

type Props = {
  bills: Bill[];
};

function BillsTable(props: Props) {
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BillsTable;
