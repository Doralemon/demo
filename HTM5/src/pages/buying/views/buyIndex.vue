<template>
	<div class='preference buy'>
        <!-- 头部 -->
        <heads :titleName="title"></heads>
       <!-- 疯抢导航 -->
       <div class="buyNav">
       		<div class="">
       			<div @click="changeNav(1)">
       				<p>今天</p>
       				<p>抢购进行中</p>
       			</div>
       			<div @click="changeNav(2)">
       				<p>明天</p>
       				<p>即将开放</p>
       			</div>
       		</div>
	       	
	       	<div :class="{active: slide}">
	       		<div></div>
	       	</div>
       </div>
       
       <!--疯抢列表-->
       <div class="list">
       	   <ul>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   	<router-link tag="li"  :to="{name:'buyDetail'}">
       	   	 	<div>
       	   	 		<img src="../../../assets/img/qiang.png"/>
       	   	 	</div>
       	   	 	<div class="content">
       	   	 		<p>【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
       	   	 		<div class="price">
       	   	 			<div class="newPrice">
       	   	 				<p>￥18.90</p>
       	   	 				<p>限时特价<span>/份</span></p>
       	   	 			</div>
       	   	 			<div class="oldPrice">
       	   	 				<p>￥20.00</p>
       	   	 				<p>
       	   	 					平日价/份
       	   	 				</p>
       	   	 			</div>
       	   	 		</div>
       	   	 		<div class="sub">
       	   	 			立即抢购
       	   	 		</div>
       	   	 	</div>
       	   	</router-link>
       	   </ul>
       </div>
    </div>
</template>

<script>
	import heads from '../../../components/head.vue'
	export default {
    data(){
        return{
           title:"疯抢",
           slide:false
        }
    },
    components:{
    	heads
    },
    beforeCreate () {
        
    },
    created () {
       
    }, 
    methods:{
    	changeNav(num){
    		console.log(1);
    		num==2?this.slide=true:this.slide=false;
    	}
//    goAndroid(){
//       window.WebViewJavascriptBridge.callHandler(
//              'backNative',//data发送给native
//              // function(responseData) {//接收onCallBack回传回来的数据
//              //     document.getElementById("show").innerHTML = responseData;
//              // }
//          );
//    }
    }    
}
</script>

<style>
</style>