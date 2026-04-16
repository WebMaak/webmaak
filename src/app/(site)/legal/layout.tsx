"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronsLeft,
  ChevronsRight,
  CreditCard,
  FileText,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import styles from "./LegalLayout.module.css";

const policies = [
  {
    title: "Payment Terms & Conditions",
    slug: "payment-terms",
    icon: CreditCard,
  },
  {
    title: "Project Scope & Change Request Policy",
    slug: "project-scope",
    icon: FileText,
  },
  {
    title: "Work Suspension Policy",
    slug: "work-suspension",
    icon: AlertCircle,
  },
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
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
    // On tablet/mobile, start with sidebar closed
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    // <div className="flex min-h-screen justify-center bg-white">
    //   <Header />
    //   <div className="flex w-full  px-8 py-24">
    //     {/* Sidebar */}
    //     <aside className="w-[400px] pr-6 border-r border-gray-250">
    //       <h2
    //         className="text-3xl font-semibold mb-10 text-gray-900"
    //         style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
    //       >
    //         Legal & Compliance
    //       </h2>
    //       <ul className="space-y-4">
    //         {policies.map((item) => {
    //           const active = pathname.endsWith(item.slug);
    //           return (
    //             <li key={item.slug} className="flex items-center space-x-2">
    //               <span
    //                 className={`text-gray-900 transition-all duration-200 ${
    //                   active
    //                     ? "opacity-100 translate-x-0"
    //                     : "opacity-0 -translate-x-2"
    //                 }`}
    //               >
    //                 –
    //               </span>
    //               <Link
    //                 href={`/legal/${item.slug}`}
    //                 className={`block text-[16px] transition-all duration-200 ${
    //                   active
    //                     ? "text-gray-900"
    //                     : "text-gray-600 hover:text-gray-900"
    //                 }`}
    //                 style={{
    //                   fontFamily: "system-ui, sans-serif",
    //                   lineHeight: "1.6",
    //                   letterSpacing: "0.01em",
    //                 }}
    //               >
    //                 {item.title}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </aside>

    //     {/* Content */}
    //     <main
    //       className="flex-1 bg-white "
    //       style={{ fontFamily: "system-ui, sans-serif" }}
    //     >
    //       <div>{children}</div>
    //     </main>
    //   </div>
    // </div>
    <div className={styles.wrapper}>
      <div className={styles.Header}>
        <Link href="/#home">
          <Image
            src="/company-logos/site-logo-colored.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.container}>
        {/* Sidebar */}
        <aside
          className={`${styles.sidebar} ${!isSidebarOpen ? styles.sidebarCollapsed : ""}`}
        >
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarTitleWrapper}>
              <AnimatePresence mode="wait">
                {isSidebarOpen ? (
                  <motion.h2
                    key="full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className={styles.sidebarTitle}
                  >
                    Legal & Compliance
                  </motion.h2>
                ) : (
                  <motion.h2
                    key="collapsed"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className={styles.sidebarTitleCollapsed}
                  >
                    L
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>

            <ul className={styles.list}>
              {policies.map((item) => {
                const active = mounted && pathname.includes(item.slug);
                const Icon = item.icon;

                return (
                  <li key={item.slug} className={styles.listItem}>
                    <Link
                      href={`/legal/${item.slug}`}
                      className={`${styles.link} ${
                        active ? styles.linkActive : styles.linkInactive
                      }`}
                    >
                      <div className={styles.iconWrapper}>
                        <Icon
                          size={20}
                          className={
                            active ? styles.iconActive : styles.iconInactive
                          }
                        />
                      </div>
                      <span className={styles.linkText}>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`${styles.toggleBtn} ${isSidebarOpen ? styles.toggleBtnActive : ""}`}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? (
              <ChevronsLeft size={20} />
            ) : (
              <ChevronsRight size={20} />
            )}
          </button>
        </aside>

        {/* Content */}
        <main
          className={`${styles.main} ${!isSidebarOpen ? styles.mainFull : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
