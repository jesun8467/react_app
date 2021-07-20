import logo from './logo.svg';
import './App.css';
// import './App2.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core'

const theme = unstable_createMuiStrictModeTheme();

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar/>
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
							Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
							>
							Learn React
							</a>
						</header>
					</div>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
