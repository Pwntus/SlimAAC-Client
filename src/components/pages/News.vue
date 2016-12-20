<template>
	<article>
		<div v-if="posts">
			<v-card v-for="post in posts">
				<v-card-row img="http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg" height="300px"></v-card-row>
				<v-card-row class="grey darken-3 white--text">
					<v-card-title>
						{{ post.title }}
					</v-card-title>
				</v-card-row>
				<v-card-text>
					{{ post.content }}
				</v-card-text>
				<v-card-row class="grey lighten-4" actions>
					{{ post.date }}
					<div class="spacer"></div>
					<v-icon class="grey--text">access_time</v-icon>
				</v-card-row>
			</v-card>
		</div>
	</article>
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
/*.card h2 {
	margin-bottom: 10px;
	font-size: 14px;
	color: #2a8fbd;
}*/
.card {
	margin-bottom: 25px;
}
</style>
