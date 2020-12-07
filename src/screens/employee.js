import React from 'react';
// import { Link,Redirect, BrowserRouter as Router } from 'react-router-dom';
import '../assets/css/style.css';
import Images from '../images';
import Side from './sidebar';
import Nav from './nav';
var email,empImage,empName;
class Employee extends React.Component {
	constructor(props)
	{    super(props);
		this.state = {
	      		today:new Date()
			}
	}
   componentDidMount(){

		console.log("EMAIL VIA LOCAL SORAGE"+JSON.stringify((localStorage.getItem("Email"))));
		
		console.log(email)
			window.history.pushState(null, null, window.location.href);
			window.onpopstate = function(event) {
			  window.history.go(1);
			 
			  }
			};

		// this.documentData = JSON.parse(localStorage.getItem('Email'));

	
    render() {

		empImage=localStorage.getItem("EmployeeImage");
		empName=localStorage.getItem("EmployeeName");
	    email= localStorage.getItem("Email");
		console.log("EMAIL IN RENDER==", email)
    return (
        // <!-- Main Wrapper -->
        <div >
		{/* <!-- Header --> */}
           <Nav/>
			{/* <!-- /Header --> */}
			
			{/* <!-- Sidebar --> */}
						<Side/>
			{/* <!-- /Sidebar -->
			
			<!-- Page Wrapper --> */}
            <div className="page-wrapper">
			
				{/* <!-- Page Content --> */}
                <div className="content container-fluid bg-light">
					<div className="row">
						<div className="col-md-12 ">
							<div className="welcome-box shadow-sm border rounded">
								<div className="welcome-img">
									 <img  src={"http://34.231.95.57:4142/"+empImage} width="30px" height="70px"/>
								</div>
								<div className="welcome-det">						
		<h3 className="mt-3">{"Welcome "+empName}</h3>
									{/* <p>Monday, 20 May 2019</p> */}
									
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-8 col-md-8">
							<section className="dash-section">
								<h1 className="dash-sec-title">Today</h1>
								<div className="dash-sec-content">
									<div className="dash-info-list">
										<a href="#" className="dash-card text-danger shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-hourglass-o"></i>
												</div>
												<div className="dash-card-content">
													<p>A Session at 12pm</p>
												</div>
												<div className="dash-card-avatars">
													<div className="e-avatar"><img src={Images.ava9} alt=""/></div>
												</div>
											</div>
										</a>
									</div>

									<div className="dash-info-list">
										<a href="#" className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-suitcase"></i>
												</div>
												<div className="dash-card-content ">
													<p className="text-decoration-none">You are away today</p>
												</div>
												<div className="dash-card-avatars">
													<div className="e-avatar"><img src={Images.ava2} alt=""/></div>
												</div>
											</div>
										</a>
									</div>

									<div className="dash-info-list">
										<a href="#" className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-building-o"></i>
												</div>
												<div className="dash-card-content">
													<p >You are working from home today</p>
												</div>
												<div className="dash-card-avatars">
													<div className="e-avatar"><img src={Images.ava2} alt=""/></div>
												</div>
											</div>
										</a>
									</div>

								</div>
							</section>

							<section className="dash-section">
								<h1 className="dash-sec-title">Tomorrow</h1>
								<div className="dash-sec-content">
									<div className="dash-info-list">
										<div className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-suitcase"></i>
												</div>
												<div className="dash-card-content">
													<p>2 people will be away tomorrow</p>
												</div>
												<div className="dash-card-avatars">
													<a href="#" className="e-avatar"><img src={Images.ava4} alt=""/></a>
													<a href="#" className="e-avatar"><img src={Images.ava8} alt=""/></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							<section className="dash-section">
								<h1 className="dash-sec-title">Next seven days</h1>
								<div className="dash-sec-content">
									<div className="dash-info-list">
										<div className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-suitcase"></i>
												</div>
												<div className="dash-card-content">
													<p>2 people are going to be away</p>
												</div>
												<div className="dash-card-avatars">
													<a href="#" className="e-avatar"><img src={Images.ava5} alt=""/></a>
													<a href="#" className="e-avatar"><img src={Images.ava7} alt=""/></a>
												</div>
											</div>
										</div>
									</div>
									<div className="dash-info-list">
										<div className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-user-plus"></i>
												</div>
												<div className="dash-card-content">
													<p>Your first day is going to be  on Thursday</p>
												</div>
												<div className="dash-card-avatars">
													<div className="e-avatar"><img src={Images.ava2} alt=""/></div>
												</div>
											</div>
										</div>
									</div>
									<div className="dash-info-list">
										<a href="" className="dash-card shadow-sm border rounded text-decoration-none">
											<div className="dash-card-container">
												<div className="dash-card-icon">
													<i className="fa fa-calendar"></i>
												</div>
												<div className="dash-card-content">
													<p>It's Spring Bank Holiday  on Monday</p>
												</div>
											</div>
										</a>
									</div>
								</div>
							</section>
						</div>

						<div className="col-lg-4 col-md-4">
							<div className="dash-sidebar">
								<section>
									<h5 className="dash-title text-bold">Projects</h5>
									<div className="card">
										<div className="card-body bg-white border rounded shadow-sm">
											<div className="time-list">
												<div className="dash-stats-list">
													<h4>71</h4>
													<p>Total Tasks</p>
												</div>
												<div className="dash-stats-list">
													<h4>14</h4>
													<p>Pending Tasks</p>
												</div>
											</div>
											<div className="request-btn">
												<div className="dash-stats-list">
													<h4>2</h4>
													<p>Total Projects</p>
												</div>
											</div>
										</div>
									</div>
								</section>
								<section>
									<h5 className="dash-title text-bold">Your Leave</h5>
									<div className="card">
										<div className="card-body bg-white border rounded shadow-sm">
											<div className="time-list">
												<div className="dash-stats-list">
													<h4>4.5</h4>
													<p>Leave Taken</p>
												</div>
												<div className="dash-stats-list">
													<h4>12</h4>
													<p>Remaining</p>
												</div>
											</div>
											<div className="request-btn">
												<a className="btn btn-secondary text-white" href="#">Apply Leave</a>
											</div>
										</div>
									</div>
								</section>
								<section>
									<h5 className="dash-title text-bold">Your time off allowance</h5>
									<div className="card">
										<div className="card-body bg-white border rounded shadow-sm">
											<div className="time-list">
												<div className="dash-stats-list">
													<h4>5.0 Hours</h4>
													<p>Approved</p>
												</div>
												<div className="dash-stats-list">
													<h4>15 Hours</h4>
													<p>Remaining</p>
												</div>
											</div>
											<div className="request-btn">
												<a className="btn btn-secondary text-white shadow-sm" href="#">Apply Time Off</a>
											</div>
										</div>
									</div>
								</section>
								<section>
									<h5 className="dash-title text-bold">Upcoming Holiday</h5>
									<div className="card">
										<div className="card-body text-center bg-white border rounded shadow-sm">
											<h4 className="holiday-title mb-0">Mon 20 May 2019 - Ramzan</h4>
										</div>
									</div>
								</section>
							</div>
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
export default Employee;