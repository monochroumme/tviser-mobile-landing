<template>
	<div class="why">
		<div class="container">
			<h2 class="common-title">{{ $content.why.title }}</h2>
			<h3 class="common-subtitle">{{ $content.why.subtitle }}</h3>
			<div class="why__items">
				<div class="why__item" v-for="(item, i) in $content.why.items" :key="i">
					<img :src="item.pic" :alt="item['pic-alt']" class="common-icon">
					<span class="common-text">{{ item.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>