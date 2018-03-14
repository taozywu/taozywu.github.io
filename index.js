$(function() {
	init();

	function init() {
		var bussinessTop = $('#bussiness').height(); // 354
		var memberTop = bussinessTop + $('#member').height(); // 745
		var productionTop = memberTop + $('#production').height(); // 1016

		console.log($('#bussiness').height(), $('#member').height(), $('#production').height());

		$(".nav-item a").click(function(event) {
            var $it = $(this),scrollTop = 0;
            switch ($it.attr("href")) {
                // case "#top":
                //     break;
                case "#business":
                    break;
                case "#member":
                    scrollTop = bussinessTop + 20;
                    break;
                case "#production":
                    scrollTop = memberTop + 60;
                    break;
                case "#concat":
                    scrollTop = productionTop + 100;
                    break;
                default:
                    break;
            }

            $('html, body').animate({scrollTop: scrollTop + 'px'}, 800);
            event.preventDefault();
            return false;
        })            
	}
})

// 注： 滚动效果到作品介绍上不去是因为内容太少 到底了





// window.onscroll = function() {
// 	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

// 	console.log(scrollTop);

// }



