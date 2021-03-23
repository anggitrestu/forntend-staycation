import React from 'react';
import Fade from 'react-reveal/Fade';

const FeaturedImage = ({ data }) => {
  return (
    <section className="container" style={{ marginTop: '-30px' }}>
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? 'column-5' : 'column-7'} ${
                index > 0 ? 'row-1 h245' : 'row-2 h500'
              } `}
            >
              <Fade delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      className="img-cover"
                      alt={item._id}
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedImage;
