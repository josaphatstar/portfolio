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
		<path v-else-if="props.name === 'sun'" d="M6.76 4.84 5.34 3.42 3.93 4.83l1.41 1.42 1.42-1.41ZM1 13h3v-2H1v2Zm10 10h2v-3h-2v3ZM20.07 4.83l-1.41-1.41-1.42 1.41 1.42 1.42 1.41-1.42ZM17 13h3v-2h-3v2ZM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM4.22 19.78l1.41 1.41 1.42-1.41-1.42-1.42-1.41 1.42ZM18.36 19.78l-1.42-1.42-1.41 1.42 1.41 1.41 1.42-1.41ZM11 1v3h2V1h-2Z"/>
		<path v-else-if="props.name === 'moon'" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
		<path v-else-if="props.name === 'github'" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.24 9.24 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.68.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
		<path v-else-if="props.name === 'linkedin'" d="M4.98 3.5C4.98 4.61 4.09 5.5 2.98 5.5S1 4.61 1 3.5 1.89 1.5 3 1.5s1.98.89 1.98 2ZM1.5 8h3v14h-3V8Zm7 0h2.86v1.98h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2.02 3.6 4.65V22h-3v-6.22c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V22h-3V8Z"/>
		<path v-else-if="props.name === 'external'" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
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


