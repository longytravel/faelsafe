"use client";

import { useState } from "react";
import { EMAIL } from "./ui";

/**
 * Working quote form for the redesign demo.
 *
 * There is no backend on this demo, so rather than a dead button this composes a
 * properly formatted enquiry and opens it in the user's mail client addressed to
 * Faelsafe. It genuinely works — press it and an email appears, ready to send.
 * On the real site the same form would post to an inbox and log the enquiry.
 */

const services = [
  "Fire alarm — service or repair",
  "Fire alarm — new installation",
  "Sprinkler maintenance",
  "Emergency lighting",
  "Fixed wire testing / EICR",
  "CCTV or intruder alarm",
  "Emergency callout",
  "Something else",
];

const fields = [
  { id: "name", label: "Your name", type: "text", required: true },
  { id: "company", label: "Company", type: "text", required: false },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "email", label: "Email", type: "email", required: false },
] as const;

type FieldId = (typeof fields)[number]["id"];

export default function QuoteForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (id: string, v: string) => {
    setValues((prev) => ({ ...prev, [id]: v }));
    if (error) setError(null);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = (values.name ?? "").trim();
    const phone = (values.phone ?? "").trim();
    const service = (values.service ?? "").trim();

    if (!name || !phone) {
      setError("We need a name and a phone number so we can get back to you.");
      return;
    }

    const subject = service
      ? `Enquiry: ${service}`
      : "Website enquiry";

    const body = [
      `Name: ${name}`,
      `Company: ${(values.company ?? "").trim() || "—"}`,
      `Phone: ${phone}`,
      `Email: ${(values.email ?? "").trim() || "—"}`,
      `Needs: ${service || "—"}`,
      "",
      (values.detail ?? "").trim(),
      "",
      "— Sent from the faelsafe.co.uk enquiry form",
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-card text-ink rounded-[2px] p-7">
        <div className="border-l-2 border-success pl-4 mb-6">
          <p className="eyebrow text-success mb-2">Enquiry ready</p>
          <h2 className="font-display text-[22px] text-ink leading-tight">
            Your email should have opened
          </h2>
        </div>
        <p className="text-sm text-ink-secondary leading-relaxed mb-4">
          Check your mail app — an email to{" "}
          <a href={`mailto:${EMAIL}`} className="fs-link font-semibold">
            {EMAIL}
          </a>{" "}
          is waiting with your details in it. Press send and we&apos;ll come back to
          you the same working day.
        </p>
        <p className="text-xs text-ink-muted leading-relaxed mb-6">
          On the live site this would post straight to the inbox and log the enquiry
          automatically — no mail app involved. It works this way here because the
          demonstration has no server behind it.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setValues({});
          }}
          className="eyebrow text-ink border border-rule-strong hover:border-accent hover:text-accent px-5 py-3 rounded-[2px] transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card text-ink rounded-[2px] p-7">
      <h2 className="font-display text-[22px] text-ink leading-tight mb-2">
        Ask us for a price
      </h2>
      <p className="text-sm text-ink-secondary mb-6">
        Tell us the site and the system. We answer every enquiry the same working day
        — and we&apos;ll say plainly if it&apos;s not a job for us.
      </p>

      <form className="space-y-4" onSubmit={submit} noValidate>
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="eyebrow text-ink-muted block mb-1.5">
              {f.label}
              {f.required && <span className="text-accent ml-1">*</span>}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              autoComplete={
                f.id === "name"
                  ? "name"
                  : f.id === "phone"
                    ? "tel"
                    : f.id === "email"
                      ? "email"
                      : "organization"
              }
              value={values[f.id as FieldId] ?? ""}
              onChange={(e) => set(f.id, e.target.value)}
              className="w-full border border-rule rounded-[2px] px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
            />
          </div>
        ))}

        <div>
          <label htmlFor="service" className="eyebrow text-ink-muted block mb-1.5">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            value={values.service ?? ""}
            onChange={(e) => set("service", e.target.value)}
            className="w-full border border-rule rounded-[2px] px-3 py-2.5 text-sm focus:border-accent focus:outline-none bg-card"
          >
            <option value="">Please choose…</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="detail" className="eyebrow text-ink-muted block mb-1.5">
            Anything else we should know?
          </label>
          <textarea
            id="detail"
            name="detail"
            rows={3}
            value={values.detail ?? ""}
            onChange={(e) => set("detail", e.target.value)}
            placeholder="Site address, how many buildings, when it was last serviced…"
            className="w-full border border-rule rounded-[2px] px-3 py-2.5 text-sm focus:border-accent focus:outline-none placeholder:text-ink-muted resize-y"
          />
        </div>

        {error && (
          <p className="text-sm text-danger border-l-2 border-danger pl-3" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full eyebrow bg-accent hover:bg-accent-hover text-white py-4 rounded-[2px] transition-colors"
        >
          Send enquiry
        </button>

        <p className="text-xs text-ink-muted leading-relaxed">
          This opens an email to {EMAIL} with your details filled in. On the live site
          it would post straight to the inbox.
        </p>
      </form>
    </div>
  );
}
