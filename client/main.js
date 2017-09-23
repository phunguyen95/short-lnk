
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration'
import {routes,onAuthChange} from '../imports/routes/routes';
import {Session} from 'meteor/session';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(()=>{
  const link=Links.find().fetch();
  console.log(link);
});

Meteor.startup(() => {
	Session.set('showVisible',true);
  ReactDOM.render(routes, document.getElementById('app'));
});
