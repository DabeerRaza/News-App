import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=84e33c3911ac4238af7093e16b77329a")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.articles.map((item, index) => {
          return (
            <div className="container">
              <div className="row">
                <h2 style={{ margin: '40px 0px' }} className="col-xl-12">
                  {item.title}
                </h2>
                <div className="col-xl-4">
                  <img style={{ width: '100%' }} src={item.urlToImage} alt="news" />
                </div>
                <div className="col-xl-7">
                  <p>
                    {item.content}...<a href={item.url} >read more</a>
                  </p>
                  <h5>Author: {(item.author != null) ? item.author : "Anonymous"}</h5>
                </div>
              </div>
            </div>
          )
        })
        }
      </div >
    );
  }
}

export default App;
