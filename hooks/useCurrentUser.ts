"use client";

import { useEffect, useState } from "react";

export interface CurrentUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!response.ok) {
          setLoading(false);
          return;
        }

        const data = await response.json();

        setUser(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return {
    user,
    loading,
  };
}