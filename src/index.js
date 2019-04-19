import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search'

import Searchbar from './components/search_bar.js'
import VideoList from './components/video_list.js'

const api_key='AIzaSyCyhUptlFSzLDkI8sevJrFZ-JvQ_6v6Mmo';


class App extends Component {
	constructor(props){
		super(props)
		this.state={videos:[]};
		YTsearch({key:api_key,  term:'surfboard'},(videos)=>{
			// console.log(data)
			this.setState({videos});
		})
	}

	render(){
		console.log(this.state.videos);
		return(
		<div>
		<Searchbar />
		<VideoList videos={this.state.videos}/>
		</div>
		)
	}
}

 ReactDom.render(<App />,document.querySelector('.container'));