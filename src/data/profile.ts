export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Yevheniia Belohai",
  role: "DevOps Intern",
  summary:
    "I build and automate cloud infrastructure with AWS, Ansible, and Docker. Passionate about reliability, CI/CD, and learning fast.",

  location: "Kassel, Germany",
  email: "belohay@gmail.com",
  lookingFor: "Open to DevOps roles",
  avatar: "/images/avatar.svg",
  resumeUrl: "",
  skills: [
    "AWS",
    "Ansible",
    "Docker",
    "Python",
    "Git/GitHub",
    "Bash",
    "CI/CD",
    "Terraform",
    "PostgreSQL",
    "Linux",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/EugeniaBel" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yevheniia-belohai/" },
    { label: "Email", href: "mailto:belohay@gmail.com" },
  ],
};
