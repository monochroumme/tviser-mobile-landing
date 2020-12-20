<template>
	<div class="package">
		<div class="container">
			<h2 class="common-title">{{ $content.package.title }}</h2>
			<div class="package__content">
				<div class="specialist">
					<img :src="$content.package.person.pic" :alt="$content.package.person.title" class="specialist__pic">
					<div class="specialist__info">
						<span class="specialist__name">{{ $content.package.person.name }}</span>
						<span class="specialist__position">{{ $content.package.person.position }}</span>
					</div>
				</div>
				<div class="checklist">
					<ul>
						<li v-for="(step, i) in $content.package.steps" :key="i">
							<span>{{ step }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>