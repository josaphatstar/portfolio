<template>
    <div id="portfolio">
        <nav class="topnav" role="navigation" aria-label="Navigation principale">
			<div class="container topnav__inner">
				<a href="#top" class="brand">Portfolio</a>
				<div class="spacer"></div>
				<ul class="menu">
					<li><a href="#projets">Projets</a></li>
					<li><a href="#competences">Compétences</a></li>
                    <li>
                        <button
                            class="theme-switch"
                            type="button"
                            role="switch"
                            :aria-checked="theme === 'dark'"
                            @click="toggleTheme"
                            :title="theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'"
                        >
                            <span class="visually-hidden">Basculer le thème</span>
                            <span class="switch__track" aria-hidden="true">
                                <span class="switch__thumb">
                                    <Icon :name="theme === 'dark' ? 'moon' : 'sun'" />
                                </span>
                            </span>
                        </button>
                    </li>
                    <li><a href="#contact" class="btn btn--sm btn--primary">Contact</a></li>
				</ul>
			</div>
		</nav>
		<header class="hero section" id="top">
			<div class="container hero__content" data-reveal>
				<div class="hero__profile">
					<img class="hero__avatar" src="/profile.jpeg" alt="Photo de profil de TAGBA Gracia-Josaphat Ewazam" />
					<h3 class="hero__name">TAGBA Gracia-Josaphat Ewazam</h3>
				</div>
				<div>
					<h1 class="hero__title">Développeur Web & Data</h1>
					<p class="hero__tagline">Développeur web passionné, spécialisé dans les solutions pour PME. Contactez-moi pour un prototype gratuit</p>
                    <ul class="hero__badges" aria-label="Points clés">
                        <li class="chip">Disponible freelance</li>
                    		<!-- <li class="chip">Vue JS · Python</li> -->
                        <li class="chip">Remote/Lomé-Togo</li>
                    </ul>
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
						problem="PME sans visibilité sur leurs données de vente et stock"
						solution="Dashboard clair unifiant ventes et stock pour des décisions rapides"
                        impact="-40% temps d'analyse, décisions data-driven"
					/>
					<ProjectCard
						:visual="'/visuals/etl-mock.svg'"
						title="Pipeline ETL"
						description="Données dispersées. J'ai automatisé l'extraction et le nettoyage pour un reporting fiable quotidien."
						link="https://example.com/etl"
                        :tech="['Python', 'Pandas', 'Airflow', 'PostgreSQL']"
						problem="Données dispersées dans plusieurs sources, traitement manuel"
						solution="Pipeline ETL automatisé avec orchestration Airflow pour reporting quotidien"
                        impact="-70% tâches manuelles, SLA 99,9%, données fiables"
					/>
					<ProjectCard
						:visual="'/visuals/ux-mock.svg'"
						title="Refonte UX Site PME"
						description="Taux de conversion faible. Nouvelle IA de navigation + design Figma → +28% de leads."
						link="https://example.com/ux"
                        :tech="['Figma', 'HTML', 'CSS', 'Vue']"
						problem="Taux de conversion faible, navigation confuse"
						solution="Nouvelle architecture d'information + design Figma moderne et intuitif"
                        impact="+28% leads qualifiés, +20% temps sur page"
					/>
				</div>
			</div>
		</section>

		<section class="section section--alt" id="competences">
            <div class="container" data-reveal>
                <h2 class="section__title">Compétences</h2>
                <p class="section__subtitle">Stack moderne pour livrer vite, proprement et durablement.</p>
                <ul class="skills">
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'python']" size="lg" :style="{ color: '#3776AB' }" /> Python</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'js']" size="lg" :style="{ color: '#F7DF1E' }" /> JavaScript</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'vuejs']" size="lg" :style="{ color: '#4FC08D' }" /> Vue JS</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'html5']" size="lg" :style="{ color: '#E34F26' }" /> HTML</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'css3-alt']" size="lg" :style="{ color: '#1572B6' }" /> CSS</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fab', 'figma']" size="lg" :style="{ color: '#F24E1E' }" /> Figma</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fas', 'brain']" size="lg" :style="{ color: '#6366f1' }" /> Machine Learning</li>
                    <li class="skill with-icon" data-reveal-child><font-awesome-icon :icon="['fas', 'robot']" size="lg" :style="{ color: '#6366f1' }" /> AI</li>
                </ul>
			</div>
		</section>

		<section class="section" id="contact">
			<div class="container" data-reveal>
				<h2 class="section__title">Contact</h2>
				<p class="section__subtitle">Discutons de votre projet ou d'une collaboration.</p>
				<form class="contact" action="https://api.web3forms.com/submit" method="POST" @submit="handleSubmit">
					<input type="hidden" name="access_key" value="48318e11-5750-47b0-8cfd-e5cbac9c48a2" />
					<input type="hidden" name="subject" value="From Portfolio" />
					<input type="hidden" name="from_name" value="Portfolio Contact" />
					<input type="hidden" name="redirect" value="false" />
					<input type="hidden" name="replyto" value="" />
					<div class="field">
						<label for="name">Nom</label>
						<input id="name" name="name" v-model="form.name" type="text" placeholder="Votre nom" required />
					</div>
					<div class="field">
						<label for="email">Email</label>
						<input id="email" name="email" v-model="form.email" type="email" placeholder="vous@exemple.com" required />
					</div>
					<div class="field">
						<label for="message">Message</label>
						<textarea id="message" name="message" v-model="form.message" rows="8" placeholder="Parlez-moi de votre projet" required></textarea>
					</div>
                    <button class="btn btn--primary" type="submit"><Icon name="mail" /> Envoyer</button>
				</form>
			</div>
		</section>
		</main>

		<footer class="footer">
			<div class="container footer__content" data-reveal>
				<div class="footer__brand">Portfolio</div>
				<ul class="social">
					<li><a class="icon-link" href="https://github.com/josaphatstar/" target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /> GitHub</a></li>
					<li><a class="icon-link" href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /> LinkedIn</a></li>
					<li><a class="icon-link" href="/cv.pdf" target="_blank" rel="noopener" aria-label="CV"><Icon name="external" /> CV</a></li>
				</ul>
				<div class="footer__meta">
					<span>© TAGBA Gracia-Josaphat Ewazam - 2025</span>
					<a class="to-top" href="#top" aria-label="Haut de page">Haut <Icon name="arrowRight" /></a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, watch } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import Icon from './components/Icon.vue';

const form = reactive({ name: '', email: '', message: '' });
const theme = ref<'light' | 'dark'>('dark');

function applyTheme(t: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', t);
}

function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

watch(theme, (t) => {
    applyTheme(t);
    try { localStorage.setItem('theme', t); } catch {}
});

function handleSubmit(event: Event) {
	const formElement = event.target as HTMLFormElement;
	const formData = new FormData(formElement);

	fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			alert('Message envoyé avec succès !');
			form.name = '';
			form.email = '';
			form.message = '';
		} else {
			alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
		}
	})
	.catch(error => {
		console.error('Erreur:', error);
		alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
	});

	event.preventDefault();
}

onMounted(() => {
    // Init theme from storage or system
    try {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (saved) {
            theme.value = saved;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme.value = prefersDark ? 'dark' : 'light';
        }
    } catch {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme.value = prefersDark ? 'dark' : 'light';
    }
    applyTheme(theme.value);

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
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const href = anchor.getAttribute('href');
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


