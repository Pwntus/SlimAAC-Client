<template>
	<article>
		<v-card>
			<v-card-row class="light-blue darken-2 white--text">
				<v-card-title>
					Login
				</v-card-title>
			</v-card-row>
			<v-card-text>
				<v-text-input
					v-model="form.name"
					label="Account name"
				></v-text-input>
				<v-text-input
					v-model="form.password"
					label="Password"
					type="password"
				></v-text-input>
				<v-btn
					outline
					class="primary primary--text"
					@click.native="submit"
				>Login</v-btn>
				<div class="errorMessage">
					{{ error }}
				</div>
			</v-card-text>
		</v-card>
	</article>
</template>

<script>
import Api from '../../../api'

export default {
	data () {
		return {
			form: {
				name: '',
				password: ''
			},
			error: '',
			loading: false
		}
	},
	computed: {
		payload: function() {
			return {
				name: this.form.name,
				password: this.form.password
			}
		}
	},
	watch: {
		loading: function (value) {
			this.$store.dispatch('setPageLoading', value)
		}
	},
	methods: {
		submit () {
			this.error = ''
			
			if (this.form.name == '' || this.form.password == '')
				return
			
			this.loading = true
			Api.action(this, 'post', 'oauth', this.payload)
			Api.commit(response => {
				this.loading = false
				
				if (response.status !== 200) {
					this.error = response.body.message
					return
				}
				
				this.$store.dispatch('setAuthUser', response.body)
			})
		}
	}
}
</script>

<style scoped>
.errorMessage {
	color: #f44336;
}
</style>
