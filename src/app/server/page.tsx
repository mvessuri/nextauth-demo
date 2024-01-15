import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function ServerSidePage() {

  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <main className="container mx-auto px-4 py-6 space-y-10">
        <h1 className="text-2xl font-bold text-gray-800">Server Component: Authenticated</h1>
        <section className="rounded-lg shadow-md bg-white p-6" id="client">

          <h2>Session Data:</h2>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </section>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">Server Component: Not Authenticated</h1>
      <section className="rounded-lg shadow-md bg-white p-6" id="client">
        Not signed in
      </section>
    </main>
  )
}
