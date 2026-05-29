import { SKILL_CATEGORIES } from "../../data/portfolio";

export function SkillsTab() {
  return (
    <div className="tab-panel">
      <div className="skills-categories">
        {SKILL_CATEGORIES.map((cat) => (
          <div className="skill-category" key={cat.category}>
            <h3 className="category-title">{cat.category}</h3>
            <div className="category-skills">
              {cat.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-badge ${skill.experience.toLowerCase()}`}
                    >
                      {skill.experience}
                    </span>
                  </div>
                  <p className="skill-note">{skill.note}</p>
                  <span className="skill-years">
                    {skill.years} {skill.years === 1 ? "year" : "years"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
