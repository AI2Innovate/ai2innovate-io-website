import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactPayload {
  name: string
  email: string
  company?: string
  requirement: string
}

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const name = body.name?.trim()
    const email = body.email?.trim()
    const company = body.company?.trim() || "Not provided"
    const requirement = body.requirement?.trim()

    if (!name || !email || !requirement) {
      return NextResponse.json({ message: "Please fill all required fields." }, { status: 400 })
    }

    const smtpHost = getRequiredEnv("SMTP_HOST")
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"))
    const smtpUser = getRequiredEnv("SMTP_USER")
    const smtpPass = getRequiredEnv("SMTP_PASS")
    const mailTo = getRequiredEnv("MAIL_TO")
    const mailFrom = getRequiredEnv("MAIL_FROM")

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: [
        "A new contact form message was submitted:",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        "",
        "Requirement:",
        requirement,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Requirement:</strong></p>
        <p>${requirement.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Contact form send failed:", error)
    return NextResponse.json({ message: "Server could not send the message." }, { status: 500 })
  }
}
