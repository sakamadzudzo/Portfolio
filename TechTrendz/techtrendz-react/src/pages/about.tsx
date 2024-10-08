import { useEffect } from "react";

export const About = () => {

    useEffect(() => {
        document.title = 'TechBrandz - About';
    }, []);

    // useEffect(() => {
    //     document.title = "Saka Shingirai Madzudzo - About";
    // }, []);

    return (
        <div className="wrapper">
            <div className="w-full h-full overflow-y-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">About Saka Shingirai Madzudzo</h1>
                    <p className="mt-4 text-lg">Passionate Software Developer & Tech Enthusiast</p>
                </div>

                <div className="mb-12">
                    <p className="text-xl mb-4">
                        I am Saka Shingirai Madzudzo, a dedicated software developer with a robust background in full-stack development and cloud services. My experience spans across multiple frameworks and technologies, including <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>TypeScript</strong>, with a strong commitment to solving real-world problems through innovative tech solutions.
                    </p>
                    <p className="text-xl mb-4">
                        Currently, I’m working on <strong>TechTrendz</strong>, an online store I developed to showcase my technical skills. TechTrendz specializes in high-quality tech gadgets, electronics, and accessories, and it’s a platform I built using modern technologies to ensure a seamless and secure shopping experience.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                    <ul className="list-disc ml-8 text-lg">
                        <li><strong>Frontend:</strong> React + TypeScript, Tailwind CSS</li>
                        <li><strong>Backend:</strong> Spring Boot, Java</li>
                        <li><strong>Containerization:</strong> Docker</li>
                        <li><strong>Backend Hosting:</strong> Back4App</li>
                        <li><strong>Frontend Hosting:</strong> Netlify</li>
                        <li><strong>Automation & Scheduling:</strong> cron-job.org</li>
                        <li><strong>Databases:</strong> MySQL</li>
                        <li><strong>Others:</strong> Node.js, Swagger</li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                    <ul className="list-disc ml-8 text-lg">
                        <li>
                            <strong>Software Engineer at Cottco (May 2023 - Present):</strong>
                            <p>Developed and maintained an in-house ERP system for operational tracking. Integrated ZIMRA’s FDMS server-to-server solution. Technologies: Spring Boot, Oracle Database, and various JS/TS frameworks.</p>
                        </li>
                        <li>
                            <strong>Software Engineer at Velocity Inc (Sep 2022 - May 2023):</strong>
                            <p>Worked with Vue.js, AWS Amplify, and Hasura in an agile environment. Participated in full-stack development, regression testing, and sprint-based workflows.</p>
                        </li>
                        <li>
                            <strong>ICT Solutions Developer at Premier Service Medical Investments (May 2020 - Sep 2022):</strong>
                            <p>Developed and supported in-house healthcare management systems (backend & frontend). Collaborated on a blood bank module development. Technologies: Spring Boot, Thymeleaf, MS SQL Server, Linux.</p>
                        </li>
                        <li>
                            <strong>Graduate Trainee - Software Development at Premier Service Medical Investments (Oct 2019 - May 2020):</strong>
                            <p>Received real-world training under senior developer guidance. Personally developed a waiting room calling screen. Technologies: Java, Spring Boot, MS SQL Server, Thymeleaf.</p>
                        </li>
                        <li>
                            <strong>Internship - Software Development at Premier Service Medical Investments (Oct 2017 - Oct 2018):</strong>
                            <p>Worked on a healthcare management system that was under development. Gained hands-on experience in software engineering as applied in real-world scenarios. Technologies: Java, Spring Boot, Thymeleaf.</p>
                        </li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
                    <ul className="list-disc ml-8 text-lg">
                        <li>Bachelor of Technology in Software Engineering, Harare Institute of Technology (2019)</li>
                        <li>Certificate in Tertiary and Higher Education, Harare Institute of Technology (2019)</li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">LinkedIn & GitHub</h2>
                    <p className="text-lg">
                        <a href="https://www.linkedin.com/in/sakamadzudzo" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                        <a href="https://github.com/sakamadzudzo" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </p>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg italic">This project, TechTrendz, serves as my portfolio to showcase the breadth of my experience and passion for software development. Let’s connect and build something great together!</p>
                </div>
            </div>
        </div>
    );
};