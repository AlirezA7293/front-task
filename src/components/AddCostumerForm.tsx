import { addCostumer } from "../utils/functions";
import FormInput from "./ui/FormInput";

type AddCostumerFormProps = {
  handleModal: (showModal: boolean) => void;
};

const AddCostumerForm = ({ handleModal }: AddCostumerFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addCostumer(formData);
    console.log(formData.get("costumerFirstName"));
    e.currentTarget.reset();
    handleModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 flex flex-col justify-center items-start gap-3 p-10 rounded-md shadow-md"
    >
      <h2 className="w-full text-center font-semibold text-lg mb-8">
        ورود اطلاعات مشتری
      </h2>
      <FormInput
        name="costumerFirstName"
        type="text"
        placeholder="نام مشتری را وارد کنید"
        label="نام"
        required={true}
      />
      <FormInput
        name="costumerLastName"
        type="text"
        placeholder="نام خانوادگی مشتری را وارد کنید"
        label="نام خانوادگی"
        required={true}
      />
      <FormInput
        name="costumerEmail"
        type="email"
        placeholder="ایمیل مشتری را وارد کنید"
        label="ایمیل"
        required={true}
      />
      <FormInput
        name="costumerBANumber"
        type="number"
        placeholder="شماره حساب مشتری را وارد کنید"
        label="شماره حساب"
        required={true}
      />
      <button
        type="submit"
        className="self-center mt-5 text-white font-medium border-2 border-green-500 bg-green-500 px-4 py-1 rounded-md duration-200 hover:text-green-600 hover:bg-white"
      >
        افزودن
      </button>
    </form>
  );
};

export default AddCostumerForm;
