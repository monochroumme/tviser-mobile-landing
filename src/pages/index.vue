<template>
	<div class="index-page">
		<Main />
		<Why />
		<Functionality />
		<Presentation />
		<Package />
		<Examples />
		<Clients />
		<Form />
	</div>
</template>
<script>
export default {
	name: 'IndexPage',

	components: {
		Main: () => import('@/components/Main'),
		Why: () => import('@/components/Why'),
		Functionality: () => import('@/components/Functionality'),
		Presentation: () => import('@/components/Presentation'),
		Package: () => import('@/components/Package'),
		Examples: () => import('@/components/Examples'),
		Clients: () => import('@/components/Clients'),
		Form: () => import('@/components/Form')
	}
}

</script>
<style lang="scss">
@import '@/assets/styles/index-page/index'

</style>
