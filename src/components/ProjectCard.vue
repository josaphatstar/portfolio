<template>
	<article class="project" @mouseenter="hovered = true" @mouseleave="hovered = false">
		<div class="project__visual">
			<img :src="visual" :alt="`Visuel pour ${title}`" />
			<a class="project__link" :class="{ 'is-visible': hovered }" :href="link" target="_blank" rel="noopener">
				<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
				<span>Voir le projet</span>
			</a>
		</div>
    <div class="project__body">
        <p v-if="impact" class="project__kicker">{{ impact }}</p>
        <h3 class="project__title"><a :href="link" target="_blank" rel="noopener">{{ title }}</a></h3>
			<p class="project__desc">{{ description }}</p>
			<ul class="project__tech">
				<li v-for="t in tech" :key="t" class="badge">{{ t }}</li>
			</ul>
		</div>
	</article>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ visual: string; title: string; description: string; link: string; tech: string[]; impact?: string }>();

const hovered = ref(false);
</script>

<style scoped>
</style>


