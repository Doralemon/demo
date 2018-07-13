<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu theme="dark" class="el-menu-vertical-demo" :router="true">
                        <el-menu-item index="/home">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-submenu index="/goods/list">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">商品管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/goods/list">商品列表</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="/statical">
                            <i class="el-icon-menu"></i>
                            <span slot="title">统计报表</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>

                <el-main>
                    <transition>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </el-main>

            </el-container>

        </el-container>

    </div>
</template>

<script>
export default {

    data() {
        return {}
    },
    methods: {
        //退出登录

        logout: function () {

            var _this = this;

            this.$confirm('确认退出吗?', '提示', {

                //type: 'warning'

            }).then(() => {

                sessionStorage.removeItem('user');

                _this.$router.push('/login');

            }).catch(() => {

            });

        },

    },

    created() {

        console.log(this.$router.options.routes)

    },

    mounted() {

        var user = sessionStorage.getItem('user');

        if (user) {

            user = JSON.parse(user);

            this.sysUserName = user.name || '';

            this.sysUserAvatar = user.avatar || '';

        }

    }

}
</script>

<style lang="scss" scoped>
$color-primary:black;
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
        height: 60px;
        line-height: 60px;
        background: $color-primary;
        color: #fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color: #fff;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float: right;
                }
            }
        }
        .logo {
            //width:230px;
            height: 60px;
            font-size: 22px;
            padding-left: 20px;
            padding-right: 20px;
            border-color: rgba(238, 241, 146, 0.3);
            border-right-width: 1px;
            border-right-style: solid;
            img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
            }
            .txt {
                color: #fff;
            }
        }
        .logo-width {
            width: 230px;
        }
        .logo-collapse-width {
            width: 60px
        }
        .tools {
            padding: 0px 23px;
            width: 14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .main {
        display: flex; // background: #324057;
        position: absolute;
        top: 60px;
        bottom: 0px;
        overflow: hidden;
        aside {
            flex: 0 0 230px;
            width: 230px; // position: absolute;
            // top: 0px;
            // bottom: 0px;
            .el-menu {
                height: 100%;
            }
            .collapsed {
                width: 60px;
                .item {
                    position: relative;
                }
                .submenu {
                    position: absolute;
                    top: 0px;
                    left: 60px;
                    z-index: 99999;
                    height: auto;
                    display: none;
                }
            }
        }
        .menu-collapsed {
            flex: 0 0 60px;
            width: 60px;
        }
        .menu-expanded {
            flex: 0 0 230px;
            width: 230px;
        }
        .content-container {
            // background: #f1f2f7;
            flex: 1; // position: absolute;
            // right: 0px;
            // top: 0px;
            // bottom: 0px;
            // left: 230px;
            overflow-y: scroll;
            padding: 20px;
            .breadcrumb-container {
                //margin-bottom: 15px;
                .title {
                    width: 200px;
                    float: left;
                    color: #475669;
                }
                .breadcrumb-inner {
                    float: right;
                }
            }
            .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
}
</style>
