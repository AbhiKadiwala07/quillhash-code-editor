// Sample data
// export const defaultFolders = [
//   { id: 1, name: "Folder 1" },
//   { id: 2, name: "Folder 2" },
// ];

export const defaultIssues = [
  { id: 1, title: "Issue 1", description: "Description of issue 1" },
  { id: 2, title: "Issue 2", description: "Description of issue 2" },
];

export const defaultFileBreadcrums = [
  { id: 1, name: "AI Audit" },
  { id: 2, name: "My Projects" },
];

export const defaultFolders = {
  id: 1,
  name: "Example Folder",
  folders: [
    {
      id: 2,
      name: "src",
      folders: [
        {
          id: 3,
          name: "Component",
          folders: [
            {
              id: 4,
              name: "Editor",
              files: [{ id: 5, name: "editor.js" }],
            },
          ],
          // files: [{ id: 8, name: "style.css" }],
        },
        {
          id: 10,
          name: "Styles",
          folders: [],
          files: [{ id: 8, name: "style.css" }],
        },
      ],
      // files: [{ id: 11, name: "File A1" }],
    },
    {
      id: 12,
      name: "public",
      files: [{ id: 13, name: "index.html" }],
    },
  ],
};

export const defaultCode = `
uint32 lower = 0;
              uint32 upper = nCheckpoints - 1;
              while (upper > lower) {
                      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
                      Checkpoint memory cp = checkpoints[account][center];
                      if (cp.fromBlock == blockNumber) {
                           return cp.votes; }
uint32 lower = 0;
              uint32 upper = nCheckpoints - 1;
              while (upper > lower) {
                      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
                      Checkpoint memory cp = checkpoints[account][center];
                      if (cp.fromBlock == blockNumber) {
                           return cp.votes; }
uint32 lower = 0;
              uint32 upper = nCheckpoints - 1;
              while (upper > lower) {
                      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
                      Checkpoint memory cp = checkpoints[account][center];
                      if (cp.fromBlock == blockNumber) {
                           return cp.votes; }
while (upper > lower) {
uint32 lower = 0;
              uint32 upper = nCheckpoints - 1;
              while (upper > lower) {
                      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
                      Checkpoint memory cp = checkpoints[account][center];
                      if (cp.fromBlock == blockNumber) {
                           return cp.votes; }`;
