import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import jsonLandingPage from 'json/landingPage.json';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={this.refMostPicked}
          data={jsonLandingPage.hero}
        ></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={jsonLandingPage.mostPicked}
        ></MostPicked>
        <Categories data={jsonLandingPage.categories}></Categories>
        <Testimony data={jsonLandingPage.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}
