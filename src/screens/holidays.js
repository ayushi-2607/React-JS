import React from 'react';
import Side from './sidebar';
import '../assets/js/app.js';
import Nav from './nav';
import Moment from 'react-moment';
import '../screens/holidays.css';
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage;
var empName,empAddress,empPhone;
class Holidays extends React.Component {
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
			
				{/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Holidays 2020</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><Link class="text-decoration-none" to="/employee">Dashboard</Link></li>
									<li class="breadcrumb-item active">Holidays</li>
								</ul>
							</div>
							{/* <div class="col-auto float-right ml-auto">
								<a id="addbtn" class="btn add-btn bg-secondary" data-toggle="modal" data-target="#add_holiday"><i class="fa fa-plus"></i> Add Holiday</a>
							</div> */}
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 ">
									<thead >
										<tr id="tableRow" class="text-white">
											<th>#</th>
											<th>Title </th>
											<th>Holiday Date</th>
											<th>Day</th>
											
										</tr>
									</thead>
									<tbody>
										<tr class="holiday-completed">
											<td>1</td>
											<td>New Year</td>
											<td>1 Jan 2020</td>
											<td>Sunday</td>
									
										</tr>
										<tr class="holiday-completed">
											<td>2</td>
											<td>Good Friday</td>
											<td>14 Apr 2020</td>
											<td>Friday</td>
									
										</tr>
										<tr class="holiday-upcoming">
											<td>3</td>
											<td>May Day</td>
											<td>1 May 2020</td>
											<td>Monday</td>
									
										</tr>
										<tr class="holiday-upcoming">
											<td>4</td>
											<td>Memorial Day</td>
											<td>28 May 2020</td>
											<td>Monday</td>
									
										</tr>
										<tr class="holiday-upcoming">
											<td>5</td>
											<td>Ramzon</td>
											<td>26 Jun 2020</td>
											<td>Monday</td>
									
										</tr>
										<tr class="holiday-upcoming">
											<td>6</td>
											<td>Bakrid</td>
											<td>2 Sep 2020</td>
											<td>Saturday</td>
										</tr>
										<tr class="holiday-upcoming">
											<td>7</td>
											<td>Deepavali</td>
											<td>18 Oct 2020</td>
											<td>Wednesday</td>
									
										</tr>
										<tr class="holiday-upcoming">
											<td>8</td>
											<td>Christmas</td>
											<td>25 Dec 2020</td>
											<td>Monday</td>
									
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
                </div>
				{/* <!-- /Page Content --> */}
				
				{/* <!-- Add Holiday Modal --> */}
				
				{/* <!-- /Add Holiday Modal --> */}
				
				{/* <!-- Edit Holiday Modal --> */}
				<div class="modal custom-modal fade" id="edit_holiday" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Holiday</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label>Holiday Name <span class="text-danger">*</span></label>
										<input class="form-control" value="New Year" type="text"/>
									</div>
									<div class="form-group">
										<label>Holiday Date <span class="text-danger">*</span></label>
										<div class="cal-icon"><input class="form-control datetimepicker" value="01-01-2019" type="text"/></div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Edit Holiday Modal --> */}

				{/* <!-- Delete Holiday Modal --> */}
				<div class="modal custom-modal fade" id="delete_holiday" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete Holiday</h3>
									<p>Are you sure want to delete?</p>
								</div>
								<div class="modal-btn delete-action">
									<div class="row">
										<div class="col-6">
											<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
										</div>
										<div class="col-6">
											<a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Delete Holiday Modal --> */}
				
            </div>
			{/* <!-- /Page Wrapper --> */}
			
        </div>
		
		
        );
    }
}
export default Holidays;