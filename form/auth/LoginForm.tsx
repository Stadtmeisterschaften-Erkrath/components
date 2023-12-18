"use client";

import { useState } from "react";
import Input from "@components/form/Input";
import Button from "@components/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Link from "next/link";

function loginAction(
  event: React.FormEvent<HTMLFormElement>,
  setLoading: (loading: boolean) => void,
  redirect: (path: string) => void,
  email: string,
  password: string,
) {
  event.preventDefault();

  setLoading(true);

  if (password.length < 8) {
    toast.error("Das Passwort muss mindestens 8 Zeichen lang sein.");
    setLoading(false);
    return;
  }

  signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  })
    .then(async (response) => {
      if (response?.error) {
        toast.error("Die Anmeldung ist fehlgeschlagen.");
        setLoading(false);

        return;
      }

      toast.success("Du wurdest erfolgreich angemeldet.");
      redirect("/");
      setLoading(false);
    })
    .catch((error) => {
      toast.error("Die Anmeldung ist fehlgeschlagen: " + error);
      setLoading(false);
    });
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <form
      onSubmit={(e) => loginAction(e, setLoading, router.push, email, password)}
      className="flex flex-col space-y-4 px-4 py-8 sm:px-8 bg-white"
    >
      <Input
        name={`email`}
        type={`email`}
        label={`E-Mail`}
        value={email}
        required
        onChange={setEmail}
      />
      <Input
        name={`password`}
        type={`password`}
        label={`Passwort`}
        value={password}
        required
        onChange={setPassword}
      />
      <Button center type={`submit`} loading={loading}>
        Anmelden
      </Button>

      <p className={`text-sm text-center`}>
        Du hast noch keinen Account?{" "}
        <Link href="/register" className="text-indigo-600 hover:underline">
          Registriere dich jetzt
        </Link>
        .
      </p>
    </form>
  );
}
