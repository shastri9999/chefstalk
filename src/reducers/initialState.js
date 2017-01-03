export default {
  searchTerms: [],
  filters: [{
    value: 'Master Chef',
    display: 'Master Chef',
    type: 'title'
  },{
    value: 'Sous Chef',
    display: 'Sous Chef',
    type: 'title'
  },{
    value: 'Head Chef',
    display: 'Head Chef',
    type: 'title'
  },{
    value: 'Kitchen Porter',
    display: 'Kitchen Porter',
    type: 'title'
  },{
    value: 'Line Cook',
    display: 'Line Cook',
    type: 'title'
  },{
    value: 'Dish Washer',
    display: 'Dish Washer',
    type: 'title'
  },{
    value: 'Executive Chef',
    display: 'Executive Chef',
    type: 'title'
  },{
    value: 'Bar Tender',
    display: 'Bar Tender',
    type: 'title'
  },{
    value: 'Full Time',
    display: 'Full Time',
    type: 'jobType'
  },{
    value: 'Contract',
    display: 'Contract',
    type: 'jobType'
  },{
    value: 'Berlin',
    display: 'Berlin',
    type: 'location'
  },{
    value: 'Germany',
    display: 'Germany',
    type: 'location'
  },{
    value: 'USA',
    display: 'United States',
    type: 'location'
  },{
    value: 'India',
    display: 'India',
    type: 'location'
  }, {
    value: 'Radisson Blu',
    display: 'Radisson Blu',
    type: 'name',
  },{
    value: 'Grand Hyatt',
    display: 'Grand Hyatt',
    type: 'name',
  },{
    value: 'Oberoi Hotels',
    display: 'Oberoi Hotels',
    type: 'name',
  },{
    value: 'Brookyln',
    display: 'Brookyln',
    type: 'location',
  },{
    value: 'Kolkota',
    display: 'Kolkota',
    type: 'location',
  }],
  filteredJobs: [],
  jobs: [{
    restaurant: {
        name: 'Radisson Blu',
        restaurantType: '5 star Hotel',
        image: 'https://s27.postimg.org/65f9fc7yr/radisson.png',
        employees: '15-20',
        founded: '2012',
        location: 'USA, Germany, India',
        jobs: [{
          'title': 'Master Chef',
          'jobType': 'Contract',
          'posted': '3 days ago',
          'location': 'Berlin, Germany',
          'compensation': '$120K - $180K',
        },{
          'title': 'Bar Tender',
          'jobType': 'Full Time',
          'posted': '5 days ago',
          'location': 'Brookyln, USA',
          'compensation': '$80K - $100K',
        },{
          'title': 'Bar Tender',
          'jobType': 'Contract',
          'posted': '7 days ago',
          'location': 'Mumbai, India',
          'compensation': '$80K - $100K',
        }, {
          'title': 'Bar Tender',
          'jobType': 'Contract',
          'posted': '7 days ago',
          'location': 'Bengaluru, India',
          'compensation': '$80K - $100K',
        }, {
          'title': 'Bar Tender',
          'jobType': 'Contract',
          'posted': '9 days ago',
          'location': 'Kolkota, India',
          'compensation': '$80K - $100K',
        }],
        'posted': '3 days ago'
    },
  },{
    restaurant: {
        name: 'Grand Hyatt',
        restaurantType: '5 star Hotel',
        image: 'https://s27.postimg.org/r6kp0y5df/hyatt.png',
        employees: '25-100',
        founded: '2015',
        location: 'USA, Germany, India',
        jobs: [{
          'title': 'Bar Tender',
          'jobType': 'Full Time',
          'posted': '5 days ago',
          'location': 'Brookyln, USA',
          'compensation': '$80K - $100K',
        },{
          'title': 'Bar Tender',
          'jobType': 'Contract',
          'posted': '7 days ago',
          'location': 'Mumbai, India',
          'compensation': '$80K - $100K',
        }, {
          'title': 'Bar Tender',
          'jobType': 'Contract',
          'posted': '9 days ago',
          'location': 'Kolkota, India',
          'compensation': '$80K - $100K',
        }],
        'posted': '5 days ago'
    },
  },{
    restaurant: {
        name: 'Oberoi Hotel',
        restaurantType: '4 star Hotel',
        image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150',
        employees: '150-200',
        founded: '2010',
        location: 'India',
        jobs: [{
          'title': 'Waiter',
          'jobType': 'Contract',
          'posted': '7 days ago',
          'location': 'Bengaluru, India',
          'compensation': '$60K - $80K',
        }, {
          'title': 'Waiter',
          'jobType': 'Contract',
          'posted': '9 days ago',
          'location': 'Kolkota, India',
          'compensation': '$60K - $80K',
        }],
        'posted': '7 days ago'
    },
  }],
  selectedJobIndex: 0,
};
