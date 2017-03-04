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
      image: '../images/background-0.png',
      place: 'Mumbai, India',
      restaurant: {
        name: 'Grand Hyatt',
        image: 'https://s27.postimg.org/r6kp0y5df/hyatt.png',
        positions: 'Master Chef, Bar Tender, Manager',
        salaryRange: '$80K - $120K',
        time: '3 hours ago',
      },
    },{
      image: '../images/background-1.png',
      place: 'Berlin, Germany',
      restaurant: {
        name: 'Radisson Blu',
        image: 'https://s27.postimg.org/65f9fc7yr/radisson.png',
        positions: 'Master Chef, Bar Tender, Manager',
        salaryRange: '$80K - $120K',
        time: '1 day ago',
      },
    },{
      image: '../images/background-2.png',
      place: 'Barcelona, Spain',
      restaurant: {
        name: 'Radisson Blu',
        image: 'https://s27.postimg.org/65f9fc7yr/radisson.png',
        positions: 'Master Chef, Bar Tender, Manager',
        salaryRange: '$80K - $120K',
        time: '2 days ago',
      },
    },{
      image: '../images/background-0.png',
      place: 'NewYork, USA',
      restaurant: {
        name: 'Radisson Blu',
        image: 'https://s27.postimg.org/65f9fc7yr/radisson.png',
        positions: 'Master Chef, Bar Tender, Manager',
        salaryRange: '$80K - $120K',
        time: '2 days ago',
      },
    },{
      image: '../images/background-1.png',
      place: 'Bengaluru, India',
      restaurant: {
        name: 'Grand Hyatt',
        image: 'https://s27.postimg.org/r6kp0y5df/hyatt.png',
        positions: 'Master Chef, Bar Tender, Manager',
        salaryRange: '$80K - $120K',
        time: '3 days ago',
      },
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
                    <img src={slide.restaurant.image} alt="" />
                    <button className="apply">Apply</button>
                    <h3>{slide.restaurant.name}</h3>
                    <div className="positions">{slide.restaurant.positions}</div>
                    <div className="salary">
                      <div>{slide.restaurant.salaryRange}</div>
                      <div className="time">{slide.restaurant.time}</div>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
