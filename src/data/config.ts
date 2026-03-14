const config = {
  title: "Jyotiprakash | Aspiring SDE/Full Stack Developer",
  description: {
    long: "Explore the portfolio of Jyotiprakash, an aspiring SDE and full-stack developer from Jaipur, Rajasthan. Passionate about building innovative web applications and learning new technologies. Let's build something amazing together!",
    short:
      "Discover the portfolio of Jyotiprakash, an aspiring full-stack developer from Jaipur creating innovative web applications.",
  },
  keywords: [
    "Jyotiprakash",
    "portfolio",
    "full-stack developer",
    "SDE",
    "web development",
    "Jaipur",
    "Rajasthan",
    "React",
    "Next.js",
    "web design",
  ],
  author: "Jyotiprakash",
  email: "jpjangid710@gmail.com",
  site: "https://localhost:3000", // Update this with your actual domain later

  // for github stars button
  githubUsername: "jp7107",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/jangid_jp71",
    linkedin: "https://www.linkedin.com/in/jyotiprakash-jangid-a72418331/",
    instagram: "https://www.instagram.com/just_jp71/",
    facebook: "",
    github: "https://github.com/jp7107",
  },
};
export { config };
