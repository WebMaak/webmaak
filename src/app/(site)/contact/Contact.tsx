"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatedBackground } from "./AnimatedBackground";
import { GlassTabs } from "./GlassTabs";
import { ContentArea } from "./ContentArea";
import { Branding } from "./Branding";
import { PageFooter } from "./Footer";
import { LayoutGrid, Code, Image } from "lucide-react";
import "./About.css";

const QuotePopup = dynamic(() => import("@/components/popup-form/QuotePopup"));

const tabs = [
  {
    id: "OVERVIEW",
    label: "Overview",
    icon: <LayoutGrid size={14} strokeWidth={2} />,
  },
  {
    id: "WEBAPPS",
    label: "Web Apps",
    icon: <Code size={14} strokeWidth={2} />,
  },
  {
    id: "MEDIA",
    label: "Media",
    icon: <Image size={14} strokeWidth={2} />,
  },
];

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AnimatedBackground />

        <div className="about-container">
          <Branding />

          <div className="about-tabs-wrapper">
            <GlassTabs
              tabs={tabs}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </div>

          <div className="about-content-card">
            <ContentArea
              activeTab={activeTab}
              onNavigate={setActiveTab}
              openForm={setOpen}
            />
          </div>

          <PageFooter />
        </div>
      </div>
      <QuotePopup isOpen={open} onClose={() => setOpen(false)} mode="light" />
    </>
  );
};

export default Contact;
