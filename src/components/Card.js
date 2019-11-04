import React from "react";
// const background = 'background-image: url(\'https://s9.limitedrun.com/images/1101066/8BP079_front_1400x1400.jpg\')';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDescription: false
    };
  }

  toogleDescription = () => {
    this.setState({
      isDescription: !this.state.isDescription
    });
  };

  render() {
    const {
      title,
      backgroundImage,
      data,
      voteAverage,
      voteCount,
      description
    } = this.props;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url('${backgroundImage}')`
          }}
        />

        <div className="card__title">{title}</div>

        <div className="card__like">
          <i className="fa fa-heart-o" />
        </div>

        <div className="card__subtitle">
          <span>{data}</span>
          <span>
            {voteAverage} ({voteCount} votes)
          </span>
        </div>
        <div className="card-info">
          <div className="card-info__header">SUMMARY</div>
          <button
            className="card-info__hideButton"
            onClick={this.toogleDescription}
          >
            Toogle Description
          </button>
          <div className="card-info__description">
            {this.state.isDescription ? description : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
