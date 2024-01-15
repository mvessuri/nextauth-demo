import Link from "next/link"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-10">
      <section className="rounded-lg shadow-md bg-white p-6" id="server">
        <h2 className="text-2xl font-bold text-gray-800"><Link href="/server">Server Side</Link></h2>
        <p className="mt-2 text-gray-600">
          This showcases how to handle authentication on a server component.
        </p>
      </section>
      <section className="rounded-lg shadow-md bg-white p-6" id="client">
        <h2 className="text-2xl font-bold text-gray-800"><Link href="/client">Client Side</Link></h2>
        <p className="mt-2 text-gray-600">
          This showcases how to habdle authentication on a client component.
        </p>
      </section>
      <section className="rounded-lg shadow-md bg-white p-6" id="admin">
        <h2 className="text-2xl font-bold text-gray-800"><Link href="/admin">Admin Section</Link></h2>
        <p className="mt-2 text-gray-600">
          This is a demo on how to restrict a whole section of an application using Role-based accss control.
        </p>
      </section>
    </main>
  )
}
