<template>
	<section>
		财务报表{{rrr}}
	</section>
</template>

<script>
	import util from '../../common/js/util'
	import bus from '../../common/js/commonvue'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				rrr:""
			}
		},
		methods: {
			
		},
		created(){
			bus.$on('test-111',(msg)=>{
				alert(msg)
				this.rrr = msg
				console.log(this.rrr)
			})
		},
		mounted() {
			
		}
	}

</script>

<style scoped>

</style>