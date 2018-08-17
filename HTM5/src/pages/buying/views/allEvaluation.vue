<template>
	<div>
		<headcont :titleName="title"></headcont>
		<div>
			<evaluation>
				
			</evaluation>
		</div>
	</div>
</template>

<script>
import headcont from "../../../components/head.vue"
	import evaluation from "../../../components/comment.vue"
	export default{
		data(){
			return {
				title:"全部评价"
			}
		},
		components:{
			headcont,
			evaluation
		}
	}
</script>

<style>
	
</style>