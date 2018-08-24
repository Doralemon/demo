<template>
	
	<div>
		<headers :titleName="title"></headers>
		<div>
			<textarea></textarea>
		</div>
		<div>
			<el-upload action="https://jsonplaceholder.typicode.com/posts/"
	  list-type="picture-card"  :on-preview="handlePictureCardPreview"
	  :on-remove="handleRemove" accept="image/*" >
				<i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</div>
		<div class="test">
			<input type="file"  accept="image/*" />
		</div>
		<!--<input type="file" accept="image/png,image/jpg" capture="camera">-->
	</div>
</template>

<script>
	 
	export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        title:"评价"
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
//  components:{
//  	headers
//  }
  }
</script>

<style>
</style>