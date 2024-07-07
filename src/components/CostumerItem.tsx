import { useState } from "react";
import penIcon from "../assets/icons/pen.svg";
import trashIcon from "../assets/icons/trash.svg";
import checkmark from "../assets/icons/checkmark.svg";
import { deleteCostumer, updateCostumer } from "../utils/functions";
import UpdateFormInput from "./ui/UpdateFormInput";

type CostumerItemProps = {
  costumer: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bankAccount: number;
  };
};

const CostumerItem = ({ costumer }: CostumerItemProps) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [itemToUpdate, setItemToUpdate] = useState<number>(0);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    deleteCostumer(id);
    window.location.reload();
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setItemToUpdate(Number(id));
    setIsUpdating(true);
  };

  const cancelUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUpdating(false);
  };

  const doUpadate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateCostumer(formData);
    setIsUpdating(false);
    window.location.reload();
  };

  return (
    <li className="w-full mx-auto">
      {isUpdating && itemToUpdate == costumer.id ? (
        <form
          onSubmit={doUpadate}
          className="w-full flex justify-start items-center mx-10 px-10 py-2 gap-3 border border-gray-300 rounded-md"
        >
          <input readOnly name="costumerId" value={costumer.id} />
          <UpdateFormInput
            name="costumerFirstName"
            type="text"
            defaultValue={costumer.firstName}
            label="نام"
            required={true}
          />
          <UpdateFormInput
            name="costumerLastName"
            type="text"
            defaultValue={costumer.lastName}
            label="نام خانوادگی"
            required={true}
          />
          <UpdateFormInput
            name="costumerEmail"
            type="email"
            defaultValue={costumer.email}
            label="ایمیل"
            required={true}
          />
          <UpdateFormInput
            name="costumerBANumber"
            type="number"
            defaultValue={costumer.bankAccount.toString()}
            label="شماره حساب"
            required={true}
          />
          <div className="flex items-center self-end">
            <button
              type="submit"
              title="ویرایش"
              className="w-8 p-1 rounded-md duration-200 group hover:bg-green-200 hover:shadow"
            >
             <img
                src={checkmark}
                alt="ویرایش"
                className="w-7 duration-200 group-hover:scale-110"
              />
            </button>
            <button
              type="button"
              title="انصراف"
              className="w-10 px-1 py-2 rounded-md duration-200 group hover:bg-red-200 hover:shadow"
              onClick={cancelUpdate}
            >
              <svg
            className="w-4 h-4 mx-auto duration-200 group-hover:scale-110"
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
        </form>
      ) : (
        <div className="w-full flex justify-between items-center mx-10 px-10 py-2 border border-gray-300 rounded-md">
          <div className="flex justify-start items-center gap-6">
            <h3 className="text-lg font-medium">
              {costumer.firstName} {costumer.lastName}
            </h3>
            <p>{costumer.email}</p>
            <p>{costumer.bankAccount}</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              type="button"
              id={costumer.id?.toString()}
              title="ویرایش"
              className="w-10 rotate-90 p-2 rounded-md duration-200 group hover:bg-green-200 hover:shadow"
              onClick={handleUpdate}
            >
              <img
                src={penIcon}
                alt="ویرایش"
                className="w-7 duration-200 group-hover:scale-110"
              />
            </button>
            <button
              type="button"
              id={costumer.id?.toString()}
              title="حذف"
              className="w-10 p-2 rounded-md duration-200 group hover:bg-red-200 hover:shadow"
              onClick={handleDelete}
            >
              <img
                src={trashIcon}
                alt="حذف"
                className="w-7 duration-200 group-hover:scale-110"
              />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default CostumerItem;
