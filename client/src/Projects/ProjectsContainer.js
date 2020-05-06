import React, { useState } from "react";
import Section from "../Section/Section";
import ZeroProjects from "./ZeroProjects";
import SearchProjects from "./SearchProjects";
import ProjectCard from "./ProjectCard";
import ProjectsPagination from "./ProjectsPagination";

export default (props) => {
  if (props.projects.length === 0) {
    return (
      <Section title="All Projects" className="text-light py-5">
        <ZeroProjects />
      </Section>
    );
  }

  let pagesArray = [];
  for (let i = 0; i < props.projects.length; i += props.perPage) {
    pagesArray.push(props.projects.slice(i, i + props.perPage));
  }
  // eslint-disable-next-line
  const [pages, setPages] = useState(pagesArray);

  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (page) => {
    if (page < 0 || page >= pages.length) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <Section title="All Projects" className="text-light py-5">
      <div className="mt-4">
        <SearchProjects className="mb-3" />
        {pages[currentPage].map((p, i) => (
          <ProjectCard key={i} data={p} className="mb-2" />
        ))}
        <ProjectsPagination
          className="my-5"
          currentPage={currentPage}
          totalPages={pages.length}
          changePageHandler={(page) => goToPage(page)}
        />
      </div>
    </Section>
  );
};
