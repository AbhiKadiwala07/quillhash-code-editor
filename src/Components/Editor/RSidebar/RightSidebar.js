"use client";
import { useState } from "react";
import IssueBreadScrum from "@/Components/BreadCrums/IssueBreadScrum";
import IssueList from "./IssueList";

const RightSidebar = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  console.log("selectedIssue", selectedIssue);

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  return (
    <div className="container mx-auto py-8">
      <IssueBreadScrum selectedIssue={selectedIssue} />
      <IssueList onIssueClick={handleIssueClick} />
    </div>
  );
};

export default RightSidebar;
