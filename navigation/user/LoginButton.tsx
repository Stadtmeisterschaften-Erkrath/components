import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Log in <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
