import React, { PropTypes } from 'react';
import 'react-select/dist/react-select.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
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
