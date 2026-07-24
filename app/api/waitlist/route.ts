import { NextResponse } from "next/server";

import { addToWaitlist, isValidEmail, normalizeEmail } from "@/lib/waitlist";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = (payload as { email?: unknown })?.email;

  if (typeof email !== "string" || !isValidEmail(normalizeEmail(email))) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }

  try {
    const result = await addToWaitlist(email);
    return NextResponse.json({ status: result }, { status: result === "added" ? 201 : 200 });
  } catch (error) {
    console.error("waitlist write failed", error);
    return NextResponse.json({ error: "store_unavailable" }, { status: 503 });
  }
}
