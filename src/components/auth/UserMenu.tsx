"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email ?? null);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!userEmail) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">{userEmail}</span>

      <button
        onClick={handleLogout}
        className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200"
      >
        Logout
      </button>
    </div>
  );
}
