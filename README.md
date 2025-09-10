# Portfólio Pessoal

Um site de portfólio moderno e responsivo criado com HTML, CSS e JavaScript puro, compatível com GitHub Pages.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções com destaque do link ativo
- **Integração GitHub**: Carrega automaticamente seus repositórios públicos via API
- **Timeline de Carreira**: Exibe sua trajetória profissional de forma visual
- **Fácil Personalização**: Conteúdo editável via JSON e HTML
- **GitHub Pages Ready**: Pronto para deploy no GitHub Pages

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos CSS
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   ├── img/                # Imagens (adicione sua foto de perfil aqui)
│   └── data/
│       └── career.json     # Dados da sua carreira
└── README.md               # Este arquivo
```

## ⚙️ Configuração

### 1. Personalize suas informações

Edite o arquivo `index.html` e substitua:
- `[Seu Nome]` pelo seu nome
- `[Sua Tagline]` pela sua descrição profissional
- `[SEU_USERNAME]` pelo seu username do GitHub
- `[SEU_LINKEDIN_USERNAME]` pelo seu username do LinkedIn
- `[SEU_EMAIL]` pelo seu email

### 2. Configure a integração com GitHub

No arquivo `assets/js/main.js`, linha 2:
```javascript
const GITHUB_USERNAME = 'seu-username-aqui';
```

### 3. Adicione sua foto de perfil

Substitua o arquivo `assets/img/profile-placeholder.jpg` pela sua foto de perfil.

### 4. Personalize sua carreira

Edite o arquivo `assets/data/career.json` com suas informações profissionais:

```json
[
    {
        "title": "Seu Cargo",
        "period": "Ano - Ano",
        "description": "Descrição da sua experiência..."
    }
]
```

## 🎨 Personalização de Cores

As cores podem ser facilmente alteradas no arquivo `assets/css/style.css` nas variáveis CSS:

```css
:root {
    --primary-color: #007bff;    /* Cor principal */
    --secondary-color: #6c757d;  /* Cor secundária */
    --background-color: #f8f9fa; /* Cor de fundo */
    --text-color: #343a40;       /* Cor do texto */
}
```

## 🚀 Deploy no GitHub Pages

1. Faça upload dos arquivos para um repositório no GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "main" branch e "/ (root)"
5. Clique em "Save"

Seu site estará disponível em: `https://seu-username.github.io/nome-do-repositorio`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Variáveis CSS)
- JavaScript ES6+
- GitHub API
- Fetch API

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

---

**Desenvolvido com ❤️ para ajudar desenvolvedores a criar portfólios incríveis!**

