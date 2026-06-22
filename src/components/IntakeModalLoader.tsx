"use client";
import dynamic from "next/dynamic";

const IntakeModal = dynamic(() => import("./IntakeModal"), { ssr: false });

export default function IntakeModalLoader() {
  return <IntakeModal />;
}
