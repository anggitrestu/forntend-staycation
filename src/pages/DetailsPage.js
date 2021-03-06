import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import BookingForm from 'parts/BookingForm';
import PageDetailDescription from 'parts/PageDetailDescription';
import Activities from 'parts/Checkout/Activities';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailPage extends Component {
  componentDidMount() {
    window.title = 'Detail Page';
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }
  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) {
      return null;
    }
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Detail', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImage data={page[match.params.id].imageId}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription
                data={page[match.params.id]}
              ></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId}></Activities>
        <Testimony data={page[match.params.id].testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailPage
);
