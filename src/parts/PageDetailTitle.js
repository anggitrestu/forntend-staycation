import React from 'react';
import Fade from 'react-reveal/Fade';
import Breadcumb from 'elements/Breadcumb';

const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <section className="container spacing-sm">
      <Fade Bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcumb data={breadcrumb}></Breadcumb>
          </div>
          <div className="col-auto text-center">
            <h1 className="h2" style={{ fontWeight: 600 }}>
              {data.title}
            </h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
};

export default PageDetailTitle;
