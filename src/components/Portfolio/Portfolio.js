import React from "react";
import "./../../index.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import {projects} from "../../projects";

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I Have Built</h1>
      <div className="projects-container">
        {
          projects.map( (project,index) => {
          return (
            <ProjectCard
                key={index}
                {...project}
            />
          )
         })
        }
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/alinasir85?tab=repositories"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  )
}

export default Portfolio;
