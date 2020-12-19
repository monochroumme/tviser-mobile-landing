<template>
	<div class="main">
		<div class="container">
			<div class="main__info">
				<h1 class="common-title">{{ $content.main.title }}</h1>
				<h3 class="common-subtitle">{{ $content.main.subtitle }}</h3>
				<button class="common-button">
					<span>{{ $content.main.button }}</span>
				</button>
			</div>
			<div class="main__pic">
				<img :src="$content.main.pic" :alt="$content.main['pic-alt']">
			</div>
		</div>
	</div>
</template>
