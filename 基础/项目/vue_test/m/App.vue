<template>
    <div class="content">
        <div class="top">
            <span>分类</span>
        </div>
        <cube-scroll-nav
        class="sidebar"
        :side="true"
        :data="goods"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <cube-scroll-nav-panel
        class="pic-list"
            v-for="item in goods"
            :key="item.name"
            :label="item.name"
            :title="item.name">
            <ul>
            <li v-for="(food, index) in item.foods" :key="index">
                <div>
                <img :src="food.icon">
                <p>{{food.name}}</p>
                </div>
            </li>
            </ul>
        </cube-scroll-nav-panel>
        </cube-scroll-nav>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeKey: 0,
            current: "皮蛋瘦肉粥",
            goods: [
                {
                    "name": "热销榜",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜2",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                },
                {
                    "name": "热销榜3",
                    "type": -1,
                    "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    ]
                }
            ]
        }
    },
    methods: {
        changeHandler(label) {
            console.log('changed to:', label)
        },
        stickyChangeHandler(current) {
            console.log('sticky-change', current)
        }
    }
}
</script>
<style lang="less">
.content {
    .top {
        background-color: #E91E63;
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 18px;
            color: #fff;
        }
    }
    .sidebar {
        position: fixed;
        top: 35px;
        left: 0;
    }
    .pic-list {
        ul li div img {
            width: 80px;
            height: 80px;
        }
    }
}
</style>