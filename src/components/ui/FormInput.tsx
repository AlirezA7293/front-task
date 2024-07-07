type FormInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

const FormInput = ({ name, type, placeholder, label, required }: FormInputProps) => {

  return (
    <div className="flex justify-start items-center gap-4">
      {label ? (
        <label className="font-medium w-32" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        className="w-64 border px-2 py-1 rounded-md focus:font-medium focus:outline-none focus:border-black placeholder:font-normal placeholder:text-sm"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;
