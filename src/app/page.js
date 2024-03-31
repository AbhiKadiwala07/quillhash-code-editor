"use client";
import FileBreadScrum from "@/Components/BreadCrums/FileBreadScrum";
import EditorLayout from "@/Components/Editor/EditorLayout";
import Header from "@/Components/Header";
import { defaultFileBreadcrums } from "@/utils/constant";
import { useState } from "react";

export default function Home() {
  const [fileBreadcrumbs, setFileBreadcrumbs] = useState(defaultFileBreadcrums);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen min-w-screen">
      <Header />
      <FileBreadScrum breadcrumbs={fileBreadcrumbs} />
      <EditorLayout />
    </main>
  );
}
