/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/ic_cities.svg';
import IconTraveler from 'assets/images/icons/ic_traveler.svg';
import IconTreasure from 'assets/images/icons/ic_treasure.svg';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

const Hero = (props) => {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4 mt-5">
        <div className="row ">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-2 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-5 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: '170%' }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 15 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travellers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    travellers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 15 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasure`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }} className="mt-4">
              <img
                src={ImageHero}
                alt="image-hero"
                className="img-fluid position-absolute"
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="image-hero-frame"
                className="img-fluid position-absolute"
                style={{ margin: '0 -15px -15px 0' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
