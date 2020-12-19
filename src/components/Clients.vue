<template>
	<div class="clients">
		<div class="container">
			<h2 class="common-title">{{ $content.clients.title }}</h2>
			<div v-swiper:mySwiper="swiperOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, i) in $content.clients.items" :key="i">
						<div class="clients__slide">
							<img :src="item.pic" :alt="item.alt">
						</div>
					</div>
				</div>
				<div class="swiper-pagination swiper-pagination-clients"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 4,
				spaceBetween: 25,
				pagination: {
					el: '.swiper-pagination-clients',
					type: 'bullets'
				}
			}
		}
	}
}

</script>