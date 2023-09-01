import { Button } from "antd";
import React from "react";


export const Register = (props) => {

  const onDownloadCalenderClick = () => {
    // using Java Script method to get PDF file
    fetch('Busy Bees Addis Calendar.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Busy Bees Addis Calendar.pdf';
            alink.click();
        })
    })
}

const onDownloadRFormClick = () => {
  // using Java Script method to get PDF file
  fetch('Busy Bees School Registration Form.docx').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Busy Bees School Registration Form.docx';
          alink.click();
      })
  })
}

  return (
    <div id="register" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Register</h2>
        </div>
        <div className="row registerRequirment">
        <div  className="col-md-6">
        <ul>
              <li> <h4 className="attachmentTitle">Admission Requirements</h4> </li>
              <li>1. Child's most recent school report</li>
              <li>2. Child's passport/birth certificate</li>
              <li>3. Registration fee 300$ (non refundable)</li>
              <li>4. Child immunization record/current medical certificate</li>
              <li>5. Completed and signed registration form</li>

              <li>
              </li>
            
            </ul>
        </div>
         <div  className="col-md-5">
            <ul>
              <li><h4 className="attachmentTitle">Attachment</h4></li>
              <li>    
                <div className="attachment">
                <label className="button" onClick={onDownloadCalenderClick}>Download Calender</label>
                <label className="button" onClick={onDownloadRFormClick}>Download Registration form</label>
              </div></li>
          
            </ul>
          
           
        </div>
      </div>
    </div>
    </div>
  );
};
