import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Links} from '../api/links';
import {Meteor} from 'meteor/meteor';

import {Session} from 'meteor/session';
import LinksListItem from './LinksListItem';
import FlipMove from 'react-flip-move';
export default class LinksList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			links:[]
		}
	}
	componentDidMount() {
    console.log('componentsDidMount LinksList');
    this.linksTracker = Tracker.autorun(() => {
    	Meteor.subscribe('links');
      const links = Links.find({
      	visible:Session.get('showVisible')
      }).fetch();
 
      this.setState({
        links
      });
    });
  }


	renderLinkListItem(){
		if(this.state.links.length===0){
				return(
					<div className="item">
						<p className="item__status-message"> No Links Found</p>
					</div>
					)
			}
		return this.state.links.map((item)=>{
			const shortUrl=Meteor.absoluteUrl(item._id);
			return <LinksListItem key={item._id} {...item} shortUrl={shortUrl}/> //take every key value pair on  the link object and add them on as props. The key is going to be the props and the key value will be the value for that props
		})
	}	
	componentWillUnmount(){
		console.log('component will unmount linklist')
		this.linksTracker.stop();//stop tracker running
	}
	render(){
		return(
			<div>
				<FlipMove maintainContainerHeight={true}>
				{this.renderLinkListItem()}
				</FlipMove>
			</div>
			)

	}
}