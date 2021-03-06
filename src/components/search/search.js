import React, {Component} from 'react';

class Search extends Component {
    state = {
        term : ''
    }
    handleInputChange = (event) => {
        this.setState({term : event.target.value});
    }
    submitSearch = (event) => {
        event.preventDefault();
        let {term} = this.state;
         this.props.searchAlbums(term);
    }
    render() {
        console.log(this.state)
      return (
        <form className="form-inline col-md-12 my-2 my-lg-0 " onChange={(event) => this.submitSearch(event)}>
                <input className="form-control mr-sm-12 col-md-12" 
                    value={this.state.term}
                    onChange={(event) => this.handleInputChange(event)} 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                /> 
        </form>
      )
    }
}
export default Search;