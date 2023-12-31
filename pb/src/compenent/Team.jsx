import React,{useState} from "react";

export const Team = (props) => {

  const [isReadmore ,setReadMore]=useState(-10)

  const showmoreHandler = (i) =>{
    if(isReadmore != -10 && isReadmore == i)
    {
       setReadMore(-10)
    }
    else
    {
      setReadMore(i)
    }
  }
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div className="thumbnail row">
                    {" "}

                    
                     {console.log(isReadmore == -10)}
                    <div className={`row ${(isReadmore == -10 ) ? 'cardHolder': 'cardHolderShowmore'}` }>
                        <div>
                          <img src={d.img} alt="..." className="team-img col-md-12 col-lg-6 col-sm-12" />
                            <div className="caption">
                              <h4>{d.name}</h4>
                              <p>{d.job}</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12">
                          { (isReadmore != i)?   <p>{ d.description.substring(0, 145)}...</p> : <p>{ d.description}</p> } 
                           <label className="button" onClick={()=>
                          {
                            showmoreHandler(i)
                          }}>
                            {(isReadmore !== -10 && isReadmore == i) ? "read less": "read more"}
                            </label>
                        </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
