export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "GroceryMate – Cloud Migration",
    description:
      "Deployed a highly available and scalable infrastructure for a full-stack grocery application on AWS using Terraform. Architected a modular environment featuring a VPC, Auto Scaling Groups (ASG), and Application Load Balancer (ALB). Implemented a managed RDS (PostgreSQL) instance with secure credential management via AWS Secrets Manager and automated the deployment pipeline.",
    tags: [
      "Terraform",
      "AWS",
      "VPC",
      "ASG",
      "ALB",
      "RDS",
      "Secrets Manager",
      "Infrastructure as Code",
    ],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "https://github.com/EugeniaBel/AWS_grocery",
  },
  {
    title: "Ansible app_deploy Role",
    description:
      "Developed Ansible role for automated application deployment. Integrated AWS SSM for secure parameter management, Jinja2 templates, and Docker Compose v2.",
    tags: ["Ansible", "AWS", "Docker", "Jinja2"],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "https://github.com/webeet-io/layered-infra",
  },
  {
    title: "PostgreSQL Restore Runbook",
    description:
      "Created disaster recovery documentation for PostgreSQL. Defined step-by-step restore procedure and RTO estimation.",
    tags: ["PostgreSQL", "AWS", "Documentation"],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "https://github.com/webeet-io/layered-infra",
  },
  {
    title: "Chaos Monkey Testing",
    description:
      "Implemented container resilience tests in AWS. Fixed circular import issues and added JSON report generation for test results.",
    tags: ["AWS", "Bash", "Docker", "SSM"],
    image: "/images/project-placeholder.svg",
    link: "",
    repo: "https://github.com/webeet-io/layered-infra",
  },
];
