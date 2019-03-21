import React, {Component} from 'react'
import './card.css'

class Card extends Component {
    render() {
        return(
            <div key={this.props.index} className="containerCard">
                            <div className="center">
                                <div className="nav">
                                <a href="#" className="side-menu-trigger"><i className="fa fa-bars"></i></a>
                                </div>
                                <div className="cover">
                                    <div className="jcarousel">
                                    <ul>
                                        <li>
                                            <img src={this.props.item.album.cover_medium} alt="" />
                                        </li>
                                        <li>
                                            <img src={this.props.item.album.cover_medium} alt="" />
                                        </li>
                                        <li>
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/bmth-tts.jpg" alt="" />
                                        </li>
                                    </ul>
                                    </div>
                                    
                                </div>
                                <ul className="jcarousel-pagination"></ul>
                                <div className="info">
                                    <div className="name">
                                        <h3 className="song"> <a href="#">{this.props.item.title_short}</a></h3>
                                        <p className="artist">{this.props.item.artist.name}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ backgroundImage: 'url(' +this.props.item.album.cover_medium + ')' }} className="overlay-image the-nights active"></div>
                            <div className="overlay-image dont-look-down"></div>
                            <div className="overlay-image avalanche"></div>
                            <div className="overlay"></div>
            </div>  
        )
    }
}

export default Card;