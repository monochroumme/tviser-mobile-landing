<template>
	<div class="functionality">
		<div class="container">
			<h2 class="common-title">{{ $content.functionality.title }}</h2>
			<div class="functionality__items">
				<div class="center">
					<img :src="$content.functionality['center-pic']" :alt="$content.functionality['center-pic-alt']">
				</div>
				<div class="item" v-for="(item, i) in $content.functionality.items" :key="i">
					<img :src="item.pic" :alt="item['pic-alt']" class="common-icon">
					<h2 class="item__title">{{ item.title }}</h2>
					<h3 class="item__subtitle">{{ item.subtitle }}</h3>
					<span class="item__additional">{{ item.additional }}</span>
				</div>
			</div>
		</div>
	</div>
</template>