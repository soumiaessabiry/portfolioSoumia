import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCode,
  FaPalette,
  FaTools,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaDownload,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaStar,

  
} from 'react-icons/fa';
// import meImage from './images/me2.png';
import { SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql, SiMysql, SiFigma, SiAdobeillustrator, SiAdobexd, SiHtml5, SiCss3, SiBootstrap, SiGit, SiGithub, SiLaravel, SiReact, SiVuedotjs, SiAngular, SiPhp, SiMysql as SiMysqlIcon, SiPostgresql as SiPostgresqlIcon, SiMongodb as SiMongodbIcon, SiDocker, SiAmazonaws, SiFirebase } from 'react-icons/si';

// Language Data
const languages = {
  fr: {
    nav: ['Accueil', 'À propos', 'Formation', 'Expérience', 'Projets', 'Compétences', 'Contact'],
    hero: {
      tag: 'DÉVELOPPEUSE FULL-STACK',
      greeting: 'Bonjour, je suis',
      subtitle: 'Je crée des produits numériques qui se démarquent dans un marché en ligne saturé. Développeuse full-stack spécialisée dans les applications web modernes et solutions mobiles.',
      viewWork: 'Voir Mon Travail',
      getInTouch: 'Me Contacter'
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Passionnée par la technologie et l\'innovation',
      description: 'Je suis une développeuse full-stack passionnée avec une expérience de près de 2 ans chez Easy Web Mobile. Spécialisée dans le développement d\'applications web et mobiles avec React.js, Laravel et React Native. J\'ai développé plusieurs projets majeurs incluant des plateformes SaaS, des applications mobiles et des interfaces frontend modernes.',
      skills: ['Développement Web & Mobile', 'React.js & Laravel', 'Applications SaaS', 'Plateformes Streaming', 'CRM & IA', 'Intégration API']
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Mon parcours dans le développement'
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Quelques-uns de mes travaux récents'
    },
    skills: {
      title: 'Compétences Techniques',
      subtitle: 'Technologies et outils que je maîtrise'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Travaillons ensemble sur votre prochain projet'
    }
  },
  en: {
    nav: ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'],
    hero: {
      tag: 'FULL-STACK DEVELOPER',
      greeting: 'Hi, I\'m',
      subtitle: 'I build digital products that stand out in a crowded online market. Full-stack developer specializing in modern web applications and mobile solutions.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate about technology and innovation',
      description: 'I am a passionate full-stack developer with over 3 years of experience creating web and mobile applications. I love transforming complex ideas into elegant and performant solutions.',
      skills: ['Web Development', 'Mobile Applications', 'Cloud Architecture', 'UI/UX Design', 'DevOps', 'Agile/Scrum']
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My journey in development'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Some of my recent work'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s work together on your next project'
    }
  }
};

// Function to generate correct section IDs
const getSectionId = (navItem, currentLang) => {
  const idMap = {
    fr: {
      'Accueil': 'home',
      'À propos': 'about',
      'Formation': 'formation',
      'Expérience': 'experience',
      'Projets': 'projects',
      'Compétences': 'skills',
      'Contact': 'contact'
    },
    en: {
      'Home': 'home',
      'About': 'about',
      'Education': 'formation',
      'Experience': 'experience',
      'Projects': 'projects',
      'Skills': 'skills',
      'Contact': 'contact'
    }
  };
  
  return idMap[currentLang][navItem] || navItem.toLowerCase().replace(/[^a-z0-9]/g, '-');
};



