import React from 'react';
import Images from '../images';
import Toggle from '../screens/toggle';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
var empImage;
class Nav extends React.Component {
    render() {
		empImage=localStorage.getItem("EmployeeImage");
    return (
		<div className="header">
			
		{/* <!-- Logo --> */}
		<div className="header-left">
		
			<a href="index.html" className="logo">
			<i id="iconLogo" class="fa fa-cog fa-3x mt-2" aria-hidden="true"></i>

				{/* <img src={Images.logo1} width="150" height="40" alt=""/> */}
			</a>
		</div>
		{/* <!-- /Logo --> */}
		<a id="mobile_btn" className="mobile_btn" ><i className="fa fa-bars"></i></a>
		<div className="page-title-box className">
			<h3 >Integrated Monitoring HRMS</h3>
		</div>
		{/* <!-- Header Menu --> */}
		<ul className="nav user-menu">
	
			{/* <!-- Notifications --> */}
			<li className="nav-item dropdown">
				
				<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
					<i className="fa fa-bell-o"></i> <span className="badge badge-pill">3</span>
				</a>
				<div className="dropdown-menu notifications">
					<div className="topnav-dropdown-header">
						<span className="notification-title">Notifications</span>
						<a className="clear-noti"> Clear All </a>
					</div>
					<div className="noti-content">
						<ul className="notification-list">
							<li className="notification-message">
								<a href="activities.html">
									<div className="media">
										<span className="avatar">
											<img alt="" src={Images.ava2}/>
										</span>
										<div className="media-body">
											<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
											<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
										</div>
									</div>
								</a>
							</li>
							<li className="notification-message">
								<a href="activities.html">
									<div className="media">
										<span className="avatar">
											<img alt="" src={Images.ava3}/>
										</span>
										<div className="media-body">
											<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
											<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
										</div>
									</div>
								</a>
							</li>
							<li className="notification-message">
								<a href="activities.html">
									<div className="media">
										<span className="avatar">
											<img alt="" src={Images.ava6}/>
										</span>
										<div className="media-body">
											<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
											<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
										</div>
									</div>
								</a>
							</li>
							<li className="notification-message">
								<a href="activities.html">
									<div className="media">
										<span className="avatar">
											<img alt="" src={Images.ava17}/>
										</span>
										<div className="media-body">
											<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
											<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
										</div>
									</div>
								</a>
							</li>
							<li className="notification-message">
								<a href="activities.html">
									<div className="media">
										<span className="avatar">
											<img alt="" src={Images.ava13}/>
										</span>
										<div className="media-body">
											<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
											<p className="noti-time"><span className="notification-time">2 days ago</span></p>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className="topnav-dropdown-footer">
					<Link to="/notification">View all Notifications</Link>
						{/* <a href="activities.html"></a> */}
					</div>
				</div>
			</li>
			
			<li className="nav-item dropdown has-arrow main-drop">
			<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<span className="user-img"><img src={"http://34.231.95.57:4142/"+empImage} height="32" width="42" />
							<span className="status online"></span>
							</span>
						<span className="ml-2">Employee</span>
					</a>
				<div className="dropdown-menu">
				 <Link className="dropdown-item" to="/profile">My profile</Link>
				 <Link className="dropdown-item" to="/settings">Settings</Link>
					<Link className="dropdown-item" to="/">Logout</Link>
					{/* <a className="dropdown-item" href="login.html">Logout</a> */}
				</div>
			</li>
		</ul>
		{/* <!-- /Header Menu --> */}
		
		{/* <!-- Mobile Menu --> */}
		<div className="dropdown mobile-user-menu">
						<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
						<div className="dropdown-menu dropdown-menu-right">
							<Link className="dropdown-item" to="/profile">My Profile</Link>
							<Link className="dropdown-item" to="/settings">Settings</Link>
							<Link className="dropdown-item" to="/">Logout</Link>
						</div>
					</div>
		{/* <!-- /Mobile Menu --> */}
		
	</div>
    );
    }
}
export default Nav;