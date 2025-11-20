"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function submit(e) {
    e.preventDefault();
    alert("Register API will be added!");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-lg shadow w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
          Register
        </button>
      </form>
    </div>
  );
}
