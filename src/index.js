import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search'
import _ from 'lodash'
import Searchbar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'

const api_key='AIzaSyCyhUptlFSzLDkI8sevJrFZ-JvQ_6v6Mmo';


class App extends Component {
	constructor(props){
		super(props)
		this.state={videos:[],selectedVideo:null};
		this.videoSearch("surfboard")
	}

videoSearch(term){
	YTsearch({key:api_key,  term:term},(videos)=>{
			// console.log(data)
		this.setState({videos:videos,selectedVideo:videos[0]});
	})
}
	render(){
		console.log(this.state.videos);
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
		return(
		<div>
		<Searchbar onSearchTermChange={videoSearch}/>
		<VideoDetail videos={this.state.selectedVideo}/>
		<VideoList 
		onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
		videos={this.state.videos}/>
		</div>
		)
	}
}

 ReactDom.render(<App />,document.querySelector('.container'));