<template>
	<div class="presentation">
		<img :src="$content.presentation.bg" :alt="$content.presentation['bg-alt']" class="presentation__bg">
		<div class="container">
			<h2 class="common-title">{{ $content.presentation.title }}</h2>
			<img src="/svg/dropdown-gray.svg" alt="dropdown" class="presentation__dropdown">
			<button class="common-button">
				<span>{{ $content.presentation.button }}</span>
			</button>
		</div>
	</div>
</template>