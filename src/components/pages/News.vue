<template>
	<v-container fluid content>
		<v-row v-if="posts">
			<v-col xs12 lg6>
				<v-card v-for="post in posts">
					<v-parallax src="http://static.tibia.com/images/abouttibia/tibia_screenshot_39.png" height="250"></v-parallax>
					<v-card-row class="light-blue darken-3 white--text">
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
			</v-col>
		</v-row>
	</v-container>
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
.card {
	margin-bottom: 25px;
}
</style>
