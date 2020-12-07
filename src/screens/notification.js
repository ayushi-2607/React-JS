import React from 'react';
import Side from './sidebar';
import Nav from './nav';
import '../assets/js/app.js';
import '../screens/notification.css';
import Moment from 'react-moment';
// import '../screens/notification.css';
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage;
var empName,empAddress,empPhone;
class Notifications extends React.Component {
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
								<h3 class="page-title">Activities</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><Link class="text-decoration-none" to="/employee">Dashboard</Link></li>
									<li class="breadcrumb-item active">Activities</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 ">
									<thead >
										<tr id="tableRow" class="text-white">
											<th>Action</th>
											<th>date</th>
											<th class="text-right">Message</th>
										</tr>
									</thead>
									<tbody>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
										<tr>
                                            <td>ABC</td>
											<td>06/02/2020</td>
											<td class="text-right">Hello Ayushi Here!</td>
                                        </tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
                </div>
				{/* <!-- /Page Content --> */}
				
				{/* <!-- Add Holiday Modal --> */}
				<div class="modal custom-modal fade" id="add_holiday" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Holiday</h5>
								<button type="button" class="close mr-1 mt-1" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label>Holiday Name <span class="text-danger">*</span></label>
										<input class="form-control" type="text"/>
									</div>
									<div class="form-group">
										<label>Holiday Date <span class="text-danger">*</span></label>
										<div class="cal-icon"><input class="form-control datetimepicker" type="text"/></div>
									</div>
									<div class="submit-section">
										<button class="btn btn-secondary text-white submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
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
export default Notifications;