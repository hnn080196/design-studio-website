import Banner from "CommonComponent/Banner";
import Footer from "CommonComponent/Footer";
import React from "react";
import data from "./team.data.json";
const Team = (props) => {
  return (
    <>
      <Banner title='Our Team'/>
      <div className="container-fluid">
        <div className="team-wrap">
          <div className="row">
            {data.map((item, id) => (
              <div key={id} className="col-lg-2 col-md-3 col-sm-4 box__item">
                <div className="teamImg">
                  <img src={item.image} alt="" />
                  <div className="info">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="teamInfo">
                  <h3>{item.name}</h3>
                  <div className="designation">{item.job}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginBottom:'5rem'}}></div>
      <Footer/>
    </>
  );
};

export default Team;
