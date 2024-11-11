// import React from "react";
// import styles from "./Template3.module.css"; // Create a new CSS file for this template
// import RoomIcon from "@mui/icons-material/Room";
// import EmailIcon from "@mui/icons-material/Email";
// import CallIcon from "@mui/icons-material/Call";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Avatar, Paper, Typography, Box, Grid } from "@mui/material";
// import Link from "next/link";
// import { useSelector } from "react-redux";

// function Template3() {
//   const state = useSelector((state) => state);
//   const {
//     profile,
//     aboutme,
//     workExperience,
//     education,
//     skills,
//     hobbies,
//     languages,
//   } = state;

//   const {
//     firstName,
//     lastName,
//     photoUrl,
//     role,
//     address,
//     phone,
//     email,
//     website,
//     linkedin,
//     github,
//     objective,
//   } = profile;

//   return (
//     <Paper elevation={12} className={styles.template}>
//       {/* Header Section */}
//       <Box className={styles.header}>
//         <Avatar src={photoUrl} alt="Profile" className={styles.avatar} />
//         <Typography variant="h4" className={styles.name}>
//           {firstName} {lastName}
//         </Typography>
//         <Typography variant="h6" className={styles.role}>
//           {role}
//         </Typography>
//       </Box>

//       {/* Contact Section */}
//       <Box className={styles.contactInfo}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <RoomIcon /> {address ? address : "123 Main St, City, Country"}
//           </Grid>
//           <Grid item xs={6}>
//             <CallIcon /> {phone ? phone : "123-456-7890"}
//           </Grid>
//           <Grid item xs={6}>
//             <EmailIcon /> {email ? email : "email@example.com"}
//           </Grid>
//           <Grid item xs={6}>
//             <LinkedInIcon />{" "}
//             <Link href={linkedin ? linkedin : "#"}>
//               <a target="_blank">LinkedIn</a>
//             </Link>
//           </Grid>
//           <Grid item xs={6}>
//             <GitHubIcon />{" "}
//             <Link href={github ? github : "#"}>
//               <a target="_blank">GitHub</a>
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* About Me Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           About Me
//         </Typography>
//         <Typography>{objective ? objective : "Short bio here..."}</Typography>
//       </Box>

//       {/* Education Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           Education
//         </Typography>
//         {education.items.map((edu, index) => (
//           <Box key={index} className={styles.eduItem}>
//             <Typography>
//               <strong>{edu.institution}</strong> - {edu.major} | {edu.grade}
//             </Typography>
//             <Typography variant="body2">
//               {edu.startDate} - {edu.endDate}
//             </Typography>
//           </Box>
//         ))}
//       </Box>

//       {/* Work Experience Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           Experience
//         </Typography>
//         {workExperience.items.map((work, index) => (
//           <Box key={index} className={styles.workItem}>
//             <Typography>
//               <strong>{work.companyName}</strong> - {work.role}
//             </Typography>
//             <Typography variant="body2">{work.description}</Typography>
//           </Box>
//         ))}
//       </Box>

//       {/* Skills Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           Skills
//         </Typography>
//         <Box className={styles.skillsContainer}>
//           {skills.items.map((skill, index) => (
//             <Typography key={index} className={styles.skill}>
//               {skill.name}
//             </Typography>
//           ))}
//         </Box>
//       </Box>

//       {/* Hobbies Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           Hobbies
//         </Typography>
//         <Box className={styles.hobbiesContainer}>
//           {hobbies.items.map((hobby, index) => (
//             <Typography key={index}>{hobby.name}</Typography>
//           ))}
//         </Box>
//       </Box>

//       {/* Languages Section */}
//       <Box className={styles.section}>
//         <Typography variant="h6" className={styles.sectionTitle}>
//           Languages
//         </Typography>
//         <Box className={styles.languagesContainer}>
//           {languages.items.map((language, index) => (
//             <Typography key={index}>{language.name}</Typography>
//           ))}
//         </Box>
//       </Box>
//     </Paper>
//   );
// }

// export default Template3;




