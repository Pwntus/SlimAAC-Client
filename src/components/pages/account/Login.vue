<template>
	<v-container fluid content>
		<v-row>
			<v-col xs12 lg6>
				<v-alert error hide-icon v-model="alert">
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
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
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
			alert: false,
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
		error: function (value) {
			this.alert = value !== ''
		},
		loading: function (value) {
			this.$store.dispatch('setPageLoading', value)
		}
	},
	methods: {
		submit () {
			this.error = ''
			
			if (this.form.name == '' || this.form.password == '') {
				this.error = 'Who are you?'
				return
			}
			
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
.alert {
	margin-bottom: 20px;
}
</style>
