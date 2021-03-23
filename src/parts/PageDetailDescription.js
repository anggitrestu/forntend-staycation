import React from 'react';

import ReactHtmlParser from 'react-html-parser';

const PageDetailDescription = ({ data }) => {
  return (
    <main>
      <h4>About The Place</h4>
      <div className="text-gray-500" style={{ fontWeight: 300 }}>
        {ReactHtmlParser(data.description)}
      </div>
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.map((feature, index) => {
          return (
            <div
              key={`featured-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                alt={feature.name}
                className="d-block mb-2"
                style={{ width: 38 }}
              />{' '}
              <span>{feature.qty}</span>{' '}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default PageDetailDescription;
