window.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  const pterminal = document.querySelector('.pterminal');
  const pcdmShowcase = document.querySelector('.pcdmShowcase');
  const pdescription = document.querySelector('.pdescription');
  const consoleEl = document.querySelector('.console'); // Get .console

  const projectDescriptions = {
    1: 'Contributed to the development of a Windows Intrusion Detection System (IDS) using Splunk, including configuring log forwarding, developing SPL queries for threat detection, setting up alerts, and designing dashboards',
    2: "Developed a classic text-based ‘Choose Your Own Adventure’ game for Windows, Utilizing JavaScript and the Tauri framework, with a focus on maintainable architecture and modular design."
  };

  // Preload images
  projects.forEach((proj) => {
    const img = new Image();
    img.src = proj.getAttribute('data-img');
  });

  let isOpen = false;
  let currentProjectId = null;

  function showProject(projectId, imageSrc) {
    pterminal.classList.add('active');
    pcdmShowcase.innerHTML = `<img src="${imageSrc}" alt="Showcase Image" style="width: 100%; height: 100%;" />`;
    pdescription.textContent = projectDescriptions[projectId] || '';
    isOpen = true;
    currentProjectId = projectId;
  }

  function hideProject() {
    pterminal.classList.remove('active');
    pcdmShowcase.innerHTML = '';
    pdescription.textContent = '';
    isOpen = false;
    currentProjectId = null;
  }

  projects.forEach((proj) => {
    const projectId = proj.getAttribute('data-id');
    const imageSrc = proj.getAttribute('data-img');

    const handleClick = () => {
      if (isOpen && currentProjectId === projectId) {
        hideProject();
      } else {
        showProject(projectId, imageSrc);

        if (consoleEl) {
          consoleEl.scrollTo({ top: 1165, behavior: 'smooth' });
        }
      }
    };

    if (window.innerWidth > 820) {
      proj.addEventListener('mouseover', () => {
        if (!isOpen || currentProjectId !== projectId) {
          showProject(projectId, imageSrc);
        }
      });

      proj.addEventListener('click', handleClick);
    } else {
      proj.addEventListener('click', handleClick);
    }
  });
});
