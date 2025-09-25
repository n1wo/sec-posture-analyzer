"use client";  // Marks this file as a Client Component (needed to use hooks, browser APIs)
import { useState } from "react";  // Pulls in React's state hook for local component state

export default function Home() { // Default export: Next.js will render this at "/" (src/app/page.tsx)
  const [value, setValue] = useState(""); // Text input state (starts empty)
  const [res, setRes] = useState<any>(null); // Response state from the API (any = no TS type checking here

  async function onSubmit(e: React.FormEvent) { // Form submit handler (async because we await fetch)
    e.preventDefault();  // Stop the browser's default form submit (page reload)
    const r = await fetch("http://localhost:8000/api/analyze", {  // Call our FastAPI backend
      method: "POST", // POST request
      headers: { "Content-Type": "application/json" }, // Tell server we're sending JSON
      body: JSON.stringify({ input: value }),  // Send the input value as JSON 
    });
    setRes(await r.json());   // Await the JSON response and set it to state
  }
  return ( 
    <div> 
      <main className="mx-auto max-w-md p-6">  
        <form onSubmit={onSubmit} className="flex gap-2">
          <input
           className="flex-1 rounded border px-3 py-2"
           placeholder="Type something…"
           value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        <button className="rounded bg-black px-4 py-2 text-white">Send</button>
      </form>

      {res && (
        <pre className="mt-4 rounded bg-gray-100 p-3 text-sm">
        {JSON.stringify(res, null, 2)}
        </pre>
      )}
    </main>
    </div>
  );
}
