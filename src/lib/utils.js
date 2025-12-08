export function getFeaturedProjects(allProjects) {
  return allProjects.filter(project => project.featured);
}

// const featured = getFeaturedProjects(projects);