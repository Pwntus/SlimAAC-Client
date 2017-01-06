<template>
	<v-container fluid content>
		<v-row v-if="posts">
			<v-col xs12 lg8 offset-lg2>
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
			<slot></slot>
		</v-row>
	</v-container>
</template>

<script>
import * as type from '../../store/mutation-types'
import {newsService} from '../../services'

export default {
	data () {
		return {
			loading: false,
			posts: [],
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
			this.posts = null;
			this.$store.dispatch('setPageLoading', true)
			newsService.getNews()
				.then((response) => {
					this.$store.dispatch('setPageLoading', false)
					this.posts = response
				})
				.catch((error) => this.$store.commit(type.HTTP_ERROR, true))
		}
	}
}
</script>

<style scoped>
.card {
	margin-bottom: 25px;
}
</style>
