import React from "react";
const skills = [
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Research Writing"
];
export default function Skills() {
  return (
    <div>
      <h3 className="text-accent text-2xl font-semibold mb-6">Skills & Experience</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map(s => (
          <div key={s} className="card hover:-translate-y-1 transition">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
