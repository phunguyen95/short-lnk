import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';
export default class LinksListFilter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showVisible:false
		
		}
	}
	componentDidMount(){
		this.tracker=Tracker.autorun(()=>{ //watch for a change to showVisible
			const showVisible=Session.get('showVisible')//get value of session
			this.setState({
				showVisible:Session.get('showVisible')
			})
		})
	}
	componentWillUnmount(){
		this.tracker.stop();
	}
	render(){
			return(
			<div>
				<label className="checkbox">
				<input className="checkbox__box" type="checkbox" checked={!this.state.showVisible} onChange={(e)=>{
					Session.set('showVisible',!e.target.checked	)//key,value
				}}/>
				Show hidden links
				</label>
			</div>
		)
	}
}
