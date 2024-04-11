import { Component } from "react";

import "./index.css";

class MovieDetails extends Component {
  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
  };

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}
export default MovieDetails;
