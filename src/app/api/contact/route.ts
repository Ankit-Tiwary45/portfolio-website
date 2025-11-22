import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_INBOX = process.env.CONTACT_INBOX ?? "shivankit2145@gmail.com";
const CONTACT_SENDER =
  process.env.CONTACT_SENDER ?? "Portfolio <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.parse(payload);

    if (!process.env.RESEND_API_KEY) {
      console.warn("Missing RESEND_API_KEY. Logging payload instead:", parsed);
      return NextResponse.json({ ok: true });
    }

    await resend.emails.send({
      from: CONTACT_SENDER,
      to: CONTACT_INBOX,
      subject: `Portfolio contact from ${parsed.name}`,
      replyTo: parsed.email,
      text: parsed.message,
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${parsed.name}</p>
        <p><strong>Email:</strong> ${parsed.email}</p>
        <p>${parsed.message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Contact form error:", message);
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}

