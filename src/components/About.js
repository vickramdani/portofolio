import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";
import { SkillData } from "./portofolio-data/SkillData";
import {
  AboutWrapper,
  Education,
  Skill,
} from "./styled-components/AboutStyled";

import SertiOne from "../asset/project-app/serti-1.PNG";
import SertiTwo from "../asset/project-app/serti-2.PNG";

const About = () => {
  const [modalState, setModalState] = useState("");

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleClose = () => {
    setModalState("close");
  };
  return (
    <AboutWrapper>
      <div className="header">
        <h1>About Me</h1>
      </div>
      <Education className="shadow-lg">
        <h2>Education</h2>
        <div className="edu">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Logo-UNSOED.png"
            alt="logo-unsoed"
          />
          <div className="edu-txt">
            <h5>2014 - 2018</h5>
            <h3>UNIVERSITAS JENDERAL SOEDIRMAN</h3>
            <p>Physics major of Mathematics and Natural Science</p>
            <p>GPA 3.15 (scale of 4.00)</p>
          </div>
        </div>
      </Education>
      <Education className="shadow-lg">
        <h2>Training</h2>
        <div className="edu">
          <img
            src="https://d17ivq9b7rppb3.cloudfront.net/original/event/diskusi_online_kelas_academy_menjadi_android_developer_expert_logo_140318105211.png"
            alt="dicoding"
          />
          <div className="edu-txt">
            <h5>March 2020 - May 2020</h5>
            <h3>DICODING INDONESIA</h3>
            <p>Topic: Belajar Dasar Pemograman Web</p>
            <p>Introduction to HTML, CSS, and Javascript</p>
            <Button onClick={handleShowModalOne} variant="danger">
              View Sertificate
            </Button>

            <Modal show={modalState === "modal-one"} size="lg" centered>
              <Modal.Body>
                <img
                  src={SertiOne}
                  alt="sertifikat"
                  style={{ width: "100%" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="danger">
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <div className="edu">
          <img
            src="https://d17ivq9b7rppb3.cloudfront.net/original/event/diskusi_online_kelas_academy_menjadi_android_developer_expert_logo_140318105211.png"
            alt="dicoding"
          />
          <div className="edu-txt">
            <h5>May 2020 - June 2020</h5>
            <h3>DICODING INDONESIA</h3>
            <p>Topic: Belajar Fundamental Frontend Web Development</p>
            <p>
              Learn JS ES6, Web Component, NPM, Webpack, Asynchronous request,
              and building app that display data from API
            </p>
            <Button onClick={handleShowModalTwo} variant="danger">
              View Sertificate
            </Button>

            <Modal show={modalState === "modal-two"} size="lg" centered>
              <Modal.Body>
                <img
                  src={SertiTwo}
                  alt="sertifikat"
                  style={{ width: "100%" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="danger">
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Education>
      <Skill>
        <h2>Skills</h2>
        {SkillData.map((skill) => (
          <ul>
            <li key={skill.id}>
              <p>{skill.skill}</p>
              <ProgressBar
                now={skill.rating}
                variant="danger"
                label={`${skill.rating}%`}
                className="bar"
              />
            </li>
          </ul>
        ))}
      </Skill>
    </AboutWrapper>
  );
};

export default About;
