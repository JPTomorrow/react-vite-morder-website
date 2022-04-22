function SkillBadge({ icon, iconText }) {
  return (
    <div className="skill-badge-border">
      <div className="skill-badge">
        <div className="flex justify-center">{icon}</div>
        <p className="text-white text-3xl text-center">{iconText}</p>
      </div>
    </div>
  );
}

export default SkillBadge;
