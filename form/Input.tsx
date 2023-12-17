"use client";

type Props = {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
  optional?: boolean;
  readOnly?: boolean;
  required?: boolean;
};

export default function Input(props: Props) {
  return (
    <div className={props.className}>
      <div className={`flex justify-between`}>
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}{" "}
          {props.required && <span className={`text-red-500`}>*</span>}
        </label>

        <span
          hidden={!props.optional}
          className="text-sm leading-6 text-gray-500"
          id="email-optional"
        >
          Optional
        </span>
      </div>
      <div className="mt-2">
        <input
          type={props.type || "text"}
          name={props.name}
          id={props.name}
          className={`block w-full rounded-md border-0 px-2.5 py-1.5 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:outline-none ${
            !props.error
              ? "ring-gray-300 text-gray-900 focus:ring-indigo-600"
              : "ring-red-500  text-red-900 focus:ring-red-500"
          }
          ${
            props.readOnly
              ? "bg-gray-50 cursor-not-allowed focus:ring-gray-300 text-gray-500"
              : ""
          }`}
          placeholder={props.placeholder}
          aria-describedby={`${props.name}-error`}
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
          readOnly={props.readOnly}
          required={props.required}
        />
      </div>
      <p
        hidden={!props.error}
        className="mt-2 text-sm text-red-500"
        id={`${props.name}-error`}
      >
        {props.error}
      </p>
    </div>
  );
}
