import React from 'react';

const FileBreadScrum = ({ breadcrumbs }) => {
  console.log("breadcrumbs",breadcrumbs)
  return (
    <div className="p-2">
      <div className="flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.id}>
            <span>{breadcrumb.name}</span>
            {index !== breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FileBreadScrum;
