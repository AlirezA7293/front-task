type FormInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
};

const UpdateFormInput = ({ name, type, placeholder, label, required, defaultValue }: FormInputProps) => {

  return (
    <div className="flex justify-start items-center gap-4">
      {label ? (
        <label className="text-sm" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        className="border px-2 py-1 rounded-md focus:font-medium focus:text-sm focus:outline-none focus:border-black placeholder:font-normal placeholder:text-sm"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default UpdateFormInput;
