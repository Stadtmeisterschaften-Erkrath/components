"use client";

import { useEffect, useState } from "react";
import Skeleton from "@components/Skeleton";
import LoginButton from "@components/navigation/user/LoginButton";
import UserDropdown from "@components/navigation/user/UserDropdown";
import UserMobileDropdown from "@components/navigation/user/UserMobileDropdown";

export default function LoginOrDropdown() {
  const [email, setEmail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user")
      .then(async (res) => res.json())
      .then((data) => {
        if (data.error) {
          setLoading(false);
          return;
        }

        setEmail(data.token.email);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Skeleton width={100} height={30} />;
  }

  if (!email) {
    return <LoginButton />;
  }

  return (
    <div>
      <div className={`lg:hidden flex`}>
        <UserMobileDropdown />
      </div>
      <div className={`hidden lg:flex`}>
        <UserDropdown email={email} />
      </div>
    </div>
  );
}
