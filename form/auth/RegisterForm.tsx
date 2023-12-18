"use client";

import { useState } from "react";
import Input from "@components/form/Input";
import Button from "@components/Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import Checkbox from "@components/form/Checkbox";

function registerAction(
  event: React.FormEvent<HTMLFormElement>,
  setLoading: (loading: boolean) => void,
  redirect: (path: string) => void,
  email: string,
  password: string,
  passwordConfirm: string,
) {
  event.preventDefault();

  if (password !== passwordConfirm) {
    toast.error("Die Passwörter stimmen nicht überein.");
    setLoading(false);
    return;
  }

  if (password.length < 8) {
    toast.error("Das Passwort muss mindestens 8 Zeichen lang sein.");
    setLoading(false);
    return;
  }

  if (email.length < 1) {
    toast.error("Bitte gib eine E-Mail Adresse ein.");
    setLoading(false);
    return;
  }

  setLoading(true);

  fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(async (res) => {
      if (res.status !== 200) {
        const { error } = await res.json();
        toast.error(error);
        return;
      }

      setLoading(false);
      redirect("/login");
      toast.success(
        "Ihr Account wurde erfolgreich erstellt! Sie können sich nun anmelden.",
      );
    })
    .catch((error) => {
      toast.error("Ein Fehler ist aufgetreten");
      setLoading(false);
    });
}

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const router = useRouter();

  return (
    <form
      onSubmit={(e) =>
        registerAction(
          e,
          setLoading,
          router.push,
          email,
          password,
          passwordConfirm,
        )
      }
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
      <Input
        name={`password_confirm`}
        type={`password`}
        label={`Passwort Wiederholen`}
        value={passwordConfirm}
        required
        onChange={setPasswordConfirm}
      />
      <Checkbox name={`terms`} required>
        <div className={`text-xs`}>
          Ich habe die{" "}
          <Link href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>{" "}
          und{" "}
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            Datenschutzbestimmungen
          </Link>{" "}
          gelesen und akzeptiere diese.
        </div>
      </Checkbox>
      <Button center type={`submit`} loading={loading}>
        Konto erstellen
      </Button>

      <p className={`text-sm text-center`}>
        Du hast bereits einen Account?{" "}
        <Link href="/login" className="text-indigo-600 hover:underline">
          Melde dich jetzt an
        </Link>
        .
      </p>
    </form>
  );
}
