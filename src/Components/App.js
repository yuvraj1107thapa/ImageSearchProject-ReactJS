import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Unsplash from "../Api/Unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    // const response = await Axios.get("https://api.unsplash.com/search/photos", {
    //   params: {
    //     query: term
    //   },
    //   headers: {
    //     Authorization:
    //       "Client-ID 1c3f413f94f60abb1162a3374dbc72756cf517c78bccee80136c2da9225339c7"
    //   }
    // });
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: 25
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>Found: {this.state.images.length} images</div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
