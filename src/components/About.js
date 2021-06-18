import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { SkillData } from "./portofolio-data/SkillData";
import ScrollToTop from "./ScrollToTop";
import {
  AboutWrapper,
  Education,
  Skill,
  Contacts,
} from "./styled-components/AboutStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import SertiOne from "../asset/project-app/serti-1.PNG";
import SertiTwo from "../asset/project-app/serti-2.PNG";
import SertiDts from "../asset/project-app/dts.jpg";
import Profile from "../asset/project-app/profile.jpeg";
import Invektor from "../asset/invektor.jpg";

const About = () => {
  const [modalState, setModalState] = useState("");

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };

  const handleClose = () => {
    setModalState("close");
  };
  return (
    <AboutWrapper>
      <div className="header" data-aos="fade-up">
        <h1>About Me</h1>
      </div>
      <Education className="shadow-lg" data-aos="fade-up">
        <h2>Profile</h2>
        <div className="edu">
          <img src={Profile} alt="foto-profil" />
          <div className="edu-txt">
            <h3>Muhammad Vickramdani</h3>
            <p>
              Alamat: Jalan Babakan Gunung Gede No. 15, Bogor Tengah, Kota
              Bogor, Jawa Barat
            </p>
            <p>E-mail: muhammadvicramdani@gmail.com</p>
            <p>No. HP: +62 881-0251-92370</p>
          </div>
        </div>
      </Education>

      <Education className="shadow-lg" data-aos="fade-up">
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

      <Education className="shadow-lg" data-aos="fade-up">
        <h2>Experience</h2>
        <div className="edu">
          <img src={Invektor} alt="logo-invektor" />
          <div className="edu-txt">
            <h5>September 2020 - Present</h5>
            <h3>Independent Frontend Developer</h3>
            <h3>INVEKTOR</h3>
            <p>
              Build and do maintenance for Invektor landing page company (
              <a href="https://invektoon.com" target="_blank" rel="noreferrer">
                https://invektoon.com
              </a>
              )
            </p>
          </div>
        </div>
      </Education>

      <Education className="shadow-lg" data-aos="fade-up">
        <h2>Training</h2>
        <div className="edu">
          <img
            src="https://i.pinimg.com/originals/f2/21/4e/f2214e98ce44dae75ba0281dbcc37227.png"
            alt="digital-talent-schoolarship"
          />
          <div className="edu-txt">
            <h5>September 2019 - November 2019</h5>
            <h3>KEMKOMINFO - Digital Talent Schoolarship</h3>
            <p>Topic: Artificial Intelligence</p>
            <p>Introduction to Python and Machine Learning</p>
            <Button onClick={handleShowModalOne} variant="primary">
              View Sertificate
            </Button>

            <Modal show={modalState === "modal-one"} size="lg" centered>
              <Modal.Body>
                <img
                  src={SertiDts}
                  alt="sertifikat"
                  style={{ width: "100%" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="primary">
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
            <h5>March 2020 - May 2020</h5>
            <h3>DICODING INDONESIA</h3>
            <p>Topic: Belajar Dasar Pemograman Web</p>
            <p>Introduction to HTML, CSS, and Javascript</p>
            <Button onClick={handleShowModalTwo} variant="primary">
              View Sertificate
            </Button>

            <Modal show={modalState === "modal-two"} size="lg" centered>
              <Modal.Body>
                <img
                  src={SertiOne}
                  alt="sertifikat"
                  style={{ width: "100%" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="primary">
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
            <Button onClick={handleShowModalThree} variant="primary">
              View Sertificate
            </Button>

            <Modal show={modalState === "modal-three"} size="lg" centered>
              <Modal.Body>
                <img
                  src={SertiTwo}
                  alt="sertifikat"
                  style={{ width: "100%" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose} variant="primary">
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Education>
      <Skill data-aos="fade-up">
        <h2>Skills</h2>
        {SkillData.map((skill) => (
          <ul key={skill.id}>
            <li>{skill.skill}</li>
          </ul>
        ))}
      </Skill>
      <Contacts data-aos="fade-up">
        <h2>Contact:</h2>
        <div className="contact-info">
          <div>
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <p>vickramdani</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} size="3x" />
            <p>@vickramdani</p>
          </div>
        </div>
      </Contacts>
      <ScrollToTop />
    </AboutWrapper>
  );
};

export default About;
