<template>
	<article>
		<v-card v-if="!registered">
			<v-card-row class="light-blue darken-2 white--text">
				<v-card-title>
					Register Account
				</v-card-title>
			</v-card-row>
			<v-card-text>
				<div class="errorMessage">
					{{ errors.name }}
				</div>
				<v-text-input
					v-model="form.name"
					label="Account name"
				></v-text-input>
				<div class="errorMessage">
					{{ errors.email }}
				</div>
				<v-text-input
					v-model="form.email"
					label="Email address"
					type="email"
				></v-text-input>
				<div class="errorMessage">
					{{ errors.password }}
				</div>
				<v-text-input
					v-model="form.password"
					label="Password"
					type="password"
				></v-text-input>
				<v-text-input
					v-model="form.password2"
					label="Password again"
					type="password"
				></v-text-input>
				<div class="errorMessage">
					{{ errors.confirm }}
				</div>
				<v-checkbox
					id="alibaba"
					v-model="form.confirm"
					label="I have read and understood the server rules."
				></v-checkbox>
				<v-btn
					outline
					class="primary primary--text"
					@click.native="submit"
				>Register</v-btn>
			</v-card-text>
		</v-card>
		<v-card v-if="registered">
			<h1>Registration success</h1>
			<router-link to="/login">
				<ui-button
					icon="exit_to_app"
					color="primary"
				>Go to login</ui-button>
			</router-link>
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
				email: '',
				password: '',
				password2: '',
				confirm: false
			},
			errors: {
				name: '',
				email: '',
				password: '',
				confirm: '',
			},
			loading: false,
			registered: false
		}
	},
	computed: {
		payload: function() {
			return {
				name: this.form.name,
				email: this.form.email,
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
			this.errors = {}
			
			if (!/^[a-zA-Z0-9]{2,12}$/.test(this.form.name)) {
				this.errors.name = 'Account name must have 2-12 characters.'
				return
			}
			if (!/\S+@\S+\.\S+/.test(this.form.email)) {
				this.errors.email = 'Please enter a valid email.'
				return
			}
			if (!/^(.{2,20}|.{40})$/.test(this.form.password)) {
				this.errors.password = 'Password must have 2-20 characters'
				return
			}
			if (this.form.password !== this.form.password2) {
				this.errors.password = 'Passwords didn\'t match.'
				return
			}
			if (!this.form.confirm) {
				this.errors.confirm = 'Please confirm that you have read the rules.'
				return
			}
			
			this.loading = true
			Api.action(this, 'post', 'account', this.payload)
			Api.commit(response => {
				this.loading = false
				
				if (response.status !== 200) {
					this.errors.name = response.body.message
					console.log(response)
					//return
				}
				
				//this.registered = true
				console.log('success', response)
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
