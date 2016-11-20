import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './App';
import BlogPage from './pages/BlogPage'
import './index.css';


ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<Route path="/blog" component={ BlogPage } />
		</Route>
	</Router>,
	document.getElementById('root')
)