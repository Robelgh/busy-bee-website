import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <h2>Our Program</h2>
          <div className="col-xs-12 col-md-6">
          <div className="about-text">
              
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
             
            </div>
          </div>
          <div className="col-xs-12 col-md-6 mt-3">
                 {" "}
                 <div className="col-lg-12 col-sm-12 col-xs-12">
               Busy Bees Addis program offers a full day of fun educational experiences. With a research based curriculum and teacher/student ratios that are nearly half those of most public/private schools, your child will gain an academic edge right from the start. 
             </div>
             <div className="col-lg-12 col-sm-12 col-xs-12">
                <p>Our educators use instructional techniques and activities that offer writing, literacy, and math as well as developmentally appropriate, hands-on techniques for teaching. Our research based instructional approach ensures active learning and participation by our students with the scaffolding needed to help them achieve independent reading. Continually evolving to meet the need of todays students our educators provide support at children’s current level of development. We take advantage of spontaneous interactions and play situations to support and extend their learning. </p>
                <p>Busy Bees Addis is Inclusive for all students. We accept students with special needs and consider their individual educational needs. Our active learning program supports and encourages students to fully engage and participate in our daly activities. </p>
             </div>
         
          </div>
        </div>
        <div className="row" style={{}}>
          <div className="col-xs-12 col-md-6">
          <h3>A typical day for a busy bee student </h3>
           
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        
                         <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              
          </div>
        
          </div>  
      </div>
    </div>
  );
};
