<template>
    <div id="portfolio">
		<nav class="topnav" role="navigation" aria-label="Navigation principale">
			<div class="container topnav__inner">
				<a href="#top" class="brand">Portfolio</a>
				<div class="spacer"></div>
				<ul class="menu">
					<li><a href="#projets">Projets</a></li>
					<li><a href="#competences">Compétences</a></li>
					<li><a href="#contact" class="btn btn--sm btn--primary">Contact</a></li>
				</ul>
			</div>
		</nav>
		<header class="hero section" id="top">
			<div class="container hero__content" data-reveal>
				<img class="hero__avatar" src="/profile-placeholder.svg" alt="Photo de profil" />
				<div>
					<h1 class="hero__title">Développeur Web & Data</h1>
					<p class="hero__tagline">Je crée des solutions web & data sur mesure pour PME et projets innovants.</p>
                    <div class="hero__actions">
                        <a href="#projets" class="btn btn--primary"><Icon name="arrowRight" /> Voir mes projets</a>
                        <a href="#contact" class="btn btn--ghost"><Icon name="mail" /> Me contacter</a>
                    </div>
				</div>
			</div>
		</header>

		<main id="main">
		<section class="section" id="projets">
            <div class="container" data-reveal>
                <h2 class="section__title">Projets</h2>
                <p class="section__subtitle">Des solutions concrètes et déployées, orientées impact business.</p>
				<div class="projects">
                    <ProjectCard
						:visual="'/visuals/analytics-mock.svg'"
						title="Dashboard Analytics"
						description="PME: besoin de visibilité. J'ai conçu un dashboard clair unifiant ventes et stock pour des décisions rapides."
						link="https://example.com/dashboard"
                        :tech="['Vue', 'TypeScript', 'Chart.js', 'API REST']"
                        impact="-40% temps d'analyse • +décisions rapides"
					/>
					<ProjectCard
						:visual="'/visuals/etl-mock.svg'"
						title="Pipeline ETL"
						description="Données dispersées. J'ai automatisé l'extraction et le nettoyage pour un reporting fiable quotidien."
						link="https://example.com/etl"
                        :tech="['Python', 'Pandas', 'Airflow', 'PostgreSQL']"
                        impact="-70% tâches manuelles • SLA 99,9%"
					/>
					<ProjectCard
						:visual="'/visuals/ux-mock.svg'"
						title="Refonte UX Site PME"
						description="Taux de conversion faible. Nouvelle IA de navigation + design Figma → +28% de leads."
						link="https://example.com/ux"
                        :tech="['Figma', 'HTML', 'CSS', 'Vue']"
                        impact="+28% leads • +20% temps sur page"
					/>
				</div>
			</div>
		</section>

		<section class="section section--alt" id="competences">
            <div class="container" data-reveal>
                <h2 class="section__title">Compétences</h2>
                <p class="section__subtitle">Stack moderne pour livrer vite, proprement et durablement.</p>
                <ul class="skills">
                    <li class="skill with-icon" data-reveal-child><Icon name="python" size="sm" /> Python</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="js" size="sm" /> JavaScript</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="vue" size="sm" /> Vue</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="html" size="sm" /> HTML</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="css" size="sm" /> CSS</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="figma" size="sm" /> Figma</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="ml" size="sm" /> Machine Learning</li>
                    <li class="skill with-icon" data-reveal-child><Icon name="ai" size="sm" /> AI</li>
                </ul>
			</div>
		</section>

		<section class="section" id="contact">
			<div class="container" data-reveal>
				<h2 class="section__title">Contact</h2>
				<p class="section__subtitle">Discutons de votre projet ou d'une collaboration.</p>
				<form class="contact" @submit.prevent="submitForm">
					<div class="field">
						<label for="name">Nom</label>
						<input id="name" v-model="form.name" type="text" placeholder="Votre nom" required />
					</div>
					<div class="field">
						<label for="email">Email</label>
						<input id="email" v-model="form.email" type="email" placeholder="vous@exemple.com" required />
					</div>
					<div class="field">
						<label for="message">Message</label>
						<textarea id="message" v-model="form.message" rows="5" placeholder="Parlez-moi de votre projet" required />
					</div>
                    <button class="btn btn--primary" type="submit"><Icon name="mail" /> Envoyer</button>
				</form>
			</div>
		</section>
		</main>

		<footer class="footer">
			<div class="container footer__content" data-reveal>
				<a class="icon-link" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
					<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.24 9.24 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.68.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
				</a>
				<a class="icon-link" href="mailto:contact@example.com" aria-label="Email">
					<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
				</a>
				<a class="icon-link" href="#top" aria-label="Haut de page">↑</a>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import Icon from './components/Icon.vue';

const form = reactive({ name: '', email: '', message: '' });

function submitForm() {
	const mailto = `mailto:contact@example.com?subject=Contact%20Portfolio%20-%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`;
	window.location.href = mailto;
}

onMounted(() => {
	// Smooth scroll reveal with stagger
	const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
	const reveal = (entry: IntersectionObserverEntry) => {
		if (entry.isIntersecting) {
			const el = entry.target as HTMLElement;
			el.classList.add('is-visible');
			// Stagger children if they exist
			const children = el.querySelectorAll('[data-reveal-child]');
			children.forEach((child, index) => {
				setTimeout(() => {
					(child as HTMLElement).classList.add('is-visible');
				}, index * 100);
			});
		}
	};
	const io = new IntersectionObserver(
		(entries) => entries.forEach(reveal),
		{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
	);
	items.forEach((el) => io.observe(el));
	
	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href && href !== '#') {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});
});
</script>

<style scoped>
</style>


