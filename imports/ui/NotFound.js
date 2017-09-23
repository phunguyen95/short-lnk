import React from 'react';
import {Link} from 'react-router';
export default  ()=>{
	return(
		<div className="boxed-view">
			<div className="boxed-view__box">
				<p>We're unable to find that page</p>
				<Link className="button button--link" to="/">Head Home</Link>
			</div>
		</div>
		)
}