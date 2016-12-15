<template>
	<div class="content">
		<div class="card">
			<h1>Login</h1>
			
			<form @submit.prevent="submit">
				<div class="errorMessage">
					{{ error }}
				</div>
				<div class="group">
					<ui-textbox
						v-model="form.name"
						type="text"
						name="name"
						placeholder="Account name"
						icon="account_circle"
					></ui-textbox>
				</div>
				<div class="group">
					<ui-textbox
						v-model="form.password"
						type="password"
						name="password"
						placeholder="Password"
						icon="vpn_key"
					></ui-textbox>
				</div>
				<ui-button
					color="primary"
					type="flat"
					:loading="loading"
				>Login</ui-button>
			</form>
		</div>
	</div>
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
.group {
	height: 60px;
} .errorMessage {
	color: #f44336;
}
</style>
