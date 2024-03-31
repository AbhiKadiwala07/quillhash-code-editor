"use client";
import { useState } from "react";

const issuesData = [
  {
    id: 1,
    title: "Issue 1",
    lists: [
      {
        id: 1,
        title: "List 1",
        description: "Description 1",
        recommendation: "Recommendation 1",
      },
      {
        id: 2,
        title: "List 2",
        description: "Description 2",
        recommendation: "Recommendation 2",
      },
    ],
  },
  // Add more issues as needed
];

const IssueList = ({ onIssueClick }) => {
  const [expandedList, setExpandedList] = useState(null);

  const handleListClick = (listId) => {
    setExpandedList(expandedList === listId ? null : listId);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {issuesData.map((issue) => (
        <div key={issue.id} className="border p-4">
          <h2 className="text-lg font-semibold mb-2">{issue.title}</h2>
          <ul>
            {issue.lists.map((list) => (
              <li key={list.id} className="mb-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    handleListClick(list.id);
                    onIssueClick(list);
                  }}
                >
                  <span>{list.title}</span>
                  <span>{expandedList === list.id ? "-" : "+"}</span>
                </div>
                {expandedList === list.id && (
                  <div className="ml-4">
                    <p className="text-sm mb-1">{list.description}</p>
                    <p className="text-sm text-gray-500">
                      {list.recommendation}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IssueList;
