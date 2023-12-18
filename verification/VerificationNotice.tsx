"use client";

import Button from "@components/Button";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function resend(id: string, setLoading: (loading: boolean) => void) {
  setLoading(true);

  const promise = fetch(`/api/user/verification/resend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  toast.promise(promise, {
    loading: "E-Mail wird gesendet...",
    success: "E-Mail wurde gesendet.",
    error: "E-Mail konnte nicht gesendet werden.",
  });

  promise.finally(() => {
    setLoading(false);
  });
}

export default function VerificationNotice() {
  const [caseId, setCaseId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/user/verification")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return;
        }

        setCaseId(data.id);
      });
  });

  if (!caseId) {
    return <></>;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-900">
          Du hast dein Konto noch nicht verifiziert. Bitte überprüfe deine
          E-Mails und klicke auf den Link, den wir dir geschickt haben, um dein
          Konto zu verifizieren. Falls du keine E-Mail erhalten hast, kannst du
          dir eine neue E-Mail zuschicken lassen.
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <Button
            variant={`danger`}
            loading={loading}
            onClick={() => {
              resend(caseId, setLoading);
            }}
          >
            Neue E-Mail senden
          </Button>
        </div>
      </div>
    </div>
  );
}
