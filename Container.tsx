"use client";

type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      {props.children}
    </div>
  );
}
