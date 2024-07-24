import React from "react";
import { Container } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <section id="education">
        <div className="row py-5 mx-auto gy-5">
          <div className="col-md-6">
            <div className="d-flex flex-column gap-5 px-3 px-sm-0">
              <h2 className="fw-bold text-uppercase">Education</h2>
              <div className="row gy-3 edu_wrapper">
                <div className="edu_detail">
                  <h4>Bachelor's Degree in Physics</h4>
                  <h6>Madurai Kamaraj University</h6>
                  <p>2017-2020</p>
                </div>
                <div className="edu_detail">
                  <h4>Higher Secondary Certificate (HSC)</h4>
                  <h6>Pasumalai Higher Secondary School</h6>
                  <p>2016-2017</p>
                </div>
                <div className="edu_detail">
                  <h4>Secondary School Learing Certificate (SSLC)</h4>
                  <h6>Sourashtra Co-Ed Higher Secondary School</h6>
                  <p>2014-2015</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column gap-5 px-3 px-sm-0">
              <h2 className="fw-bold text-uppercase">Work Experience</h2>
              <div className="row gy-3 edu_wrapper">
                <div className="edu_detail">
                  <h4>Justtry Technologies</h4>
                  <h6>Front End React JS Developer</h6>
                  <p>Aug 2023  -  Jun - 2024</p>
                </div>
                <div className="edu_detail">
                  <h4>BRN Infotech Private Limited (Intern)</h4>
                  <h6>MERN Full Stack Developer</h6>
                  <p>Jan 2023 - May - 2023</p>
                </div>
                <div className="edu_detail">
                  <h4>RD Solutions Inc</h4>
                  <h6>US IT Recruiter</h6>
                  <p>Jun 2022 - Dec 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Education;
