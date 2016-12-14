import React, { PropTypes } from 'react';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
