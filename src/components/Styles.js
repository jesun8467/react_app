// import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export const getStyles = makeStyles((theme) => ({
	sidebar:{
		backgroundColor: "#373B53",
		width: "8vmin",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		position: "fixed",
	},

	sidebarText:{
		display: "flex",
		justifyContent: "start",
		alignItems: "center",
		width: "100%",
		height: "10vh",
		listStyle: "none",
	}
}))
