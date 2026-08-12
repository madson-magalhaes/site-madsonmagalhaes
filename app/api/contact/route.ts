import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

// Rate limiting: simple in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }); // 1 hour
    return true;
  }

  if (record.count >= 5) {
    return false; // Max 5 requests per hour
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .slice(0, 500) // Max length
    .trim()
    .replace(/[<>]/g, ""); // Remove potential HTML
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (!getRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validation
    const { name, email, company, industry, message } = body;

    if (!name || !email || !company || !industry || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: sanitizeInput(company),
      industry: sanitizeInput(industry),
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
      ip: ip === "unknown" ? "hidden" : ip.slice(0, 10), // Store only partial IP
    };

    // Send email notification
    try {
      await sendContactEmail({
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company,
        industry: sanitizedData.industry,
        message: sanitizedData.message,
        timestamp: sanitizedData.timestamp,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request if email fails - log it and continue
      // In production, you'd want to save to database as fallback
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We'll contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Don't expose internal errors to client
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// Prevent other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
