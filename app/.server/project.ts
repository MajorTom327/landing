import projectsData from "../../public/locales/en/projects.json";
import { keys } from "rambda";
import { ProjectSchema } from "~/components/ProjectCard";
import { z } from "zod";

const projects = keys(projectsData);

export class ProjectsService {
  getAllProject() {
    return z.array(ProjectSchema).parse(projectsData);
  }
}

export const projectService = new ProjectsService();
export default projectService;
