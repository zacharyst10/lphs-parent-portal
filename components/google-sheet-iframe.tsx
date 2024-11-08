"use client";

import React, { useState, useEffect } from "react";

interface GoogleSheetEmbedProps {
  src: string;
  title?: string;
}

export default function GoogleSheetEmbed({
  src,
  title,
}: GoogleSheetEmbedProps) {
  const [iframeHeight, setIframeHeight] = useState("600px");

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight * 0.8; // 80% of viewport height
      setIframeHeight(`${height}px`);
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={`${src}?embedded=true`}
        title={title}
        width="100%"
        height={iframeHeight}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      />
    </div>
  );
}
