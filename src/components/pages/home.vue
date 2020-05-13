<template>
	<div class="body-home">
		<layoutHeader/>

		<div class="screen-one">
			
		</div>

		<layoutFooter/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import layoutHeader from '../layouts/header'
import layoutFooter from '../layouts/footer'

export default {
	computed: {
		...mapGetters([

		])
	},
	methods: {
		...mapActions([
			
		])
	},
	components: {
		layoutHeader,
		layoutFooter,
	},
}
</script>

<style>

</style>
