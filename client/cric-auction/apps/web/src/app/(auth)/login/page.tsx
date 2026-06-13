"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginInput } from "@repo/validation";
// import { login } from "@repo/api-client";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      // await login(data);
      router.push("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          {...form.register("email")}
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          {...form.register("password")}
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-3"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}
