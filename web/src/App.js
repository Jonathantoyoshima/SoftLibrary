import { ThemeProvider } from 'styled-components';
import { theme, General } from 'Styles';
import Login from 'Pages/login';
import Library from 'Pages/library';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<General>
				<Router basename={"/SoftLibrary"}>
					<Switch>
						<Route path='/library' component={Library} />
						<Route path='/' component={Login} />
					</Switch>
				</Router>
			</General>
		</ThemeProvider>
	);
};

export default App;
