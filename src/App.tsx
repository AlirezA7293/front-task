import { useState } from "react";
import AddCostumerModal from "./components/AddCostumerModal";
import CostumerList from "./components/CostumerList";

function App() {
  const [handleModal, setHandleModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col items-end mt-5 mb-10 ml-10 px-10 py-2">
        <button
          type="button"
          className="text-white font-medium border-2 border-green-500 bg-green-500 px-4 py-1 rounded-md duration-200 hover:text-green-600 hover:bg-white hover:shadow-md hover:-translate-y-[1px]"
          onClick={() => setHandleModal(!handleModal)}
        >
          افزودن مشتری جدید
        </button>
        <AddCostumerModal
          handleModal={() => setHandleModal(!handleModal)}
          modalStatus={handleModal}
        />
      </div>
      <CostumerList />
    </>
  );
}

export default App;
