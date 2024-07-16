import formatNumbers from "./FUNC_numberformater";

const TableComponent = ({ userChoices }) => {
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="font-raleway px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider rounded-xl">Название</th>
            <th className="font-raleway px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider rounded-xl">Цена</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 rounded-xl">
          {userChoices.map(choice => (
            <tr key={choice.title}>
              <td className="font-medium xs:text-sm sm:text-base font-raleway px-6 py-4 whitespace-nowrap ">{choice.title}</td>
              <td className="font-medium xs:text-sm sm:text-base font-raleway px-6 py-4 whitespace-nowrap lining-nums">{formatNumbers(choice.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TableComponent;