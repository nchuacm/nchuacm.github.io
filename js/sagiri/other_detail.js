const other_detail = {
	/* 使用图片镜像，加速图片加载速度 */
	use_img_mirror: function(prefix) {
		var imgs = document.getElementsByTagName("img");
		for(var i = 0; i < imgs.length; i++) {
			img_src = imgs[i].src;
			ind = img_src.indexOf("images");
			if(ind >= 0) {
				imgs[i].src = prefix + img_src.substring(ind);
			}
		}
	}
}

$(function () {
	if (window.CONFIG.img_mirror.enable) {
		other_detail.use_img_mirror(window.CONFIG.img_mirror.prefix);
	}
})
