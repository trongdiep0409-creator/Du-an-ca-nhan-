import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "Titan OS Web V1",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
