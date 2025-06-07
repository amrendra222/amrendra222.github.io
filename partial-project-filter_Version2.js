// Example projects array
const projects = [
  { name: "Student Database System", tags: ["Python", "MySQL"], desc: "...", link: "" },
  { name: "Weather App", tags: ["JavaScript"], desc: "...", link: "" }
  // ...
];

function renderProjects(filter = "all") {
  const list = document.getElementById('project-list');
  list.innerHTML = projects
    .filter(p => filter === "all" || p.tags.includes(filter))
    .map(p => `<div class="project-item"><h3>${p.name}</h3><p>${p.desc}</p></div>`)
    .join('');
}
renderProjects();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  };
});