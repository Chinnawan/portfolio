import React from "react";
import { projects, ui } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="container">
        <SectionHeading eyebrow={ui.projects.eyebrow} title={ui.projects.title} />
        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
