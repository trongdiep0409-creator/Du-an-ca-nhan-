/// Health-check endpoint.
///
/// Tests real server-side DB connectivity with a harmless `SELECT 1`
/// query.  Never exposes credentials.
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db/prisma";

export async function GET() {
  const result: {
    app: string;
    database: string;
  } = {
    app: "ok",
    database: "not_configured",
  };

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(result, { status: 200 });
  }

  try {
    const prisma = getPrisma();
    // Harmless connectivity probe — SELECT 1 requires no schema.
    await prisma.$queryRaw`SELECT 1`;
    result.database = "ok";
    return NextResponse.json(result, { status: 200 });
  } catch {
    result.database = "error";
    return NextResponse.json(result, { status: 503 });
  }
}
