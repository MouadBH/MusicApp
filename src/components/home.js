import React, {Component} from 'react';
import Header from './header/header';
import Card from './card/card';
import Search from './search/search';
import Player from './player/player';
import * as actions from './action/index';

class Home extends Component {
    state = {
        albums: []
    }
    componentDidMount(){
        actions.getAlbums().then((item) => this.setState({
            albums: item
        }));
    }
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ? albums.map((item, index) => (
            <Card item={item} index={index} />
        )) 
        : null;
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then((item) => this.setState({
            albums: item
        }));
    }
    render() {
      return (
          <div>
            <Header />
            <div className="container">
                <div className="row mt-4 col-md-12 max-auto">
                <Search searchAlbums={this.searchAlbums} />
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 max-auto">
                        {this.renderAlbums()}
                    </div>
                </div>
            </div>
            <Player />
          </div>
      )
    }
}

export default Home;