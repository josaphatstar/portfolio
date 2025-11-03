<template>
	<svg :viewBox="viewBox" :class="['icon', sizeClass]" aria-hidden="true" fill="currentColor">
		<g v-if="props.name === 'python'">
			<path d="M12 2c2.8 0 5 2.2 5 5v1.5h-6.5C8.6 8.5 8 9.1 8 10v2h9c1.7 0 3 1.3 3 3v2c0 2.8-2.2 5-5 5h-2v-3.5h1.5c.9 0 1.5-.6 1.5-1.5V15H8c-1.7 0-3-1.3-3-3v-2C5 4.2 7.2 2 10 2h2Z" fill="currentColor"/>
			<circle cx="14.5" cy="5.5" r="1" fill="#0a0e18"/>
		</g>
		<path v-else-if="props.name === 'js'" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 5v8.5a3.5 3.5 0 0 0 7 0h-2a1.5 1.5 0 1 1-3 0V8H9Zm-2 8a1 1 0 1 0 0 2 3 3 0 0 0 3-3V8H7v8Z"/>
		<path v-else-if="props.name === 'vue'" d="M3 5h5l4 7 4-7h5l-9 14L3 5Z"/>
		<path v-else-if="props.name === 'html'" d="M4 3h16l-1.5 17.5L12 23l-6.5-2.5L4 3Zm4 5h8l-.3 3H8.5l.2 2H15l-.3 3-2.7 1-2.7-1-.2-2H6.5L6 8h2Z"/>
		<path v-else-if="props.name === 'css'" d="M4 3h16l-1.5 17.5L12 23l-6.5-2.5L4 3Zm4 5h8l-.3 3H8.5l.2 2H15l-.3 3-2.7 1-2.7-1-.2-2H6.5l-.2-3H8Z"/>
		<path v-else-if="props.name === 'figma'" d="M10 2h4a4 4 0 0 1 0 8h-4V2Zm0 8h4a4 4 0 1 1 0 8h-4v-8Zm0 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM6 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4Zm0 8a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4Z"/>
		<path v-else-if="props.name === 'ml'" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Zm5 2h2v6H9V9Zm4 0h2v6h-2V9Z"/>
		<path v-else-if="props.name === 'ai'" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 5 5 3v4l-5 3-5-3V10l5-3Z"/>
		<path v-else-if="props.name === 'arrowRight'" d="M13 5l7 7-7 7v-4H4v-6h9V5Z"/>
		<path v-else-if="props.name === 'mail'" d="M20 4H4a2 2 0 0 0-2 2v1.2l10 5.8 10-5.8V6a2 2 0 0 0-2-2Zm0 6.4-8 4.6-8-4.6V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6Z"/>
		<path v-else d="M3 5h5l4 7 4-7h5l-9 14L3 5Z"/>
	</svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ name: string; size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' });

const viewBox = '0 0 24 24';
const sizeClass = computed(() => ({ sm: 'icon--sm', md: 'icon--md', lg: 'icon--lg' }[props.size]));
</script>

<style scoped>
.icon { display: inline-block; color: currentColor; }
.icon--sm { width: 16px; height: 16px; }
.icon--md { width: 20px; height: 20px; }
.icon--lg { width: 24px; height: 24px; }
</style>