import React from "react";
import styles from "./Template3.module.css";
import { Paper, Box, Avatar, Grid, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const localStateSkills = ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Next.js", "Python", "Node.js", "MongoDB"];
const localStateHobbies = ["Cricket", "Travelling", "Reading", "Painting"];
const localStateLanguages = ["English", "Urdu", "Pashtu"];

function Template3() {
  const state = useSelector((state) => state);
  const {
    profile,
    workExperience,
    skills,
    education,
    hobbies,
    languages,
    projects,
    objective,
  } = state;

  const {
    firstName = "Mr",
    lastName = "taj",
    photoUrl,
    role = "Web Developer",
    city = "Brooklyn",
    country = "NY",
    phone = "804-931-9418",
    email = "mr.aj@gmail.com",
    linkedin = "linked.in/ahmad",
    github = "github.in/taj",
    website = "taj.me",
  } = profile;

  return (
    <Paper elevation={24} className={styles.template}>
      <Box sx={{ height: 220, backgroundColor: "#008FD5" }} className={styles.intro}>
        <Avatar src={photoUrl} alt={`${firstName} ${lastName}`} sx={{ width: 150, height: 150, marginRight: "1.5rem" }} />
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div>
            <Typography variant="h4" sx={{ fontWeight: "600", color: "#fff", textTransform: "uppercase" }}>
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography sx={{ color: "#fff", textTransform: "uppercase" }}>{role}</Typography>
          </div>
          <Typography variant="subtitle2" sx={{ color: "#fff" }}>
            {objective || "A Front-End Developer with Proficiency in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, Next.js, Node for Retail eCommerce, POS and Storage domain & Firebase."}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.mainBlock}>
        <Box className={styles.leftBlock}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Contact Info
            </Typography>
            <Grid container sx={{ color: "#555", fontSize: "0.9rem", display: "flex", flexDirection: "column" }}>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <RoomIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {`${city}, ${country}`}
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <MailIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {email}
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <CallIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {phone}
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <LinkedInIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                <Link href={linkedin} target="_blank">
                  <a>LinkedIn</a>
                </Link>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <GitHubIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                <Link href={github} target="_blank">
                  <a>GitHub</a>
                </Link>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <LanguageIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                <Link href={website} target="_blank">
                  <a>Portfolio</a>
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Education
            </Typography>
            {education.items.length > 0 ? (
              education.items.map((edu) => (
                <Box sx={{ marginBottom: "1rem" }} key={edu.id}>
                  <Typography><strong>{edu.institution || "Vaagdevi Engineering College, Warangal"}</strong></Typography>
                  <Typography>{edu.major || "Dept of Computer Science"}</Typography>
                  <Typography variant="body2">
                    <strong>CGPA: {edu.grade || "7.19"}</strong> | {`${edu.startDate || "July 2016"} - ${edu.endDate || "Sept 2020"}`}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography sx={{ color: "#555", marginBottom: "1rem" }}>
                2015 - 2019 <br />
                B.S in Computer Science <br />
                University of Pittsburgh
              </Typography>
            )}
          </Box>

          <Box sx={{ marginBottom: "1rem", color: "#555" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Skills
            </Typography>
            {(skills.items.length > 0 ? skills.items : localStateSkills).map((skill, i) => (
              <Typography key={skill.id || i} sx={{ marginBottom: "0.5rem" }}>
                {skill.name || skill}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box className={styles.rightBlock}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Work Experience
            </Typography>
            {workExperience.items.length > 0 ? (
              workExperience.items.map((work) => (
                <Box sx={{ marginBottom: "1rem" }} key={work.id}>
                  <Typography>
                    <strong>{work.company || "Company Name"}</strong>
                  </Typography>
                  <Typography variant="body2">
                    {work.role || "Software Engineer"} | {`${work.startDate || "Jan 2020"} - ${work.endDate || "Present"}`}
                  </Typography>
                  <Typography sx={{ color: "#555" }}>{work.description || "Description of your role and responsibilities."}</Typography>
                </Box>
              ))
            ) : (
              <Typography sx={{ color: "#555", marginBottom: "1rem" }}>
                Jan 2020 - Present <br />
                Software Engineer <br />
                ABC Corp
              </Typography>
            )}
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Projects
            </Typography>
            {projects.items.length > 0 ? (
              projects.items.map((project) => (
                <Box sx={{ marginBottom: "1rem" }} key={project.id}>
                  <Typography>
                    <strong>{project.title || "Project Title"}</strong>
                  </Typography>
                  <Typography sx={{ color: "#555" }}>{project.description || "Description of the project."}</Typography>
                </Box>
              ))
            ) : (
              <Typography sx={{ color: "#555", marginBottom: "1rem" }}>
                Project Title <br />
                Description of the project.
              </Typography>
            )}
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Hobbies
            </Typography>
            {(hobbies.items.length > 0 ? hobbies.items : localStateHobbies).map((hobby, i) => (
              <Typography key={hobby.id || i} sx={{ marginBottom: "0.5rem" }}>
                {hobby.name || hobby}
              </Typography>
            ))}
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "700", color: "#008FD5", marginBottom: "0.3rem" }}>
              Languages
            </Typography>
            {(languages.items.length > 0 ? languages.items : localStateLanguages).map((language, i) => (
              <Typography key={language.id || i} sx={{ marginBottom: "0.5rem" }}>
                {language.name || language}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Template3;
