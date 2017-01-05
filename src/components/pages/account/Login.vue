<template>
	<v-container fluid content>
		<v-row>
			<v-col xs12 lg6>
				<v-alert error hide-icon>
					{{ error }}
				</v-alert>
				<v-card class="light-blue darken-2">
					<v-card-row class="white--text">
						<v-card-title>
							Login
						</v-card-title>
					</v-card-row>
					<v-card-text class="white">
						<v-text-input
							v-model="name"
							label="Account name"
						></v-text-input>
						<v-text-input
							v-model="password"
							label="Password"
							type="password"
						></v-text-input>
						<v-btn
							outline
							class="primary primary--text"
							@click.native="submit"
						>Login</v-btn>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data () {
		return {
			name: null,
			password: null,
			error: null
		}
	},
	computed: mapGetters([
		'authLevel',
		'httpError'
	]),
	watch: {
		authLevel: function (value) {
			if (value > 0)
				this.$router.push({ path: '/account' })
		},
		httpError: function (value) {
			if (value !== null)
				this.error = value
		}
	},
	methods: {
		submit () {
			this.$store.dispatch('auth', {
				name: this.name,
				password: this.password
			})
		}
	}
}
</script>

<style scoped>
.alert {
	margin-bottom: 20px;
}
</style>
