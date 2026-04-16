// Standard section title formatting component.
// src/components/sectionsShared/SectionTitleBlock.tsx

"use client";

import "@/styles/section-title-block-dark.css";

interface SectionTitleBlockProps {
  normal1?: string;
  italic1?: string;
  normal2?: string;
  italic2?: string;
  description?: string;
}

export default function SectionTitleBlock({
  normal1,
  italic1,
  normal2,
  italic2,
  description,
}: SectionTitleBlockProps) {
  return (
    <div className="section-title-block-dark">
      <h2 className="section-title">
        {(normal1 || italic1) && (
          <span className="title-line">
            {normal1 && <span className="title-normal">{normal1} </span>}
            {italic1 && <span className="title-italic">{italic1}</span>}
          </span>
        )}

        {(normal2 || italic2) && (
          <span className="title-line">
            {normal2 && <span className="title-normal">{normal2} </span>}
            {italic2 && <span className="title-italic">{italic2}</span>}
          </span>
        )}
      </h2>
      <p className="section-desc">{description}</p>
    </div>
  );
}
