// 图片预加载
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "img/canting_o_0.jpg",
    "img/canting_o_1.jpg",
    "img/canting_o_2.jpg",
    "img/canting_o_3.jpg",
    "img/canting_o_4.jpg",
    "img/canting_o_5.jpg",
    "img/children_o_0.jpg",
    "img/children_o_1.jpg",
    "img/children_o_2.jpg",
    "img/children_o_3.jpg",
    "img/children_o_4.jpg",
    "img/children_o_5.jpg",
    "img/ciwo_o_0.jpg",
    "img/ciwo_o_1.jpg",
    "img/ciwo_o_2.jpg",
    "img/ciwo_o_3.jpg",
    "img/ciwo_o_4.jpg",
    "img/ciwo_o_5.jpg",
    "img/keting_o_0.jpg",
    "img/keting_o_1.jpg",
    "img/keting_o_2.jpg",
    "img/keting_o_3.jpg",
    "img/keting_o_4.jpg",
    "img/keting_o_5.jpg",
    "img/toilet_o_0.jpg",
    "img/toilet_o_1.jpg",
    "img/toilet_o_2.jpg",
    "img/toilet_o_3.jpg",
    "img/toilet_o_4.jpg",
    "img/toilet_o_5.jpg",
    "img/zhuwo_o_0.jpg",
    "img/zhuwo_o_1.jpg",
    "img/zhuwo_o_2.jpg",
    "img/zhuwo_o_3.jpg",
    "img/zhuwo_o_4.jpg",
    "img/zhuwo_o_5.jpg"
)