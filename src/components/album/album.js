import React, {Component} from 'react';
import * as actions from '../action/index';
import Header from '../header/header';
import AudioPlayer from 'react-h5-audio-player';
import './album.css'

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
    loadTracks = () => {
      const {tracks} = this.state;
      return tracks && tracks.length ? tracks.map((track, index) => (
        <div key={index} className="row">
        <div className="col-md-3">
          <h5>{track.title}</h5>
        </div>
        <div className="col-md-9">
          <AudioPlayer
            preload="auto"
            src={track.preview}
            onPlay={e => console.log("onPlay")}
            onAbort={ev => console.log("onAbort")}
            onCanPlay={evt => console.log("onCanPlay ")}
          />
        </div>
        </div>
      ))
      : null;
    }

    

    render() {
        console.log(this.state.tracks);
      return (
        <div>
          <Header />
          <div className="container">
              <div className="row mt-4">
                <div className="col-md-12 max-auto">
                  <div className="row">
                    <div className="col-md8 albuTitle">
                      <h1>{this.state.album.title} - {this.state.artist.name}</h1>
                    </div>
                    <div className="albuCover" style={{ backgroundImage: 'url(' + this.state.album.cover_medium + ')' }}>
                    <div className="overlay"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 max-auto">
                    {this.loadTracks()}
                </div>
              </div>
          </div>
          
        </div>
      )
    }
}

export default Album;