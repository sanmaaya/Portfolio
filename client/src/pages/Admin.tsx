import { useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
    const [project, setProject] = useState({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: ""
    });
    const [status, setStatus] = useState({ type: "", msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/projects", project);
            setStatus({ type: "success", msg: "Project Added Successfully!" });
            setProject({ title: "", description: "", tech: "", github: "", live: "" });
        } catch (err) {
            setStatus({ type: "error", msg: "Error adding project." });
        }
    };

    return (
        <section className="admin">
            <div className="admin-container glass-card animate-in">
                <h2 className="section-title">Add New Project<span>.</span></h2>

                {status.msg && (
                    <div className={`status-msg ${status.type}`}>
                        {status.msg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="admin-form">
                    <input
                        required
                        placeholder="Project Title"
                        value={project.title}
                        onChange={e => setProject({ ...project, title: e.target.value })}
                    />
                    <textarea
                        required
                        placeholder="Project Description"
                        value={project.description}
                        onChange={e => setProject({ ...project, description: e.target.value })}
                    ></textarea>
                    <input
                        required
                        placeholder="Tech Stack (e.g. React, Node, MongoDB)"
                        value={project.tech}
                        onChange={e => setProject({ ...project, tech: e.target.value })}
                    />
                    <input
                        placeholder="GitHub Link"
                        value={project.github}
                        onChange={e => setProject({ ...project, github: e.target.value })}
                    />
                    <input
                        placeholder="Live Demo Link"
                        value={project.live}
                        onChange={e => setProject({ ...project, live: e.target.value })}
                    />
                    <button type="submit" className="btn btn-primary">Add Project</button>
                </form>
            </div>
        </section>
    );
}

export default Admin;
