import GoogleSheetEmbed from "@/components/google-sheet-iframe";
import React from "react";

export default function AuditionsSchedule() {
  return (
    <GoogleSheetEmbed
      src="https://docs.google.com/spreadsheets/d/1C3LnFAWTjdbCw7JQLzJ3dITymrqRmN99lFIAaRawgnI/edit?gid=0#gid=0"
      title="Auditions Schedule"
    />
  );
}
