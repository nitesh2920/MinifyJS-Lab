async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        const projectsGrid = document.getElementById('projects-grid');

        projectsGrid.innerHTML = projects.map(project => `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative pb-[56.25%]"> <!-- 16:9 aspect ratio -->
                    <img 
                        src="${project.image}" 
                        alt="${project.title}" 
                        class="absolute top-0 left-0 w-full h-full object-cover"
                        onerror="this.src='https://via.placeholder.com/400x225'"
                    >
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">${project.title}</h2>
                    <p class="mb-4 line-clamp-2">${project.description}</p>
                    <div class="flex justify-end">
                        <a 
                            href="${project.link}" 
                            class="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-grid').innerHTML = `
            <div class="col-span-full text-center text-red-600 py-8">
                Error loading projects. Please try again later.
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);