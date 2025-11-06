<template>
	<article class="project" :class="{ 'is-hovered': hovered }" @mouseenter="hovered = true" @mouseleave="hovered = false">
		<div class="project__visual">
			<img :src="visual" :alt="`Visuel pour ${title}`" />
			<a class="project__link" :class="{ 'is-visible': hovered }" :href="link" target="_blank" rel="noopener">
				<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
				<span>Voir le projet</span>
			</a>
		</div>
		<div class="project__body">
			<h3 class="project__title"><a :href="link" target="_blank" rel="noopener">{{ title }}</a></h3>
			<p class="project__desc">{{ description }}</p>
			
			<div class="project__details" :class="{ 'is-visible': hovered }">
				<div v-if="problem" class="detail-item">
					<span class="detail-label">Problème :</span>
					<span class="detail-text">{{ problem }}</span>
				</div>
				<div v-if="solution" class="detail-item">
					<span class="detail-label">Solution :</span>
					<span class="detail-text">{{ solution }}</span>
				</div>
				<div v-if="impact" class="detail-item">
					<span class="detail-label">Impact :</span>
					<span class="detail-text">{{ impact }}</span>
				</div>
			</div>
			
			<ul class="project__tech">
				<li v-for="t in tech" :key="t" class="badge">{{ t }}</li>
			</ul>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ 
	visual: string; 
	title: string; 
	description: string; 
	link: string; 
	tech: string[];
	problem?: string;
	solution?: string;
	impact?: string;
}>();

const hovered = ref(false);
</script>

<style scoped>
.project.is-hovered {
	transform: translateY(-8px) scale(1.02);
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
	border-color: rgba(99, 102, 241, 0.5);
}

.project.is-hovered::before {
	opacity: 1;
}

.project.is-hovered .project__visual img {
	transform: scale(1.1);
}

.project__details {
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
	margin: 12px 0;
}

.project__details.is-visible {
	max-height: 300px;
	opacity: 1;
}

.detail-item {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.detail-label {
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.detail-item:nth-child(1) .detail-label {
	color: var(--accent-light);
}

.detail-item:nth-child(2) .detail-label {
	color: #4FC8E8;
}

.detail-item:nth-child(3) .detail-label {
	color: var(--success);
}

.detail-text {
	font-size: 13px;
	color: var(--text-muted);
	line-height: 1.5;
}
</style>


