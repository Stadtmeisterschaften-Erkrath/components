"use client";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

function getLogoUrl(): string {
  return "https://raw.githubusercontent.com/Stadtmeisterschaften-Erkrath/content/main/logo.png";
}

export default function Wordmark(props: Props) {
  return (
    <div className={props.className}>
      <img
        src={getLogoUrl()}
        height={props.height}
        width={props.width}
        alt={"Stadtmeisterschaften Erkrath"}
      />
    </div>
  );
}
