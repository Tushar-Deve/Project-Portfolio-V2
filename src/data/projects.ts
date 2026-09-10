export type Project = {
	id: number;
	title: string;
	image: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	liveUrl: string;
};

export const projects: Project[] = [
	{
		id: 1,
		title: "CRUD Auth Task Management Portal",
		image: "/images/crud_auth_task_management.png",
		description: "A focused task management dashboard for organizing work, tracking progress, and keeping teams aligned.",
		technologies: ["Next.js", "Node.js , Express.js", "PostgreSQL", "Tailwind CSS", "Redux Toolkit"],
		githubUrl: "https://github.com/Tushar-Deve/crud-auth-task-management",
		liveUrl: "https://crud-auth-task-management.vercel.app/",
	},
	{
		id: 2,
		title: "Test Marks Entry & Viewer System",
		image: "/images/Test_marks_entry_&_viewer.png",
		description: "A streamlined system for entering and viewing test marks with a user-friendly interface.",
		technologies: ["React.js", "Node.js,Express.js", "PostgreSQL"],
		githubUrl: "https://github.com/Tushar-Deve/test-marks-entry-and-viewer-system",
		liveUrl: "https://test-marks-entry-and-viewer-system.vercel.app/",
	},
	{
		id: 3,
		title: "Project Portfolio Website",
		image: "/images/project-portfolio.png",
		description: "A modern portfolio website to showcase projects and skills.",
		technologies: ["HTML5", "CSS3", "Bootstrap V-5"],
		githubUrl: "https://github.com/Tushar-Deve/Portfolio-Project",
		liveUrl: "https://tushar-deve.github.io/Portfolio-Project/",
	},
	{
		id: 4,
		title: "TIC TAC TOE Game",
		image: "/images/Tic-Tac-Toe.png",
		description: "A classic Tic Tac Toe game with a modern twist.",
		technologies: ["HTML5", "CSS3", "JavaScript"],
		githubUrl: "https://github.com/Tushar-Deve/tic-tac-toe",
		liveUrl: "https://tushar-deve.github.io/Portfolio-Project/project-Tic.Tac.Toe/index.html",
	},
];
