import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as RemixIcon from "react-icons/ri";
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const NavbarClasses = makeStyles((theme) => ({
	topbar:{
        backgroundColor:"#373B53",
        // left:"60px",
        // width:"calc(100vw - 60px)",
		width: "100vw",
        height: "60px",
        display:"flex",
        justifyContent: "start",
        alignItems:"center",
        alignContent:"space-between",
        position:"absolute",
    },
    topbarRight:{
        display:"inline-flex",
        marginLeft:"auto",
        padding:"20px",
        marginRight:"30px",
        color:"grey",
        alignItems:'center',
    },
    sidebar:{
        backgroundColor:"#373B53",
        width:"100px",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        position:"fixed",
        top:"0px",
        "& ul":{
            width:"54px",
            display:"flex",
            flexDirection: "column",
        },
        "& ul > :last-child":{
            marginTop:"auto",
        }
    },
    navTextTop:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        width:"70px",
        listStyle: "none",
        height:"100%",
        "& a":{
            textDecoration:"none",
            color: "#f5f5f5",
            fontSize:"35px",
            width:"100%",
            height:"54px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"4px",
        },
        "& a:hover":{
            backgroundColor:"#ffffff",
            color:"#713BDB",
        },
    },
    navText:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        width:"100%",
        listStyle: "none",
        height:"70px",
        "& a":{
            textDecoration:"none",
            color: "#f5f5f5",
            fontSize:"35px",
            width:"100%",
            height:"54px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"4px",
        },
        "& a:hover":{
            backgroundColor:"#ffffff",
            color:"#713BDB",
        },
    },
}));

const LinkMap = [
	{
		title:'Home',
		path: '/',
		icon: <RemixIcon.RiHome4Fill/>,
	},
	{
		title:'Twitter',
		path: '#',
		icon: <RemixIcon.RiTwitterFill/>,
	},
	{
		title:'LineChart',
		path: '#',
		icon: <RemixIcon.RiLineChartLine/>,
	},
];
const LastLink = [
	{
		title:'Question',
		path: '#',
		icon: <RemixIcon.RiQuestionFill/>,
	},
]

function Navbar() {
	const NavLocation = 'side';
	const classes = NavbarClasses();
	const mapItems = Object.assign([], LinkMap);
	const LastItem = Object.assign([], LastLink);
	if (NavLocation === 'top'){
		return (
			<div className={classes.topbar}>
				{mapItems.map((item, index) => {
					console.log(item, index);
					return (
						<Tooltip title={item.title} key={index}>
							<li className={classes.navTextTop}>
								<Link to={item.path}>{item.icon}</Link>
							</li>
						</Tooltip>
					);
				})}
				<div className={classes.topbarRight}>
					{LastItem.map((item, index) => {
						console.log(item, index);
						return (
							<Tooltip title={item.title} key={index}>
								<li className={classes.navTextTop}>
									<Link to={item.path}>{item.icon}</Link>
								</li>
							</Tooltip>
						);
					})}
				</div>
			</div>
		)
	} else {
		return(
			<>
				<nav className={classes.sidebar}>
					<ul>
						{mapItems.map((item, index) => {
							console.log(item, index);
							return (
								<Tooltip title={item.title} key={index}>
									<li className={classes.navText}>
										<Link to={item.path}>{item.icon}</Link>
									</li>
								</Tooltip>
							);
						})}
						{LastItem.map((item, index) => {
							console.log(item, index);
							return (
								<Tooltip title={item.title} key={index}>
									<li className={classes.navText}>
										<Link to={item.path}>{item.icon}</Link>
									</li>
								</Tooltip>
							);
						})}
					</ul>
				</nav>
			</>
		)
	}
}
export default Navbar