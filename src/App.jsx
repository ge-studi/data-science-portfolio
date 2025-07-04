import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "AI Resume Screener",
    description:
      "Built a Streamlit-based application that uses NLP (TF-IDF and BERT) and ML models to automatically classify resumes into job roles like Data Science, Web Dev, and more.",
    link: "https://github.com/ge-studi/AI-Resume-Screener",
  },
  {
    title: "Livelihood Risk Analysis",
    description:
      "Analyzed socio-economic and environmental factors affecting rural livelihoods using statistical modeling and machine learning for risk profiling.",
    link: "https://github.com/ge-studi/livelihood-risk",
  },
  {
    title: "Financial Fraud Detection",
    description:
      "Developed a machine learning pipeline to identify fraudulent financial transactions using ensemble methods and feature engineering.",
    link: "https://github.com/ge-studi/Financial-Fraud-Detection",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Created a predictive model using logistic regression and random forest to classify heart disease risk based on patient data.",
    link: "https://github.com/ge-studi/Heart_Disease_Prediction",
  },
];

export default function App() {
  return (
    <div className="font-sans text-gray-800 p-6 max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Geetanjali Singh</h1>
        <p className="text-lg text-gray-600 mb-4">
          Data Scientist • I build ML products that solve real problems
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://github.com/ge-studi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a href="mailto:gssingh6393@gmail.com">
            <FaEnvelope size={24} />
          </a>
        </div>
        <a
          href="#"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Resume
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a curious and detail-oriented data scientist who enjoys building
          practical machine learning solutions to solve real-world problems.
          With a strong foundation in Python, NLP, and data analysis, I’ve
          created projects ranging from resume screening systems to fraud
          detection models. I'm passionate about writing clean, impactful code
          and turning data into insights that drive action.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-4 border rounded-lg shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Feel free to reach out via email at{" "}
          <a
            href="mailto:gssingh6393@gmail.com"
            className="text-blue-600 hover:underline"
          >
            gssingh6393@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}