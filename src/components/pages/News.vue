<template>
	<div class="content">
		<div v-if="posts">
			<div class="card" v-for="post in posts">
				<h1>{{ post.title }}</h1>
				<h2>{{ post.date }}</h2>
				<article>{{ post.content }}</article>
			</div>
		</div>
	</div>
</template>

<script>
import Api from '../../api'

export default {
	data () {
		return {
			loading: false,
			posts: [],
			error: null
		}
	},
	created () {
		this.fetch()
	},
	watch: {
		'$route': 'fetch'	
	},
	methods: {
		fetch () {
			this.error = this.posts = null;
			this.$store.dispatch('setPageLoading', true)
				
			Api.action(this, 'get', 'news')
			Api.commit(response => {
				this.$store.dispatch('setPageLoading', false)
				this.posts = response.body
			})
		}
	}
}
</script>

<style scoped>
.card h2 {
	margin-bottom: 10px;
	font-size: 14px;
	color: #2a8fbd;
}
</style>