// Language Toggle Component
const LanguageToggle = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'fr' 
            ? 'bg-accent-500 text-white' 
            : 'text-white hover:text-accent-400'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en' 
            ? 'bg-accent-500 text-white' 
            : 'text-white hover:text-accent-400'
        }`}
      >
        EN
      </button>
    </div>
  );
};

// Navigation Component
const Navigation = ({ isOpen, setIsOpen, currentLang, onLanguageChange }) => {
  const navItems = languages[currentLang].nav;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700/50">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Soumia Essabiry
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${getSectionId(item, currentLang)}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-accent-400 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <LanguageToggle currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-700 transition-colors text-white"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-dark-700/50 bg-dark-800/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${getSectionId(item, currentLang)}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-white hover:text-accent-400 hover:bg-dark-700/50 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="px-4 py-3 flex items-center justify-between">
                  <LanguageToggle currentLang={currentLang} onLanguageChange={onLanguageChange} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Section Component
const Section = ({ id, title, subtitle, children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id={id} className={`py-20 ${className}`} ref={ref}>
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

// About Section
const AboutSection = ({ currentLang }) => {
  const data = languages[currentLang].about;
  
  return (
    <Section 
      id="about" 
      title={data.title} 
      subtitle={data.subtitle}
      className="bg-dark-800/50"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-white leading-relaxed">
            {data.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-2 text-white"
              >
                <FaStar className="text-accent-400 text-sm" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <FaEnvelope className="mr-2" />
            {currentLang === 'fr' ? 'Me Contacter' : 'Get In Touch'}
          </a>
        </motion.div>
        
                <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl p-8 backdrop-blur-sm border border-accent-500/30 hover:border-accent-400/50 transition-all duration-300 hover:shadow-xl">
            <div className="text-center space-y-6">
              {/* Photo Profile */}
              <div className="relative">
                <div className="w-36 h-36 rounded-full mx-auto overflow-hidden border-4 border-accent-400/40 shadow-2xl hover:shadow-accent-400/20 transition-all duration-300">
                  <img 
                    src="/images/mee.png" 
                    alt="Soumia Essabiry" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Badge Online */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-dark-800 shadow-lg"></div>
              </div>
              
              {/* Informations */}
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-white">Soumia Essabiry</h3>
                <p className="text-xl text-accent-400 font-semibold">Full-Stack Developer</p>
                <p className="text-white">Easy Web Mobile - Marrakech</p>
                
                {/* Stats */}
                <div className="flex justify-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2+</div>
                    <div className="text-sm text-white">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">7+</div>
                    <div className="text-sm text-white">Projets réalisés</div>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="pt-4">
                <p className="text-sm text-white mb-3">Technologies principales</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-400/30 hover:bg-accent-500/30 transition-colors">
                      <FaReact className="text-accent-400" size={24} />
                    </div>
                    <span className="text-xs text-white">React.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-400/30 hover:bg-accent-500/30 transition-colors">
                      <SiLaravel className="text-accent-400" size={24} />
                    </div>
                    <span className="text-xs text-white">Laravel</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-400/30 hover:bg-accent-500/30 transition-colors">
                      <FaMobile className="text-accent-400" size={24} />
                    </div>
                    <span className="text-xs text-white">React Native</span>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <FaEnvelope className="mr-2" />
                  Me Contacter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// Formation Section
const FormationSection = ({ currentLang }) => {
  const formations = [
    {
      title: currentLang === 'fr' ? 'Certification en Développement WEB et Mobile' : 'Web and Mobile Development Certification',
      school: 'Youcode - Youssoufia',
      period: currentLang === 'fr' ? '2021 - 2023' : '2021 - 2023',
      description: currentLang === 'fr'
        ? 'Formation complète en développement web et mobile avec technologies modernes.'
        : 'Complete training in web and mobile development with modern technologies.'
    },
    {
      title: currentLang === 'fr' ? 'Diplôme de Technicien Spécialisé en Réseaux Informatiques' : 'Specialized Technician Diploma in Computer Networks',
      school: 'Institut Spécialisé des Technologies Appliquées - Essaouira',
      period: currentLang === 'fr' ? '2019 - 2021' : '2019 - 2021',
      description: currentLang === 'fr'
        ? 'Formation spécialisée en réseaux informatiques et technologies appliquées.'
        : 'Specialized training in computer networks and applied technologies.'
    },
    {
      title: currentLang === 'fr' ? 'Baccalauréat Sciences Physiques Option Français' : 'High School Diploma in Physical Sciences French Option',
      school: 'Lycée qualifiante Mohamed Cinq - Essaouira',
      period: currentLang === 'fr' ? '2017 - 2018' : '2017 - 2018',
      description: currentLang === 'fr'
        ? 'Formation scientifique avec option française.'
        : 'Scientific training with French option.'
    }
  ];

  return (
    <Section 
      id="formation" 
      title={currentLang === 'fr' ? 'Formation' : 'Education'} 
      subtitle={currentLang === 'fr' ? 'Mon parcours académique' : 'My academic background'}
      className="bg-dark-800/50"
    >
      <div className="space-y-8">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-700/50 rounded-xl p-6 border border-dark-600/50 hover:border-accent-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{formation.title}</h3>
                <p className="text-accent-400 font-medium">{formation.school}</p>
              </div>
                              <div className="flex items-center text-white mt-2 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formation.period}</span>
                </div>
            </div>
                          <p className="text-white leading-relaxed">{formation.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Experience Section
const ExperienceSection = ({ currentLang }) => {
  const experiences = [
    {
      title: currentLang === 'fr' ? 'Développeuse Full-Stack' : 'Full-Stack Developer',
      company: 'Easy Web Mobile - Marrakech',
      period: currentLang === 'fr' ? 'Février 2024 - Présent' : 'February 2024 - Present',
      description: currentLang === 'fr' 
        ? 'Développement d\'une API avec Laravel, création d\'interfaces utilisateur avec React.js, intégration front-end et back-end. Projets : Trading-Series (application trading), Lapli (contrôle parental mobile), Corearean (plateforme streaming), CRM AgentX (CRM SaaS), Site Noel Picart (interface frontend).'
        : 'Development of an API with Laravel, creation of user interfaces with React.js, front-end and back-end integration. Projects: Trading-Series (trading app), Lapli (mobile parental control), Corearean (streaming platform), CRM AgentX (SaaS CRM), Noel Picart website (frontend interface).',
      technologies: ['React.js', 'Laravel', 'Tailwind', 'Redux', 'JavaScript', 'SQL', 'MySQL', 'React Native', 'SaaS', 'Streaming Platform']
    },
    {
      title: currentLang === 'fr' ? 'Développeuse Frontend' : 'Frontend Developer',
      company: 'Wenaya - Casablanca',
      period: currentLang === 'fr' ? 'Juin - Octobre 2023' : 'June - October 2023',
      description: currentLang === 'fr'
        ? 'Développement de la partie front-end de la plateforme Wenaya (plateforme paramédicale), consommation d\'API, réservations pour soins personnalisés.'
        : 'Development of the front-end part of the Wenaya platform (paramedical platform), API consumption, bookings for personalized care.',
      technologies: ['React.js', 'Tailwind', 'Laravel', 'JavaScript', 'Redux', 'SQL', 'MySQL']
    },
    {
      title: currentLang === 'fr' ? 'Développeuse Laravel' : 'Laravel Developer',
      company: 'Ajicod - Agadir',
      period: currentLang === 'fr' ? 'Juillet - Août 2022' : 'July - August 2022',
      description: currentLang === 'fr'
        ? 'Développement de la partie front-end de la plateforme de Gestion Ajicod, consommation d\'API, réalisation de maquettes pour le site.'
        : 'Development of the front-end part of the Ajicod Management platform, API consumption, creation of site mockups.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS']
    }
  ];

  return (
    <Section 
      id="experience" 
      title={languages[currentLang].experience.title} 
      subtitle={languages[currentLang].experience.subtitle}
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 hover:border-accent-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-accent-400 font-medium">{exp.company}</p>
              </div>
                              <div className="flex items-center text-white mt-2 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>{exp.period}</span>
                </div>
            </div>
                          <p className="text-white mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm border border-accent-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Projects Section
const ProjectsSection = ({ currentLang }) => {
  const projects = [
    {
      title: 'Corearean - Plateforme Streaming',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr'
        ? 'Plateforme de streaming et gestion des tournois avec interface moderne et système de gestion des contenus avancé.'
        : 'Streaming platform and tournament management with modern interface and advanced content management system.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Laravel', 'PostgreSQL', 'Streaming', 'Tournament Management'],
      github: 'https://github.com/soumiaessabiry/corearean',
      live: 'https://corearena.tv/'
    },
    {
      title: 'CRM AgentX - SaaS CRM',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr'
        ? 'Plateforme CRM complète et innovante avec IA pour gérer les interactions prospects, gestion des clients pour centres d\'appels et équipes commerciales.'
        : 'Complete and innovative CRM platform with AI to manage prospect interactions, customer management for call centers and sales teams.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Laravel', 'MySQL', 'AI Integration', 'SaaS Platform'],
      github: 'https://github.com/soumiaessabiry/crm-agentx',
      live: 'https://agentx.fr/'
    },
    {
      title: 'Trading-Series',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr' 
        ? 'Application pour les élèves en trading, démocratisation de l\'accès à l\'éducation financière et initiation des jeunes générations aux principes de base du trading et de l\'investissement.'
        : 'Trading application for students, democratizing access to financial education and introducing young generations to the basic principles of trading and investment.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Laravel', 'Tailwind', 'Redux', 'JavaScript', 'SQL', 'MySQL'],
      github: 'https://github.com/soumiaessabiry/trading-series',
      live: 'https://trading-series.easywebmobile.fr'
    },
    {
      title: 'Site Noel Picart',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr'
        ? 'Interface frontend moderne pour le site de Noel Picart avec design responsive et intégration des services Easy Web Mobile.'
        : 'Modern frontend interface for Noel Picart website with responsive design and Easy Web Mobile services integration.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Tailwind', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/soumiaessabiry/noel-picart-site',
      live: 'https://noelpicart.fr/'
    },
    {
      title: 'Dashboard Noel Picart',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr'
        ? 'Dashboard administratif complet pour la gestion du site Noel Picart avec interface d\'administration moderne et fonctionnalités avancées.'
        : 'Complete administrative dashboard for Noel Picart website management with modern admin interface and advanced features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Laravel', 'Tailwind', 'Dashboard', 'Admin Panel'],
      github: 'https://github.com/soumiaessabiry/noel-picart-dashboard',
      live: 'https://noelpicart.fr/admin'
    },
    {
      title: 'Lapli - Contrôle Parental',
      company: 'Easy Web Mobile',
      description: currentLang === 'fr'
        ? 'Application mobile de contrôle parental qui contribue à améliorer la sécurité des enfants avec monitoring et restrictions intelligentes.'
        : 'Mobile parental control application that helps improve children\'s safety with intelligent monitoring and restrictions.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
      technologies: ['React Native', 'Tailwind', 'JavaScript', 'Mobile App'],
      github: 'https://github.com/soumiaessabiry/lapli',
      live: 'https://lapli.easywebmobile.fr'
    },
    {
      title: 'Wenaya - Plateforme Paramédicale',
      company: 'Wenaya',
      description: currentLang === 'fr'
        ? 'Plateforme paramédicale permettant d\'effectuer des réservations pour des soins personnalisés et de répondre aux besoins uniques des clients.'
        : 'Paramedical platform allowing bookings for personalized care and meeting unique client needs.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Tailwind', 'Laravel', 'JavaScript', 'Redux', 'SQL', 'MySQL'],
      github: 'https://github.com/soumiaessabiry/wenaya',
      live: 'https://wenaya.ma'
    }
  ];

  return (
    <Section 
      id="projects" 
      title={languages[currentLang].projects.title} 
      subtitle={languages[currentLang].projects.subtitle}
      className="bg-dark-800/50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-700/50 rounded-xl overflow-hidden border border-dark-600/50 hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent-500/20 text-accent-400 rounded text-xs border border-accent-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a href={project.github} className="flex-1 text-center inline-flex items-center justify-center px-4 py-2 border-2 border-accent-400 text-accent-400 font-semibold rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a href={project.live} className="flex-1 text-center inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <FaExternalLinkAlt className="mr-2" />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Skills Section
const SkillsSection = ({ currentLang }) => {
  const skillCategories = [
    {
      title: currentLang === 'fr' ? 'Frontend' : 'Frontend',
      icon: <FaCode className="text-accent-400" size={24} />,
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95 },
        // { name: 'React Native', icon: <FaMobile />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'HTML/CSS', icon: <SiHtml5 />, level: 90 },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 92 },
        { name: 'Redux', icon: <FaCode />, level: 88 }
      ]
    },
    {
      title: currentLang === 'fr' ? 'Backend' : 'Backend',
      icon: <FaDatabase className="text-accent-400" size={24} />,
      skills: [
        { name: 'Laravel', icon: <SiLaravel />, level: 90 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'PHP', icon: <SiPhp />, level: 88 },
        { name: 'MySQL', icon: <SiMysqlIcon />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodbIcon />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresqlIcon />, level: 75 }
      ]
    },
    {
      title: currentLang === 'fr' ? 'Design & Outils' : 'Design & Tools',
      icon: <FaPalette className="text-accent-400" size={24} />,
      skills: [
        { name: 'Figma', icon: <SiFigma />, level: 85 },
        { name: 'Adobe XD', icon: <SiAdobexd />, level: 80 },
        { name: 'Adobe Illustrator', icon: <SiAdobeillustrator />, level: 75 },
        { name: 'Git/GitHub', icon: <SiGit />, level: 90 },
        { name: 'JIRA', icon: <FaTools />, level: 85 },
        { name: 'Trello', icon: <FaTools />, level: 80 }
      ]
    }
  ];

  return (
    <Section 
      id="skills" 
      title={languages[currentLang].skills.title} 
      subtitle={languages[currentLang].skills.subtitle}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50"
          >
            <div className="flex items-center space-x-3 mb-6">
              {category.icon}
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white">{skill.icon}</span>
                      <span className="text-white text-sm">{skill.name}</span>
                    </div>
                    <span className="text-accent-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      className="bg-gradient-to-r from-accent-400 to-accent-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Contact Section
const ContactSection = ({ currentLang }) => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: currentLang === 'fr' ? 'Email' : 'Email',
      value: 'soumiaessabiry.se@gmail.com',
      link: 'mailto:soumiaessabiry.se@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: currentLang === 'fr' ? 'Téléphone' : 'Phone',
      value: '+212 6 97 15 69 97',
      link: 'tel:+212697156997'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: currentLang === 'fr' ? 'Localisation' : 'Location',
      value: currentLang === 'fr' ? 'Marrakech, Maroc' : 'Marrakech, Morocco',
      link: '#'
    }
  ];

  return (
    <Section 
      id="contact" 
      title={languages[currentLang].contact.title} 
      subtitle={languages[currentLang].contact.subtitle}
      className="bg-dark-800/50"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            {currentLang === 'fr' ? 'Travaillons ensemble !' : 'Let\'s work together!'}
          </h3>
                      <p className="text-white leading-relaxed">
              {currentLang === 'fr' 
                ? 'Je suis toujours ouverte à de nouvelles opportunités et collaborations intéressantes. N\'hésitez pas à me contacter pour discuter de votre projet.'
                : 'I\'m always open to new opportunities and interesting collaborations. Don\'t hesitate to contact me to discuss your project.'
              }
            </p>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-600/50 transition-colors border border-dark-600/50 hover:border-accent-500/50"
              >
                                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center text-accent-400">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{info.title}</h4>
                  <p className="text-white">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-dark-700/50 rounded-xl p-8 border border-dark-600/50"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            {currentLang === 'fr' ? 'Envoyez un message' : 'Send a message'}
          </h3>
          <form className="space-y-4">
            <div>
                              <input
                  type="text"
                  placeholder={currentLang === 'fr' ? 'Votre nom' : 'Your name'}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
                />
            </div>
            <div>
                              <input
                  type="email"
                  placeholder={currentLang === 'fr' ? 'Votre email' : 'Your email'}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
                />
            </div>
            <div>
                              <textarea
                  rows="4"
                  placeholder={currentLang === 'fr' ? 'Votre message' : 'Your message'}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                ></textarea>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {currentLang === 'fr' ? 'Envoyer le message' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');

  
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);
  
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };
  
  
  
  return (
    <div className="App">
      <Navigation 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}


      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="floating-element -top-40 -right-40" style={{background: 'rgba(0, 0, 0, 0.3)'}}></div>
            <div className="floating-element -bottom-40 -left-40" style={{background: 'rgba(0, 0, 0, 0.3)'}}></div>
          </div>
          
          <div className="text-center relative z-10">
            {/* Tag */}
                          <div className="inline-block bg-dark-800/60 backdrop-blur-md border border-accent-500/30 text-accent-400 px-6 py-2 rounded-full text-sm font-medium mb-8">
              {languages[currentLang].hero.tag}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              {languages[currentLang].hero.greeting}{' '}
              <span className="gradient-text">Soumia</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              {languages[currentLang].hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="#projects" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FaRocket className="inline mr-2" />
                {languages[currentLang].hero.viewWork}
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border-2 border-accent-400 text-accent-400 font-semibold rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                <FaEnvelope className="inline mr-2" />
                {languages[currentLang].hero.getInTouch}
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/soumiaessabiry" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-800/60 hover:bg-accent-500/20 rounded-xl flex items-center justify-center text-white hover:text-accent-400 transition-all duration-300 border border-dark-700/50 hover:border-accent-500/50">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/soumiaessabiry" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-800/60 hover:bg-accent-500/20 rounded-xl flex items-center justify-center text-white hover:text-accent-400 transition-all duration-300 border border-dark-700/50 hover:border-accent-500/50">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:soumiaessabiry.se@gmail.com" className="w-12 h-12 bg-dark-800/60 hover:bg-accent-500/20 rounded-xl flex items-center justify-center text-white hover:text-accent-400 transition-all duration-300 border border-dark-700/50 hover:border-accent-500/50">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </section>
        
        {/* Other Sections */}
        <AboutSection currentLang={currentLang} />
        <FormationSection currentLang={currentLang} />
        <ExperienceSection currentLang={currentLang} />
        <ProjectsSection currentLang={currentLang} />
        <SkillsSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </div>
    </div>
  );
}

export default App;
