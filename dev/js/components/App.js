import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-detail.js';

import LandingPage from '../containers/landing_page.js';

import {Tabs, Tab} from 'material-ui/Tabs';

require ('../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ()=> (
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
	 	<LandingPage/>
		
	</MuiThemeProvider>
)
export default App;