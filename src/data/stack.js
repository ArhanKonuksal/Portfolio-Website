export const stack = {
  frontend: {
    labelKey: "stack.frontend",
    items: ["React", "Vite", "HTML", "CSS", "JavaScript"],
  },
  backend: {
    labelKey: "stack.backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  database: {
    labelKey: "stack.database",
    items: ["PostgreSQL", "MongoDB"],
  },
  tools: {
    labelKey: "stack.tools",
    items: ["Git", "Docker", "Clean Architecture", "RESTful Design"],
  },
  testing: {
    labelKey: "stack.testing",
    items: ["Jest", "React Testing Library"],
  },
  softSkills: {
    labelKey: "stack.softSkills",
    items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership"],
  },
  languages: {
    labelKey: "stack.languages",
    items: ["English", "Turkish", "Dutch"],
  },
};

export const getStackCategories = () => Object.entries(stack);
