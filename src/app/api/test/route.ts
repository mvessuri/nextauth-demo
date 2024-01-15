import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function GET() {

  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  }

  return Response.json({ message: "Hello from the API" }, { status: 200 })
}
