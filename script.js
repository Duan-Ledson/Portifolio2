// script.js

// Seleciona o ícone do menu e a barra de navegação
let menuIcon = document.getElementById('menu-icon');
let navBar = document.querySelector('.barra_de_navegacao');

// Adiciona um evento de clique ao ícone do menu
menuIcon.onclick = () => {
    navBar.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
}

// Enviar Menssagens

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura a mensagem inserida pelo usuário
    var message = document.getElementById("message").value;

    // Número de telefone do WhatsApp para o qual deseja enviar a mensagem (inclua o código do país)
    var whatsappNumber = "5561981056261"; // Substitua pelo número desejado com código de país e região

    // Gera o link para o WhatsApp apenas com a mensagem do usuário
    var whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redireciona para o link do WhatsApp
    window.open(whatsappLink, "_blank");
});  


// 1. Objeto de traduções para diferentes idiomas
const translations = {
    en: {
        "site-title": "Portfolio - Duan Ledson",
        "logo-name": "Ledson",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-education": "Education",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-title": "Hi, it's <span>Duan</span>",
        "home-subtitle": "I'm a <span></span>",
        "home-description": "Hello! My name is Duan Lêdson, a Front-end developer specializing in React, HTML, CSS, and JavaScript. I help small businesses and designers put their ideas into practice. Let's talk?",
        "download-cv": "Download CV",
        "about-heading": "About <span>Me</span>",
        "about-title": "Web <span>developer</span>",
        "about-description-1": "My name is Duan Lêdson and I am passionate about technology. My first contact with programming was in 2022 when I decided to change careers, but it didn't work out very well, despite having liked the area, I only really started my career transition process in 2024, when a friend introduced me to web development.",
        "about-description-2": "Today I understand technologies focused on Front-end. I also like to create designs in Figma, creating interfaces for personal projects and those of friends.",
        "education-heading": "Education",
        "education-highschool-title": "High School",
        "education-highschool-name": "CENTRO DE ENSINO ARISTIDES LOBAO",
        "education-highschool-date": "2011",
        "education-university-title": "University",
        "education-university-name": "INSTITUTO FEDERAL DO PIAUI - CAMPUS FLORIANO",
        "education-university-date": "2012",
        "services-heading": "Services",
        "services-icon-frontend": "FrontEnd Development",
        "services-description-frontend": "Create and implement the visual interface of a website or application so that users can interact with the application.",
        "services-icon-git": "Git & GitHub",
        "services-description-git": "Version control of files that tracks changes and keeps a history of each change. Host projects and allow developers to work together. GitHub uses Git to store and manage code.",
        "services-icon-design": "UI / UX Design",
        "services-description-design": "Understanding user needs and defining product functionality and structure, creating the visual interface that brings the user experience to life. Both aspects of Design are essential to creating high-quality products.",
        "services-icon-nodejs": "Node.js",
        "services-description-nodejs": "Open source platform that enables the creation of server-side applications and tools in JavaScript. It is built on Google Chrome's V8 engine, which interprets JavaScript.",
        "projects-heading": "Projects",
        "contact.heading": "Contact",
        "contact.span": "Me",
        "contact.input.name": "Name",
        "contact.input.email": "E-mail",
        "contact.input.phone": "Phone Number",
        "contact.input.subject": "Subject",
        "contact.input.message": "Your Message",
        "contact.button.send": "Send Message",
        "footer-text": "© Duan Ledson | All Rights Reserved"
    },
    pt: {
        "site-title": "Portfólio - Duan Ledson",
        "logo-name": "Ledson",
        "nav-home": "Início",
        "nav-about": "Sobre",
        "nav-education": "Educação",
        "nav-services": "Serviços",
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "home-title": "Olá, sou o <span>Duan</span>",
        "home-subtitle": "Sou um <span></span>",
        "home-description": "Olá! Meu nome é Duan Lêdson, um desenvolvedor Front-end especializado em React, HTML, CSS e JavaScript. Eu ajudo pequenas empresas e designers a colocarem suas ideias em prática. Vamos conversar?",
        "download-cv": "Baixar CV",
        "about-heading": "Sobre <span>Mim</span>",
        "about-title": "Desenvolvedor <span>Web</span>",
        "about-description-1": "Meu nome é Duan Lêdson e sou apaixonado por tecnologia. Meu primeiro contato com programação foi em 2022 quando decidi mudar de carreira, mas não deu muito certo, apesar de ter gostado da área, só comecei de fato meu processo de transição de carreira em 2024, quando um amigo me apresentou o desenvolvimento web.",
        "about-description-2": "Hoje entendo de tecnologias focadas em Front-end. Também gosto de criar designs em Figma, criando interfaces para projetos pessoais e de amigos.",
        "education-heading": "Educação",
        "education-highschool-title": "Ensino Médio",
        "education-highschool-name": "CENTRO DE ENSINO ARISTIDES LOBAO",
        "education-highschool-date": "2011",
        "education-university-title": "Universidade",
        "education-university-name": "INSTITUTO FEDERAL DO PIAUI - CAMPUS FLORIANO",
        "education-university-date": "2012",
        "services-heading": "Serviços",
        "services-icon-frontend": "Desenvolvimento FrontEnd",
        "services-description-frontend": "Criar e implementar a interface visual de um site ou aplicativo para que os usuários possam interagir com a aplicação.",
        "services-icon-git": "Git & GitHub",
        "services-description-git": "Controle de versão de arquivos que rastreia mudanças e mantém um histórico de cada alteração. Hospeda projetos e permite que desenvolvedores trabalhem juntos. O GitHub usa o Git para armazenar e gerenciar código.",
        "services-icon-design": "Design UI / UX",
        "services-description-design": "Compreender as necessidades dos usuários e definir a funcionalidade e estrutura do produto, criando a interface visual que traz a experiência do usuário à vida. Ambos os aspectos do Design são essenciais para criar produtos de alta qualidade.",
        "services-icon-nodejs": "Node.js",
        "services-description-nodejs": "Plataforma de código aberto que permite a criação de aplicações e ferramentas do lado do servidor em JavaScript. É construída sobre o mecanismo V8 do Google Chrome, que interpreta o JavaScript.",
        "projects-heading": "Projetos",
        "contact.heading": "Contato",
        "contact.span": "Me",
        "contact.input.name": "Nome",
        "contact.input.email": "E-mail",
        "contact.input.phone": "Número de Telefone",
        "contact.input.subject": "Assunto",
        "contact.input.message": "Sua Mensagem",
        "contact.button.send": "Enviar Mensagem",
        "footer-text": "© Duan Ledson | Todos os Direitos Reservados"
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach((element) => {
        const key = element.getAttribute('data-key');
        if (translations[language][key]) {
            element.innerHTML = translations[language][key]; // Usando innerHTML para manter tags HTML
        }
    });
    
    document.title = translations[language]["site-title"];
}

// Carregar a linguagem desejada quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('pt'); // ou 'en', dependendo da linguagem que deseja carregar
});


