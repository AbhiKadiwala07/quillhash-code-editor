// components/IssueBreadScrum.js
const IssueBreadScrum = ({ selectedIssue }) => {
  return (
    <div className="mb-4">
      {selectedIssue && (
        <p
          className="text-sm text-blue-500 cursor-pointer"
        //   onClick={() => setSelectedIssue(null)}
        >
          Count of Issues {`/ ${selectedIssue.title}`}
        </p>
      )}
    </div>
  );
};

export default IssueBreadScrum;
