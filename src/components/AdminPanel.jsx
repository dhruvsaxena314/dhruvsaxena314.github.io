import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ADMIN_EMAIL = "dhruvisgood13@gmail.com";
const ADMIN_PASSWORD = "changeme123"; // change before deploy!

export default function AdminPanel() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [form, setForm] = useState({ title: "", desc: "", img: "" });

  const login = e => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) setLogged(true);
    else alert("Invalid credentials");
  };

  const addProject = e => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("projects") || "[]");
    list.unshift({ id: uuidv4(), ...form });
    localStorage.setItem("projects", JSON.stringify(list));
    setForm({ title: "", desc: "", img: "" });
    alert("Project added!");
  };

  if (!logged)
    return (
      <form onSubmit={login} className="card max-w-md">
        <h4 className="text-accent mb-3 text-lg font-semibold">Admin Login</h4>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-3 bg-transparent border border-white/10 rounded px-3 py-2" />
        <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} className="w-full mb-3 bg-transparent border border-white/10 rounded px-3 py-2" />
        <button className="px-4 py-2 bg-white/10 rounded">Login</button>
      </form>
    );

  return (
    <div className="card max-w-md">
      <h4 className="text-accent mb-3 text-lg font-semibold">Add Project</h4>
      <form onSubmit={addProject}>
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full mb-3 bg-transparent border border-white/10 rounded px-3 py-2" required />
        <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} placeholder="Image URL" className="w-full mb-3 bg-transparent border border-white/10 rounded px-3 py-2" />
        <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows="3" placeholder="Description" className="w-full mb-3 bg-transparent border border-white/10 rounded px-3 py-2"></textarea>
        <button className="px-4 py-2 bg-white/10 rounded">Add</button>
      </form>
    </div>
  );
}
