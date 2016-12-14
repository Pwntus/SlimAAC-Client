<template>
	<div class="content">
		<div class="card" v-if="!registered">
			<h1>Register Account</h1>
			
			<form @submit.prevent="submit">
				<div class="errorMessage">
					{{ error.name }}
				</div>
				<div class="group">
					<ui-textbox
						id="register-name"
						v-model="form.name"
						type="text"
						name="name"
						:valid="false"
						validate-on-blur
						validationRules="required|min:6"
						placeholder="Account name"
						icon="account_circle"
					></ui-textbox>
				</div>
				<div class="errorMessage">
					{{ error.email }}
				</div>
				<div class="group">
					<ui-textbox
						v-model="form.email"
						type="email"
						name="email"
						validate-on-blur
						validationRules="required|email"
						placeholder="Email address"
						icon="email"
					></ui-textbox>
				</div>
				<div class="errorMessage">
					{{ error.password }}
				</div>
				<div class="group">
					<ui-textbox
						v-model="form.password"
						type="password"
						name="password"
						validate-on-blur
						validationRules="required"
						placeholder="Password"
						icon="vpn_key"
					></ui-textbox>
				</div>
				<div class="group">
					<ui-textbox
						v-model="form.password2"
						type="password"
						name="password2"
						validate-on-blur
						validationRules="required"
						placeholder="Password again"
						icon="vpn_key"
					></ui-textbox>
				</div>
				<div class="errorMessage">
					{{ error.confirm }}
				</div>
				<div class="group">
					<ui-checkbox
						v-model="form.confirm"
						name="confirm"
						validationRules="required"
					>I have read and understood the server rules.</ui-checkbox>
				</div>
				<ui-button
					color="primary"
					type="flat"
					:loading="loading"
				>Register</ui-button>
			</form>
		</div>
		<div class="card" v-if="registered">
			<h1>Registration success</h1>
			<router-link to="/login">
				<ui-button
					icon="exit_to_app"
					color="primary"
				>Go to login</ui-button>
			</router-link>
		</div>
	</div>
</template>

<script>
import Api from '../../../api/Api'

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
			error: {
				name: '',
				email: '',
				password: '',
				confirm: ''
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
			this.error.name = ''
			this.error.email = ''
			this.error.password = ''
			this.error.confirm = ''
			
			if (!/^[a-zA-Z0-9]{2,12}$/.test(this.form.name)) {
				this.error.name = 'Account name must have 2-12 characters.'
				return
			}
			if (!/\S+@\S+\.\S+/.test(this.form.email)) {
				this.error.name = 'Please enter a valid email.'
				return
			}
			if (!/^(.{2,20}|.{40})$/.test(this.form.password)) {
				this.error.password = 'Password must have 2-20 characters'
				return
			}
			if (this.form.password !== this.form.password2) {
				this.error.password = 'Passwords didn\'t match.'
				return
			}
			if (!this.form.confirm) {
				this.error.confirm = 'Please confirm that you have read the rules.'
				return
			}
			
			this.loading = true
			Api.action(this, 'post', 'account', this.payload)
			Api.commit(response => {
				this.loading = false
				
				if (response.status !== 200) {
					this.error.name = response.body.message
					return
				}
				
				this.registered = true
				console.log('success', response)
			})
		}
	}
}
</script>

<style scoped>
.group {
	height: 60px;
} .errorMessage {
	color: #f44336;
}
</style>
