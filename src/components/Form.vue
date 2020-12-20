<template>
	<div class="form">
		<div class="container">
			<h2 class="common-title" v-html="$content.form.title" />
			<div class="form__content">
				<div class="form__part">
					<h3 class="form__title--small">{{ $content.form.contact }}</h3>
					<input type="text" v-model="name" class="form__input" :placeholder="$content.form.name">
					<input type="text" v-model="phone" class="form__input" :placeholder="$content.form.phone">
					<input type="email" v-model="email" class="form__input" :placeholder="$content.form.email">
					<input type="text" v-model="projectDescription" class="form__input" :placeholder="$content.form['project-description']">
				</div>
				<div class="form__part">
					<h3 class="form__title--small">{{ $content.form.budget }}</h3>
					<div class="form__radios">
						<div class="form__radio" :class="{active: chosenPriceIndex == 1}" @click="chosenPriceIndex = 1">
							<div class="radio"></div>
							<span>
								{{ $content.form.prices[0] }}
								<img src="/svg/ruble-white-m.svg" alt="ruble" v-if="$content.form.currency == 'RUB'">
								-
								{{ $content.form.prices[1] }}
								<img src="/svg/ruble-white-m.svg" alt="ruble" v-if="$content.form.currency == 'RUB'">
							</span>
						</div>
						<div class="form__radio" :class="{active: chosenPriceIndex == 2}" @click="chosenPriceIndex = 2">
							<div class="radio"></div>
							<span>
								{{ $content.form.prices[1] }}
								<img src="/svg/ruble-white-m.svg" alt="ruble" v-if="$content.form.currency == 'RUB'">
								-
								{{ $content.form.prices[2] }}
								<img src="/svg/ruble-white-m.svg" alt="ruble" v-if="$content.form.currency == 'RUB'">
							</span>
						</div>
						<div class="form__radio" :class="{active: chosenPriceIndex == 3}" @click="chosenPriceIndex = 3">
							<div class="radio"></div>
							<span>
								{{ $content.form.prices[2] }}
								<img src="/svg/ruble-white-m.svg" alt="ruble" v-if="$content.form.currency == 'RUB'">
								- ...
							</span>
						</div>
						<div class="form__radio" :class="{active: chosenPriceIndex == 4}" @click="chosenPriceIndex = 4">
							<div class="radio"></div>
							<span>
								{{ $content.form['free-consultation'] }}
							</span>
						</div>
					</div>
					<button class="common-button form__button" @click="submit">
						<span>{{ $content.form.submit }}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			phone: '',
			email: '',
			projectDescription: '',
			chosenPriceIndex: 1
		}
	},

	methods: {
		submit() {

		}
	}
}
</script>