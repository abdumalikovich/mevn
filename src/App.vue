<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */

export default {
	name: 'app',
	components: {
	}
}
</script>

<style>
@import '../public/css/fonts.css';
@import '../public/css/normalize.css';
@import '../public/css/style.css';
@import '../public/css/media.css';
</style>
