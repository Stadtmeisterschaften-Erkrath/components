"use client";

type Props = {
  size?: "small" | "normal" | "large";
  variant?:
    | "primary"
    | "primary-subtle"
    | "secondary"
    | "secondary-subtle"
    | "success"
    | "success-subtle"
    | "danger"
    | "danger-subtle"
    | "warning"
    | "warning-subtle";
  className?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  width?: "full" | "auto";
  onClick?: () => void;
  children: React.ReactNode;
  center?: boolean;
};

function getButtonSizeClassName(size: Props["size"]) {
  switch (size) {
    case "small":
      return "text-xs px-3 py-1";
    case "normal":
      return "text-sm px-4 py-2";
    case "large":
      return "text-base px-6 py-3";
  }
}

function getButtonVariantClassName(variant: Props["variant"]) {
  switch (variant) {
    case "primary":
      return "bg-indigo-600 text-white";
    case "primary-subtle":
      return "bg-blue-100 text-indigo-600";
    case "secondary":
      return "bg-gray-600 text-white";
    case "secondary-subtle":
      return "bg-gray-100 text-gray-800";
    case "success":
      return "bg-green-500 text-white";
    case "success-subtle":
      return "bg-green-100 text-green-800";
    case "danger":
      return "bg-red-500 text-white";
    case "danger-subtle":
      return "bg-red-100 text-red-800";
    case "warning":
      return "bg-yellow-500 text-white";
    case "warning-subtle":
      return "bg-yellow-100 text-yellow-800";
  }
}

export default function Button(props: Props) {
  const size = props.size ?? "normal";
  const variant = props.variant ?? "primary";
  const type = props.type ?? "button";
  const width = props.width ?? "auto";

  return (
    <button
      type={type}
      onClick={props.onClick}
      className={`${getButtonSizeClassName(size)} ${getButtonVariantClassName(
        variant,
      )} relative w-${width} font-semibold ${
        props.loading
          ? "text-transparent justify-center cursor-not-allowed"
          : "hover:bg-opacity-80"
      } rounded-lg inline-flex ${props.className}
      
      ${props.center ? "justify-center" : ""}`}
    >
      {props.loading && (
        <svg
          className="animate-spin absolute h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      <span className={props.loading ? "opacity-0" : ""}>{props.children}</span>
    </button>
  );
}
