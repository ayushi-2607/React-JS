import React from 'react';
import Side from './sidebar';
import Nav from './nav';
import '../assets/js/app.js';
import Moment from 'react-moment';
import '../screens/attendance.css';
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage;
var empName,empAddress,empPhone;
class Attendance extends React.Component {
    render(){
        empImage=localStorage.getItem("EmployeeImage");
        return(
            <div >
		
			{/* <!-- Header --> */}
           <Nav/>
			{/* <!-- /Header --> */}
			
			{/* <!-- Sidebar --> */}
            <Side/>
			{/* <!-- /Sidebar --> */}
			
			{/* <!-- Page Wrapper --> */}
            <div class="page-wrapper">
                <div class="content container-fluid bg-light">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Attendance</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><Link class="text-decoration-none" to="/employee">Dashboard</Link></li>
									<li class="breadcrumb-item active">Attendance</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-md-4">
							<div class="card punch-status bg-white border rounded shadow-sm ">
								<div class="card-body font-weight-bold">
									<h5 class="card-title">Timesheet <small class="text-muted">25 April 2020</small></h5>
									<div class="punch-det">
										<h6>Punch In at</h6>
										<p>Wed, 25 April 10.00 AM</p>
									</div>
									<div class="punch-info">
										<div class="punch-hours">
											<span>3.45 hrs</span>
										</div>
									</div>
									<div class="punch-btn-section col-md-8 ml-2">
										<button type="button" class="btn btn-secondary punch-btn text-white">Punch Out</button>
									</div>
									<div class="statistics">
										<div class="row">
											<div class="col-md-6 col-6 text-center ">
												<div class="stats-box shadow-sm border rounded">
													<p>Break</p>
													<h6>1.21 hrs</h6>
												</div>
											</div>
											<div class="col-md-6 col-6 text-center">
												<div class="stats-box shadow-sm border rounded">
													<p>Overtime</p>
													<h6>3 hrs</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card att-statistics bg-white border rounded shadow-sm ">
								<div class="card-body font-weight-bold">
									<h5 class="card-title">Statistics</h5>
									<div class="stats-list">
                                    
										<div class="stats-info shadow-sm">
											<p>Today <strong>3.45 <small>/ 8 hrs</small></strong></p>
									        <div class="progress">
    <div id="progressBar" class="progress-bar bg-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" >
      
    </div>
  </div>
										</div>
										<div class="stats-info shadow-sm">
											<p>This Week <strong>28 <small>/ 40 hrs</small></strong></p>
											<div class="progress">
												<div id="progressBar2" class="progress-bar bg-warning" role="progressbar" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
										<div class="stats-info shadow-sm">
											<p>This Month <strong>90 <small>/ 160 hrs</small></strong></p>
											<div class="progress">
												<div id="progressBar" class="progress-bar bg-success" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
										<div class="stats-info shadow-sm">
											<p>Remaining <strong>90 <small>/ 160 hrs</small></strong></p>
											<div class="progress">
												<div id="progressBar3" class="progress-bar bg-danger" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
										<div class="stats-info  shadow-sm">
											<p>Overtime <strong>4</strong></p>
											<div class="progress">
												<div id="progressBar" class="progress-bar bg-info" role="progressbar"  aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card recent-activity bg-white border rounded shadow-sm">
								<div class="card-body font-weight-bold">
									<h5 class="card-title">Today's Activity</h5>
									<ul class="res-activity-list">
										<li>
											<p class="mb-0">Punch In at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												10.00 AM.
											</p>
										</li>
										<li>
											<p class="mb-0">Punch Out at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												11.00 AM.
											</p>
										</li>
										<li>
											<p class="mb-0">Punch In at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												11.15 AM.
											</p>
										</li>
										<li>
											<p class="mb-0">Punch Out at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												1.30 PM.
											</p>
										</li>
										<li>
											<p class="mb-0">Punch In at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												2.00 PM.
											</p>
										</li>
										<li>
											<p class="mb-0">Punch Out at</p>
											<p class="res-activity-time">
												<i class="fa fa-clock-o"></i>
												7.30 PM.
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Search Filter --> */}
					<div class="row filter-row">
						<div class="col-sm-3">  
							<div class="form-group form-focus">
								<div class="cal-icon">
									<input type="text" class="form-control floating datetimepicker"/>
								</div>
								<label class="focus-label">Date</label>
							</div>
						</div>
						<div class="col-sm-3"> 
							<div class="form-group form-focus select-focus">
								<select id="selectAttendance" class="select floating"> 
									<option>-</option>
									<option>Jan</option>
									<option>Feb</option>
									<option>Mar</option>
									<option>Apr</option>
									<option>May</option>
									<option>Jun</option>
									<option>Jul</option>
									<option>Aug</option>
									<option>Sep</option>
									<option>Oct</option>
									<option>Nov</option>
									<option>Dec</option>
								</select>
								<label class="focus-label">Select Month</label>
							</div>
						</div>
						<div class="col-sm-3"> 
							<div class="form-group form-focus select-focus">
								<select id="selectAttendance" class="select floating"> 
									<option>-</option>
									<option>2019</option>
									<option>2018</option>
									<option>2017</option>
									<option>2016</option>
									<option>2015</option>
								</select>
								<label class="focus-label">Select Year</label>
							</div>
						</div>
						<div class="col-sm-3">  
							<a href="#" class="btn btn-success text-white shadow-sm btn-block"> Search </a>  
						</div>     
                    </div>
					{/* <!-- /Search Filter --> */}
					
                    <div class="row">
                        <div class="col-lg-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0">
									<thead>
										<tr id="tableRow" class="text-white">
											<th>#</th>
											<th>Date </th>
											<th>Punch In</th>
											<th>Punch Out</th>
											<th>Production</th>
											<th>Break</th>
											<th>Overtime</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>24 April 2020</td>
											<td>10 AM</td>
											<td>7 PM</td>
											<td>9 hrs</td>
											<td>1 hrs</td>
											<td>0</td>
										</tr>
										<tr>
											<td>2</td>
											<td>25 April 2020</td>
											<td>10 AM</td>
											<td>7 PM</td>
											<td>9 hrs</td>
											<td>1 hrs</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
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
export default Attendance;