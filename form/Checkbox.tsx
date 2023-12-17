"use client";

type Props = {
  name: string;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  className?: string;
  required?: boolean;
  readOnly?: boolean;
  children: React.ReactNode;
};

export default function Checkbox(props: Props) {
  return (
    <div className={props.className}>
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            checked={props.selected}
            id={props.name}
            aria-describedby="comments-description"
            name={props.name}
            disabled={props.readOnly}
            type="checkbox"
            required={props.required}
            onChange={(e) => props.onChange && props.onChange(e.target.checked)}
            className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 ${
              props.readOnly ? "cursor-not-allowed bg-gray-100" : ""
            }`}
          />
        </div>
        <label className="ml-3 text-sm leading-6" htmlFor={props.name}>
          {props.children}
        </label>
      </div>
    </div>
  );
}
