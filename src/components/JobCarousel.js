import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import '../styles/jobcarousel.scss';

export default class JobCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
      this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      className: 'job-slide',
      slidesToScroll: 1,
      slidesToShow: 4,
      variableWidth: true,
    };
    const slides = [{
      image: 'https://s30.postimg.org/cqzqqa46p/mumbai_city_highlights_small_group_tour_in_mumba.jpg',
      place: 'Mumbai, India',
    },{
      image: 'https://s30.postimg.org/cqzqqa46p/mumbai_city_highlights_small_group_tour_in_mumba.jpg',
      place: 'Berlin, Germany',
    },{
      image: 'https://s30.postimg.org/cqzqqa46p/mumbai_city_highlights_small_group_tour_in_mumba.jpg',
      place: 'Barcelona, Spain',
    },{
      image: 'https://s30.postimg.org/cqzqqa46p/mumbai_city_highlights_small_group_tour_in_mumba.jpg',
      place: 'NewYork, USA',
    },{
      image: 'https://s30.postimg.org/cqzqqa46p/mumbai_city_highlights_small_group_tour_in_mumba.jpg',
      place: 'Bengaluru, India',
    }];
    return (
      <div className="jobcarousel">
        <div className="buttons">
          <button className="previous" onClick={this.previous}>
            <img src={require('../images/left.png')} />
          </button>
          <button className="next" onClick={this.next}>
            <img src={require('../images/right.png')} />
          </button>
        </div>
        <Slider ref={c => this.slider = c} {...settings}>
          {slides.map((slide, index)=>(
            <div key={index}>
              <div className="posting">
                  <div className="image-container" style={{backgroundImage: `url(${slide.image})`}}>
                    {slide.place}
                  </div>
                  <div className="details">
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}