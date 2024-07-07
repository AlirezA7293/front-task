import CostumerItem from "./CostumerItem";

const CostumerList = () => {
  const costumersNumber = localStorage.length;
  const costumers = [];
  for (let i = 1; i <= costumersNumber; i++) {
    const costumer = localStorage.getItem(i.toString());
    if (costumer) {
      costumers.push(JSON.parse(costumer));
    }
  }
  return (
    <div className="flex flex-col justify-start items-center gap-8 pl-16">
      {costumers.length === 0 ? (
        <h2 className="text-lg font-medium">هیچ مشتریی وجود ندارد</h2>
      ) : (
        <h2 className="text-lg font-medium">لیست مشتریان</h2>        
      )}
      {costumers.length > 0 && (
        <ul className="w-full flex flex-col justify-start items-center gap-2 px-14">
          {costumers.map((costumer) => (
            <CostumerItem key={costumer.id} costumer={costumer} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CostumerList