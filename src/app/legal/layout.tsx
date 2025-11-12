"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

const policies = [
  { title: "Payment Terms & Conditions", slug: "payment-terms" },
  { title: "Project Scope & Change Request Policy", slug: "project-scope" },
  { title: "Work Suspension Policy", slug: "work-suspension" },
  // {
  //   title: "Confidentiality & Intellectual Property Policy",
  //   slug: "confidentiality-policy",
  // },
  // {
  //   title: "Delivery, Revisions & Final Handover Policy",
  //   slug: "delivery-policy",
  // },
  // {
  //   title: "Communication & Collaboration Policy",
  //   slug: "communication-policy",
  // },
  // { title: "Refund & Cancellation Policy", slug: "refund-policy" },
  // { title: "Partner Credit & Prepayment Policy", slug: "partner-credit" },
  // {
  //   title: "Project Associate Engagement Policy",
  //   slug: "associate-engagement",
  // },
  // { title: "Quality Assurance & Approval Policy", slug: "quality-assurance" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen justify-center bg-white">
      <Navbar />
      <div className="flex w-full  px-8 py-24">
        {/* Sidebar */}
        <aside className="w-[400px] pr-6 border-r border-gray-250">
          <h2
            className="text-3xl font-semibold mb-10 text-gray-900"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Legal & Compliance
          </h2>
          <ul className="space-y-4">
            {policies.map((item) => {
              const active = pathname.endsWith(item.slug);
              return (
                <li key={item.slug} className="flex items-center space-x-2">
                  <span
                    className={`text-gray-900 transition-all duration-200 ${
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    –
                  </span>
                  <Link
                    href={`/legal/${item.slug}`}
                    className={`block text-[16px] transition-all duration-200 ${
                      active
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      lineHeight: "1.6",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <main
          className="flex-1 bg-white "
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
