"use client";

type Props = {
  variant:
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
  children: React.ReactNode;
};

function getClassNames(variant: Props["variant"]) {
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

export default function Badge(props: Props) {
  return (
    <span className={props.className}>
      <span
        className={`${getClassNames(
          props.variant,
        )} text-sm py-1 px-2.5 rounded-full`}
      >
        {props.children}
      </span>
    </span>
  );
}
