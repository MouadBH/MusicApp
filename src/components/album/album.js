import React, {Component} from 'react';
import * as actions from '../action/index';
import Header from '../header/header';

class Album extends Component {
    state = {
        album: '',
        artist: [],
        tracks: []
    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                artist : album.artist,
                tracks : album.tracks.data
            })
        })
    }
    render() {
        console.log(this.state);
      return (
        <div>
          <Header />
          <div className="container">
              <div className="row mt-4">
                <div className="col-md-12 max-auto">
                  <div className="row">
                    <div className="col-md4 mr-4">
                      <img src={this.state.album.cover_medium} alt="" />
                    </div>
                    <div className="col-md8">
                      <h1>{this.state.album.title} - {this.state.artist.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
      )
    }
}

export default Album;