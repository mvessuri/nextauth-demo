"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function ClientComponent() {

  const { data: session } = useSession()

  if (session) {
    return (
      <section className="rounded-lg shadow-md bg-white p-6" id="client">
        <h2>Session Data:</h2>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
      </section>
    )
  }
  return (
    <section className="rounded-lg shadow-md bg-white p-6" id="client">
      Not signed in <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signIn()}>Sign in</button>
    </section>
  )
}
