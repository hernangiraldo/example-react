import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new.css';

class New extends Component {

  state = {
    title: this.props.title
  };

  handleClick = (event) => {
    this.setState({
      title: 'pruebas'
    });
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <img className="card__img" src={this.props.image} />
        <div className="card__info">
          <h3>{this.state.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

New.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default New;