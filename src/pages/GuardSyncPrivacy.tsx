import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction",
    content: (
      <p className="text-foreground/70 leading-relaxed">
        Black Belt - GuardSync ("GuardSync," "we," "our," or "us") provides workforce management tools
        for security operations, including an Admin Console, Guard App, and Staff App.
        <br /><br />
        This Privacy Policy explains what personal data we collect, how we use it, who we share it with,
        how long we keep it, and what rights users may have.
      </p>
    ),
  },
  {
    id: "scope",
    number: "2",
    title: "Scope",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">This Privacy Policy applies to:</p>
        <ul className="space-y-2">
          {[
            "Guard App users (security guards)",
            "Staff App users (staff/supervisors)",
            "Admin Console users (administrators)",
            "Organizations using GuardSync",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "information",
    number: "3",
    title: "Information We Collect",
    content: (
      <div className="space-y-6">
        <p className="text-foreground/70 leading-relaxed">We collect the following categories of data:</p>

        {[
          {
            label: "A. Account and Identity Data",
            items: [
              "Name",
              "Phone number",
              "Email address",
              "Password (stored as a one-way hash)",
              "Employee ID (if assigned)",
              "Organization and site assignment information",
              "Role data (guard, staff, admin)",
            ],
          },
          {
            label: "B. Biometric and Identity Verification Data",
            items: [
              "Facial descriptor templates used for face verification checks",
              "Profile photo URL (if provided)",
            ],
            note: "We use facial descriptor data to confirm identity during clock-in and random face verification checks. We do not use facial descriptors for purposes unrelated to workforce verification in this app.",
          },
          {
            label: "C. Attendance and Work Activity Data",
            items: [
              "Clock-in and clock-out timestamps",
              "Hours worked",
              "Assigned site and shift information",
              "Face check status (for example: pending, passed, failed, expired)",
            ],
          },
          {
            label: "D. Location Data",
            items: [
              "GPS coordinates (latitude, longitude)",
              "Accuracy metadata (if provided)",
              "Time of each location ping",
            ],
            note: "Location data is recorded during active shifts (for example, periodic updates according to system configuration).",
          },
          {
            label: "E. Organization and Operational Data",
            items: [
              "Organization profile details (such as name, invite code, contact details)",
              "Site details and site contact information",
              "Payroll records (for example: days worked, rates, deductions, net pay status)",
            ],
          },
          {
            label: "F. Technical and Security Data",
            items: [
              "Authentication tokens and authorization metadata",
              "Basic API and system logs needed for security, troubleshooting, and reliability",
            ],
          },
        ].map(({ label, items, note }) => (
          <div key={label} className="rounded-xl border border-line bg-surface p-5">
            <h4 className="text-sm font-semibold text-ink mb-3">{label}</h4>
            <ul className="space-y-2 mb-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/70 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            {note && (
              <p className="text-xs text-foreground/50 border-t border-line pt-3 mt-3 leading-relaxed">
                <span className="text-ink font-medium">Note: </span>{note}
              </p>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "how-we-use",
    number: "4",
    title: "How We Use Information",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">We use personal data to:</p>
        <ul className="space-y-2">
          {[
            "Create and manage user accounts",
            "Authenticate users and maintain secure access",
            "Process guard enrollment and admin authorization workflows",
            "Verify identity for clock-in and random face checks",
            "Record attendance and generate payroll data",
            "Monitor shift location updates and last known guard location for operations",
            "Detect misuse, prevent fraud, and improve security",
            "Maintain, debug, and improve app performance",
            "Comply with legal obligations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    number: "5",
    title: "Legal Bases for Processing",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Depending on your jurisdiction, we may rely on one or more of the following legal bases:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Performance of a contract",
            "Legitimate interests (for example, workforce management and security operations)",
            "Legal obligation",
            "Consent (especially where required for biometric processing)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground/70 leading-relaxed text-sm bg-tint border border-sage/20 rounded-lg px-4 py-3">
          Organizations using GuardSync are responsible for obtaining any employee notices, acknowledgments,
          or consent required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "6",
    title: "How We Share Information",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4 font-medium">
          We do not sell personal data.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-4">We may share data:</p>
        <ul className="space-y-2">
          {[
            "Within your organization (for example, authorized admins and staff)",
            "With service providers hosting or supporting GuardSync infrastructure",
            "If required by law, legal process, or valid government request",
            "To protect rights, safety, and security of users, organizations, and the public",
            "In connection with a merger, acquisition, or business transfer (subject to applicable safeguards)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    number: "7",
    title: "Data Retention",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">
          We retain data for as long as needed to provide services and meet legal, operational, and
          security requirements.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-4">Current app behavior includes:</p>
        <ul className="space-y-2 mb-4">
          {[
            "Configurable location-data retention window (default set in system configuration)",
            "Archival of older location records from active tables",
            "Cleanup of older completed or expired face check records",
            "Longer retention of attendance and payroll records where needed for business and compliance purposes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground/70 text-sm">
          Retention periods may vary by organization policy and legal requirements.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "8",
    title: "Security Measures",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">
          We use reasonable technical and organizational safeguards, including:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Password hashing",
            "Token-based authentication",
            "Role-based access controls",
            "Rate limiting for sensitive endpoints (such as login)",
            "Database and infrastructure controls suitable for operational security",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground/60 text-sm">
          No method of storage or transmission is completely secure. We cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    number: "9",
    title: "International Transfers",
    content: (
      <p className="text-foreground/70 leading-relaxed">
        If data is stored or processed in jurisdictions outside your country, we take steps intended
        to provide appropriate protection as required by applicable law.
      </p>
    ),
  },
  {
    id: "rights",
    number: "10",
    title: "Your Rights",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Depending on local law, users may have rights to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Access personal data",
            "Correct inaccurate data",
            "Delete data",
            "Restrict or object to certain processing",
            "Data portability",
            "Withdraw consent where processing is based on consent",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground/70">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground/70 text-sm bg-tint border border-sage/20 rounded-lg px-4 py-3">
          Requests should be directed to your employer/organization administrator first, or to us using
          the contact details below where appropriate.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "11",
    title: "Children",
    content: (
      <p className="text-foreground/70 leading-relaxed">
        GuardSync is intended for professional workforce use and is not directed to children.
      </p>
    ),
  },
  {
    id: "third-party",
    number: "12",
    title: "Third-Party Services",
    content: (
      <p className="text-foreground/70 leading-relaxed">
        GuardSync may rely on third-party infrastructure or libraries for hosting, authentication
        support, analytics, or facial processing capabilities. Their processing is governed by their
        own policies and contractual terms.
      </p>
    ),
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to This Policy",
    content: (
      <p className="text-foreground/70 leading-relaxed">
        We may update this Privacy Policy from time to time. Updated versions will be posted with a
        revised "Last Updated" date.
      </p>
    ),
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Information",
    content: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-4">
          For privacy questions or requests, contact:
        </p>
        <div className="rounded-xl border border-line bg-surface p-5 space-y-3">
          {[
            { label: "Privacy Contact", value: "[Add privacy contact name/team]" },
            { label: "Email", value: "[Add privacy email]" },
            { label: "Address", value: "[Add company/org address]" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-sm font-medium text-ink w-36 shrink-0">
                {label}
              </span>
              <span className="text-foreground/60 text-sm">{value}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const GuardSyncPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pb-24 pt-32 md:pt-40">
        {/* Title */}
        <section className="page max-w-3xl">
          <p className="text-[15px] text-sage">Black Belt - GuardSync</p>
          <h1 className="heading-lg mt-3 text-ink">Privacy Policy</h1>
          <p className="mt-4 text-sm text-graphite">Last updated: March 26, 2026</p>
        </section>

        {/* Content */}
        <div className="page mt-14 max-w-3xl">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 border-t border-line py-10">
              <h2 className="flex items-baseline gap-4 text-xl font-medium text-ink">
                <span className="w-6 shrink-0 font-light text-sage">{section.number}</span>
                {section.title}
              </h2>
              <div className="mt-5 sm:pl-10">{section.content}</div>
            </section>
          ))}

          <div className="border-t border-line pt-10">
            <Link to="/guardsync" className="btn-outline">
              Back to GuardSync
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuardSyncPrivacy;
