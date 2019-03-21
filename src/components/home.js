import React, {Component} from 'react';
import Header from './header/header';
import Card from './card/card';
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
    render() {
      return (
            <div className="container">
                <Header />
                <div className="row mt-4">
                    <div className="col-md-12 max-auto">
                        {this.renderAlbums()}
                    </div>
                </div>
            </div>
      )
    }
}

export default Home;