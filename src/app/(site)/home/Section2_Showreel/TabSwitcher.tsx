"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Layout } from "lucide-react";
import { Category } from "./types";
import "@/styles/showreel/TabSwitcher.css";

interface TabSwitcherProps {
  activeTab: Category;
  onTabChange: (tab: Category) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: { name: Category; icon: React.ReactNode }[] = [
    { name: "IT Projects", icon: <Layout size={18} /> },
    { name: "Media Projects", icon: <Video size={18} /> },
  ];

  return (
    <div className="tab-container">
      <div className="tab-pill-box">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.name)}
              className="tab-button"
              style={{ position: "relative" }}
            >
              <motion.span
                className="tab-icon"
                initial={false}
                animate={{
                  color: isActive
                    ? "var(--tab-active-text)"
                    : "var(--tab-inactive-text)",
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {tab.icon}
              </motion.span>

              <motion.span
                className="tab-text"
                initial={false}
                animate={{
                  color: isActive
                    ? "var(--tab-active-text)"
                    : "var(--tab-inactive-text)",
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {tab.name}
              </motion.span>

              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="tab-active-bg"
                  transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabSwitcher;
