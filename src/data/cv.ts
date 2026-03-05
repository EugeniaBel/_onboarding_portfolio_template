export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: "work" | "education";
};

export const cvArticles: CvArticle[] = [
  {
    title: "DevOps Intern",
    org: "Webeet.io",
    location: "Remote",
    period: "Jan 2026 - Mar 2026",
    bullets: [
      "Implemented Chaos Monkey tests for container resilience in AWS, fixed circular import issues, and added JSON report generation",
      "Developed Ansible role (app_deploy) for automated application deployment with AWS SSM, Jinja2 templates, and Docker Compose v2",
      "Created PostgreSQL restore runbook for disaster recovery, including step-by-step procedure and RTO estimation",
      "Collaborated with team using Git/GitHub (branching, PRs, code reviews) and incorporated feedback",
    ],
    tags: [
      "AWS",
      "Ansible",
      "Docker",
      "Git",
      "Bash",
      "Chaos Monkey",
      "PostgreSQL",
    ],
    type: "work",
  },
  {
    title: "DevOps & Cloud Program",
    org: "Masterschool",
    location: "Remote",
    period: "Jan 2025 - Mar 2026",
    bullets: [
      "Intensive hands-on training in cloud infrastructure, automation, and DevOps practices",
      "Completed cloud migration project: deployed full-stack grocery app on AWS with Terraform (VPC, ASG, ALB, RDS, Secrets Manager)",
      "Gained practical experience with CI/CD pipelines, infrastructure as code, and system resilience",
    ],
    tags: ["AWS", "Terraform", "CI/CD", "DevOps", "Cloud"],
    type: "education",
  },
];
