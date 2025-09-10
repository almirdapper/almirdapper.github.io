// Configuração do GitHub
const GITHUB_USERNAME = '[almirdapper]'; // Substitua pelo seu username do GitHub

// Função para carregar repositórios do GitHub
async function loadGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    try {
        // Exibir mensagem de carregamento
        projectsGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Carregando projetos...</p>';
        
        const response = await fetch(`https://api.github.com/users/almirdapper/repos`);
        
        if (!response.ok) {
            throw new Error('Erro ao carregar repositórios');
        }
        
        const repos = await response.json();
        
        // Filtrar repositórios públicos e ordenar por data de atualização
        const publicRepos = repos
            .filter(repo => !repo.private)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        // Limpar o grid
        projectsGrid.innerHTML = '';
        
        if (publicRepos.length === 0) {
            projectsGrid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Nenhum repositório público encontrado.</p>';
            return;
        }
        
        // Criar cards para cada repositório
        publicRepos.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descrição disponível.'}</p>
                <div class="language">${repo.language || 'Linguagem não especificada'}</div>
                <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        projectsGrid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1;">
                <p>Erro ao carregar projetos do GitHub.</p>
                <p>Verifique se o username está correto: <strong>${GITHUB_USERNAME}</strong></p>
                <p>Para configurar, edite o arquivo <code>assets/js/main.js</code> e substitua <code>[SEU_USERNAME]</code> pelo seu username do GitHub.</p>
            </div>
        `;
    }
}

// Função para carregar dados da carreira
async function loadCareerData() {
    // const timeline = document.getElementById('career-timeline');
    
    // try {
    //     const response = await fetch('assets/data/career.json');
        
    //     if (!response.ok) {
    //         throw new Error('Erro ao carregar dados da carreira');
    //     }
        
    //     const careerData = await response.json();
        
    //     // Limpar timeline
    //     timeline.innerHTML = '';
        
    //     careerData.forEach((item, index) => {
    //         const timelineItem = document.createElement('div');
    //         timelineItem.className = 'timeline-item';
            
    //         timelineItem.innerHTML = `
    //             <div class="timeline-item-content">
    //                 <h3>${item.title}</h3>
    //                 <p><strong>${item.period}</strong></p>
    //                 <p>${item.description}</p>
    //             </div>
    //             <div class="timeline-item-dot"></div>
    //         `;
            
    //         timeline.appendChild(timelineItem);
    //     });
        
    // } catch (error) {
    //     console.error('Erro ao carregar dados da carreira:', error);
    //     timeline.innerHTML = `
    //         <div style="text-align: center;">
    //             <p>Erro ao carregar dados da carreira.</p>
    //             <p>Verifique se o arquivo <code>assets/data/career.json</code> existe e está formatado corretamente.</p>
    //         </div>
    //     `;
    // }
}

// Função para navegação suave
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para destacar o link ativo no menu
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Executar uma vez no carregamento
}

// Função para criar um placeholder para a foto de perfil
function createProfilePlaceholder() {
    const profilePhoto = document.querySelector('.profile-photo');
    
    if (profilePhoto && profilePhoto.src.includes('profile-placeholder.jpg')) {
        // Criar um canvas para gerar um placeholder
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        
        // Fundo gradiente
        const gradient = ctx.createLinearGradient(0, 0, 200, 200);
        gradient.addColorStop(0, '#007bff');
        gradient.addColorStop(1, '#0056b3');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 200, 200);
        
        // Texto
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('FOTO', 100, 90);
        ctx.fillText('PERFIL', 100, 120);
        
        // Converter canvas para data URL e definir como src da imagem
        profilePhoto.src = canvas.toDataURL();
    }
}

// Função para atualizar o ano no rodapé
function updateFooterYear() {
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());
    }
}

// Função de inicialização
function init() {
    // Configurar navegação suave
    setupSmoothScrolling();
    
    // Configurar navegação ativa
    setupActiveNavigation();
    
    // Criar placeholder da foto de perfil
    createProfilePlaceholder();
    
    // Atualizar ano no rodapé
    updateFooterYear();
    
    // Carregar dados da carreira
    loadCareerData();
    
    // Carregar projetos do GitHub
    loadGitHubProjects();
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Adicionar estilo para link ativo
const style = document.createElement('style');
style.textContent = `
    nav ul li a.active {
        color: var(--primary-color);
        font-weight: bold;
    }
`;
document.head.appendChild(style);

