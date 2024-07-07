import AddCostumerForm from "./AddCostumerForm";

type AddCostumerModalProps = {
  modalStatus: boolean;
  handleModal: (showModal: boolean) => void;
};

const AddCostumerModal = ({
  modalStatus,
  handleModal,
}: AddCostumerModalProps) => {
  return (
    <section
      className={`${
        modalStatus ? "" : "hidden"
      } z-10 self-center absolute top-0 right-0 w-screen h-screen bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex justify-center items-center`}
    >
      <div className="relative">
        <AddCostumerForm handleModal={() => handleModal(!modalStatus)} />
        <button
          type="button"
          className="absolute group top-3 left-5 text-black bg-transparent duration-200 hover:shadow hover:bg-red-300 hover:text-gray-900 rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          onClick={() => handleModal(!modalStatus)}
        >
          <svg
            className="w-3 h-3 duration-200 group-hover:scale-110"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AddCostumerModal;
