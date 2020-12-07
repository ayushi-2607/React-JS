import React from 'react';
import '../assets/js/app.js';
import Moment from 'react-moment';
import Images from '../images';
import '../screens/changePassword.css';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage;
var empName,empAddress,empPhone,upper;
class ChangePassword extends React.Component {
	constructor(props)
	{    super(props);
		this.state = {
			flag:false,
			valid:false,
			request:false,
			correct:false,
			email:'',
			newPassword:'',
			password:''
		}
	this.updatePassword = this.updatePassword.bind(this);
	this.changeApi=this.changeApi.bind(this);
	}
	changeApi(){
		console.log("inside API email==="+this.state.email)
		console.log("inside API old password==="+this.state.password)
		console.log("inside API new password==="+this.state.newPassword)
		fetch('http://34.231.95.57:4142/employee/requestResetPwd', {
			
			method: 'POST', 
			body: JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				newPassword:this.state.newPassword,
			}),
			headers: {
				"Content-type": "application/json"
			}
		}).then(responseData => responseData.json())
		.then(responseData => {
			console.log("response data +++  "+JSON.stringify(responseData.success))
			if(responseData.success==true){
				if(this.state.newPassword!=this.state.confirmpassword)
		{
			this.setState({valid:true});
		}
		else
		{
			this.setState({correct:true});
		}
				
			}
			else
			{
				this.setState({request:true})

			}

	})
}
	
	handleNewPassword= (e) => {
		e.preventDefault();
		this.setState({newPassword : e.target.value});
		console.log("handle new password==="+this.state.newPassword)
		// this.changeApi();
	}
	handleEmail= (e) => {
		e.preventDefault();
		this.setState({email : e.target.value});
		console.log("handle Email==="+this.state.email)
	}
	handleOldPassword= (e) => {
		// console.log("handle old password==="+e.target.value)
		e.preventDefault();
		this.setState({password : e.target.value});
		console.log("handle old password==="+this.state.password)
	}
	updatePassword(){
		
		console.log("inside update1"+this.state.newPassword);
		console.log("inside update2"+this.state.confirmpassword);
		
		this.changeApi();
	
	}
		
	   handleConfirmPassword= (e) => {
		e.preventDefault();
		if(this.state.newPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))
		{this.setState({confirmpassword : e.target.value,});
			console.log("valid")
		}
		else
		{  
			this.setState({flag:true});
		}
	     console.log("confirm password"+this.state.confirmpassword)
	   }

	
    render(){
        empImage=localStorage.getItem("EmployeeImage");
        return(
            <div >
			{/* <!-- Header --> */}
            <div class="header">
			
				{/* <!-- Logo --> */}
                <div class="header-left">
                    <a href="index.html" class="logo">
                    <img src={Images.logo1} width="150" height="40" alt="" />
					</a>
                </div>
				{/* <!-- /Logo --> */}
				
				{/* <a id="toggle_btn" href="javascript:void(0);">
					<span class="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a> */}
				
				{/* <!-- Header Title --> */}
                <div class="page-title-box">
					<h3>bluCursor Infotech Pvt Ltd</h3>
                </div>
				{/* <!-- /Header Title --> */}
				
				<a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
				
				{/* <!-- Header Menu --> */}
				<ul class="nav user-menu">
				
					{/* <!-- Search --> */}
					
					{/* <!-- /Search --> */}
				
					{/* <!-- Flag --> */}
					
					{/* <!-- /Flag --> */}
				
					{/* <!-- Notifications --> */}
					<li class="nav-item dropdown">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<i class="fa fa-bell-o"></i> <span class="badge badge-pill">3</span>
						</a>
						<div class="dropdown-menu notifications">
							<div class="topnav-dropdown-header">
								<span class="notification-title">Notifications</span>
								<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
							</div>
							<div class="noti-content">
								<ul class="notification-list">
									<li class="notification-message">
										<a href="activities.html">
											<div class="media">
												<span class="avatar">
													<img alt="" src="assets/img/profiles/avatar-02.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
													<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="activities.html">
											<div class="media">
												<span class="avatar">
													<img alt="" src="assets/img/profiles/avatar-03.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
													<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="activities.html">
											<div class="media">
												<span class="avatar">
													<img alt="" src="assets/img/profiles/avatar-06.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
													<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="activities.html">
											<div class="media">
												<span class="avatar">
													<img alt="" src="assets/img/profiles/avatar-17.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
													<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="activities.html">
											<div class="media">
												<span class="avatar">
													<img alt="" src="assets/img/profiles/avatar-13.jpg"/>
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
													<p class="noti-time"><span class="notification-time">2 days ago</span></p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="topnav-dropdown-footer">
							<Link to="/notification">View all Notifications</Link>
							</div>
						</div>
					</li>
					{/* <!-- /Notifications --> */}
					
					{/* <!-- Message Notifications --> */}
					
					{/* <!-- /Message Notifications --> */}

					<li class="nav-item dropdown has-arrow main-drop">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img src={"http://34.231.95.57:4142/"+empImage} height="32" width="42" />
							<span class="status online"></span></span>
							<span>Employee</span>
						</a>
						<div class="dropdown-menu">
                        <Link class="dropdown-item" to="/profile">My profile</Link>
						 <Link class="dropdown-item" to="/settings">Settings</Link>
							<Link className="dropdown-item" to="/">Logout</Link>
						</div>
					</li>
				</ul>
				{/* <!-- /Header Menu --> */}
				
				{/* <!-- Mobile Menu --> */}
				<div class="dropdown mobile-user-menu">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
								<div class="dropdown-menu dropdown-menu-right">
									<Link class="dropdown-item" to="/profile">My Profile</Link>
									<Link class="dropdown-item" to="/settings">Settings</Link>
									<Link class="dropdown-item" to="/">Logout</Link>
								</div>
							</div>
				{/* <!-- /Mobile Menu --> */}
				
            </div>
			{/* <!-- /Header --> */}
			
			{/* <!-- Sidebar --> */}
			<div class="sidebar" id="sidebar">
							<div class="sidebar-inner slimscroll">
								<div id="sidebar-menu" class="sidebar-menu">
									<ul>
										<li class="menu-title">
											<span>Main</span>
										</li>
										 
										<li class="submenu">
										<li><Link to="/employee"><i class="la la-dashboard mr-3"></i>Employee Dashboard</Link></li>
										</li>
										<li class="menu-title">
											<span>Employees</span>
										</li>
										<li class="submenu">
											<a href=""><i class="la la-user ml-1 mr-1"></i> <span> Employees  </span> <span class="menu-arrow"></span></a>
											<ul id="display">
											<li><Link class="ml-2" to="/leaveList">Leaves</Link></li>
											<li><Link class="ml-2" to="/holidays">Holidays</Link></li>
											<li><Link class="ml-2" to="/attendance">Attendance</Link></li>
									      </ul>
										</li>
									<li class="ml-1"><Link to="/clients"><i class="la la-users mr-3"></i>Clients</Link></li>
									</ul>
								</div>
							</div>
						</div>
			{/* <!-- Sidebar --> */}
			
			{/* <!-- Page Wrapper --> */}
            <div class="page-wrapper">
                <div class="content container-fluid">
					<div class="row">
						<div class="col-md-6 offset-md-3">
						
							{/* <!-- Page Header --> */}
							<div class="page-header">
								<div class="row">
									<div class="col-sm-12">
										<h3 class="page-title">Change Password</h3>
									</div>
								</div>
							</div>
							{/* <!-- /Page Header --> */}
							
							<form>
							<div class="form-group">
									<label><b>Email</b></label>
									<input type="email" class="form-control" placeholder="enter email"  onChange = {(e) => this.handleEmail(e)}/>
								</div>

								<div class="form-group">
									<label><b>Old password</b></label>
									<input type="password" class="form-control" placeholder='enter password' onChange = {(e) => this.handleOldPassword(e)} />
								</div>
								<div class="form-group">
									<label><b>New password</b></label>
									<input type="password" class="form-control"  placeholder='enter new password' onChange = {(e) => this.handleNewPassword(e)}/>
								</div>
								<div class="form-group">
									<label><b>Confirm password</b></label>
									<input type="password" class="form-control" placeholder='confirm password' onChange = {(e) => this.handleConfirmPassword(e)}/>
								</div>
								<div class="submit-section">
								{this.state.flag==true?<div>
									<div class="alert alert-danger alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <p id="inputValid"><i class="fa fa-exclamation-circle" aria-hidden="true"></i><b>Please enter a valid password</b></p>
  *Your password should be 8-15 characters long which should contain at least one lowercase letter, one uppercase letter, one numeric digit and one special character
  
</div>
									</div>:null}
									{this.state.valid==true?<div class="alert alert-danger alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i><b>Passwords don't match</b>.
</div>:null
}
{this.state.request==true?<div class="alert alert-danger alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i><b>Invalid credentials</b>.
</div>:null
}
{this.state.correct==true?<div class="alert alert-success alert-dismissible">
  {/* <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> */}
  <strong>Your request is sent to HR<i class="fa fa-check" aria-hidden="true"></i></strong> 
</div>:null
}
									<div id="update" class="btn btn-secondary text-white submit-btn"  onClick={this.updatePassword} >Update Password</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/* <!-- /Page Content --> */}
				
			</div>
			{/* <!-- /Page Wrapper --> */}

        </div>
        );
    }
}
export default ChangePassword;
