import React from 'react';
import Side from './sidebar';
import '../assets/js/app.js';
import Nav from './nav';
import '../screens/compOff.css';
import Images from '../images';
import { Route,Link,Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var email,empImage;
var empName,empAddress,empPhone;
class CompOff extends React.Component {
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
            <div class="page-wrapper bg-light">
			{/* <!-- Page Content --> */}
            <div class="content container-fluid">
                {/* <!-- Page Header --> */}
                <div class="page-header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="page-title">Compensatory Off</h3>
                            <ul class="breadcrumb">
                              <li class="breadcrumb-item"><Link className="text-decoration-none" to="/employee">Dashboard</Link></li>
                              <li class="breadcrumb-item active">Compensatory Off </li>
                            </ul>
                        </div>
                         <button id="addBtn" class="btn text-white col-2" data-toggle="modal" data-target="#add_overtime"><i class="fa fa-plus float-left mt-1 ml-2"></i><b> Apply</b></button>
                    </div>
                </div>
                {/* <!-- /Page Header --> */}
                
                {/* <!-- Overtime Statistics --> */}
                <div class="card-deck">
                    {/* <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3"> */}
                    <div class="card bg-white shadow-sm ">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-ticket white fa-lg mr-2" aria-hidden="true"></i>
							Compensatory Offs</div>
	<div class="card-body">
	<center>
     <h4 class="card-title">0</h4>
    </center>
	</div>
  </div>
  <div class="card bg-white shadow-sm  ">
  <div id="headerCard" class="card-header text-white bg-warning">
  <i class="fa fa-star white fa-lg mr-2" aria-hidden="true"></i>
	Credits Available</div>
	<div class="card-body">
	<center>
     <h4 class="card-title">0</h4>
    </center>
	</div>
  </div>
  <div class="card">
  <div  class="">
  </div>
	<div class="card-body">
	<center>
     <h4 class="card-title"></h4>
    </center>
	</div>
  </div>
  <div class="card">
  <div  class="">
  </div>
	<div class="card-body">
	<center>
     <h4 class="card-title"></h4>
    </center>
	</div>
  </div>                   
                </div>
                {/* <!-- /Overtime Statistics --> */}
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table mb-0 datatable">
                                <thead>
                                    <tr id="tableRow" className="text-white">
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Day</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>23/03/2020</td>
                                        <td>Saturday</td>
                                        <td>abcd</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>23/03/2020</td>
                                        <td>Saturday</td>
                                        <td>abcd</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>23/03/2020</td>
                                        <td>Saturday</td>
                                        <td>abcd</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>23/03/2020</td>
                                        <td>Saturday</td>
                                        <td>abcd</td>
                                        <td>Approved</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Content --> */}
            
            {/* <!-- Add Overtime Modal --> */}
            <div id="add_overtime" class="modal custom-modal fade" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Apply for CompOff</h5>
                            <button type="button" class="close mt-1 mr-1" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                          <div class="form-group">
                                    <label>Date <span class="text-danger">*</span></label>
                                    <div class="cal-icon">
                                        <input class="form-control datetimepicker" type="text"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Description <span class="text-danger">*</span></label>
                                    <textarea rows="4" class="form-control"></textarea>
                                </div>
                               
                                <div class="submit-section">
                                    <button class="btn btn-secondary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Add Overtime Modal --> */}
            
            {/* <!-- Edit Overtime Modal --> */}
            <div id="edit_overtime" class="modal custom-modal fade" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Overtime</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Select Employee <span class="text-danger">*</span></label>
                                    <select class="select">
                                        <option>-</option>
                                        <option>John Doe</option>
                                        <option>Richard Miles</option>
                                        <option>John Smith</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Overtime Date <span class="text-danger">*</span></label>
                                    <div class="cal-icon">
                                        <input class="form-control datetimepicker" type="text"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Overtime Hours <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text"/>
                                </div>
                                <div class="form-group">
                                    <label>Description <span class="text-danger">*</span></label>
                                    <textarea rows="4" class="form-control"></textarea>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Edit Overtime Modal --> */}
            
            {/* <!-- Delete Overtime Modal --> */}
            <div class="modal custom-modal fade" id="delete_overtime" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="form-header">
                                <h3>Delete Overtime</h3>
                                <p>Are you sure want to Cancel this?</p>
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
            {/* <!-- /Delete Overtime Modal --> */}
            
        </div>
        
        	{/* <!-- /Page Wrapper --> */}
		</div>
		
		
        );
    }
}
export default CompOff;