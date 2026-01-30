"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { integralCF } from "@/styles/fonts";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

        {/* Heading */}
        <h1 className={`${integralCF.className} text-2xl text-center`}>
          Welcome to Techligence
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create your account to start shopping
        </p>

        {/* Form */}
        <form
          className="mt-8 space-y-4"
          onSubmit={handleSignup}
          autoComplete="off"
        >
          {/* 🚫 Fake inputs to stop browser autofill */}
          <input type="text" name="fake-username" autoComplete="username" hidden />
          <input type="password" name="fake-password" autoComplete="current-password" hidden />

          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
            required
            className="w-full px-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            name="signup-email"
            required
            className="w-full px-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            name="signup-password"
            required
            className="w-full px-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 rounded-full font-medium hover:opacity-95 transition"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
