$(function(){
    $(window).on('resize',function(){
        // 获得窗口的宽度
        let clientW =$(window).width();
        // 设置临界点
        let isShowBigImg = clientW >= 900;
        // 获取所有item
        let allItem = $('#R_carouse_1 .carousel-inner .carousel-item');
        // console.log(allItem);
        //遍历
        allItem.each((index,item) => {
            console.log(item);
        })

    }).trigger('resize');
})