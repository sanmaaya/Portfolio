const mongoose = require("mongoose");
require("dotenv").config();
const Project = require("./models/Project");

const projects = [
    {
        title: "Electrosystem",
        description: "Hybrid Renewable Energy Platform to model and evaluate solar, wind, and battery systems using data-driven simulations.",
        tech: "Node.js, Express.js, MongoDB, JavaScript, EMS",
        github: "https://github.com/sanmaaya",
        live: ""
    },
    {
        title: "SOHAM",
        description: "Pranic Healing & Meditation Platform featuring course registration workflows and automated email notifications.",
        tech: "JavaScript, PHP, MySQL, CSS",
        github: "https://github.com/sanmaaya",
        live: ""
    },
    {
        title: "TechnoGrowX",
        description: "Smart Agriculture Support Platform for reporting crop diseases with secure multi-panel (Farmer, Expert, Admin) management.",
        tech: "Node.js, MySQL, Tailwind CSS, JavaScript",
        github: "https://github.com/sanmaaya",
        live: ""
    },
    {
        title: "Expense Report Generator",
        description: "AI-integrated expense tracker with PDF reporting, category visualizations, and OpenAI chatbot integration.",
        tech: "PHP, OpenAI API, Chart.js, jsPDF, SQL",
        github: "https://github.com/sanmaaya",
        live: ""
    },
    {
        title: "Drug Review Sentiment Analysis",
        description: "NLP pipeline using TF-IDF and Logistic Regression to classify reviews, with interactive Power BI dashboard.",
        tech: "Python, Scikit-learn, Pandas, Power BI",
        github: "https://github.com/sanmaaya",
        live: ""
    }
];

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
    .then(async () => {
        console.log("Connected to MongoDB for seeding...");
        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log("Database seeded successfully!");
        process.exit();
    })
    .catch(err => {
        console.error("Seeding error:", err);
        process.exit(1);
    });
