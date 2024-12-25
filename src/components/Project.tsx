import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import '../app/styles/projects.css';

const data = [
  {
    id: 1,
    title: "Weather Widget",
    desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/image.png (3).png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/Static Interactive Resume.png",
    tags: ["HTML", "Node", "CSS", "Typescript"]
  },
  {
    id: 3,
    title: "Simple Calculator App",
    desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
    img: "/image.png (4).png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;