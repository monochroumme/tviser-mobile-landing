<template>
	<div class="examples">
		<div class="container">
			<h2 class="common-title">{{ $content.examples.title }}</h2>
			<h3 class="common-subtitle">{{ $content.examples.subtitle }}</h3>
			<div class="slider">
				<div class="swiper-button-prev swiper-button-prev-examples"></div>
				<div class="swiper-button-next swiper-button-next-examples"></div>
				<div class="slider__inner">
					<div v-swiper:mySwiper="swiperOption">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item, i) in $content.examples.items" :key="i">
								<img :src="item.pic" :alt="item.alt">
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination swiper-pagination-examples"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 35,
				navigation: {
					nextEl: '.swiper-button-next-examples',
					prevEl: '.swiper-button-prev-examples',
				},
				pagination: {
					el: '.swiper-pagination-examples',
					type: 'bullets'
				}
			}
		}
	}
}

</script>
