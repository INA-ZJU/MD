var indexContent = new Vue({
	el: '#index',
	methods: {
		first: function(){
			document.querySelector('.section_zero').style.display = 'none';
			document.querySelector('.section_one').style.display = 'inline-block';
			document.querySelector('.section_two').style.display = 'none';
			document.querySelector('.section_three').style.display = 'none';
			document.querySelector('.section_foth').style.display = 'none';
			document.querySelector('.section_five').style.display = 'none';
			
//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '';
			document.querySelector('.left_nav_one').className = 'active left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '1';
			document.querySelector('.left_nav_two').className = 'left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '';
			document.querySelector('.left_nav_three').className = 'left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '';
			document.querySelector('.left_nav_foth').className = 'left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '';
			document.querySelector('.left_nav_five').className = 'left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '';
		},
		firstLeave: function(){
			document.querySelector('.section_zero').style.display = 'inline-block';
			document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_two').style.display = 'none';
			document.querySelector('.section_three').style.display = 'none';
			document.querySelector('.section_foth').style.display = 'none';
			document.querySelector('.section_five').style.display = 'none';
			//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'active left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '0';
			document.querySelector('.left_nav_one').className = 'left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '';
			document.querySelector('.left_nav_two').className = 'left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '';
			document.querySelector('.left_nav_three').className = 'left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '';
			document.querySelector('.left_nav_foth').className = 'left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '';
			document.querySelector('.left_nav_five').className = 'left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '';
		},
		second: function(){
			document.querySelector('.section_zero').style.display = 'none';
			document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_two').style.display = 'inline-block';
			document.querySelector('.section_three').style.display = 'none';
			document.querySelector('.section_foth').style.display = 'none';
			document.querySelector('.section_five').style.display = 'none';
			
//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '';
			document.querySelector('.left_nav_one').className = 'left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '';
			document.querySelector('.left_nav_two').className = 'active left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '2';
			document.querySelector('.left_nav_three').className = 'left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '';
			document.querySelector('.left_nav_foth').className = 'left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '';
			document.querySelector('.left_nav_five').className = 'left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '';
		},
		three: function(){
			document.querySelector('.section_zero').style.display = 'none';
			document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_two').style.display = 'none';
			document.querySelector('.section_three').style.display = 'inline-block';
			document.querySelector('.section_foth').style.display = 'none';
			document.querySelector('.section_five').style.display = 'none';
			
//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '';
			document.querySelector('.left_nav_one').className = 'left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '';
			document.querySelector('.left_nav_two').className = 'left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '';
			document.querySelector('.left_nav_three').className = 'active left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '3';
			document.querySelector('.left_nav_foth').className = 'left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '';
			document.querySelector('.left_nav_five').className = 'left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '';
		},
		fonth: function(){
			document.querySelector('.section_zero').style.display = 'none';document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_two').style.display = 'none';
			document.querySelector('.section_three').style.display = 'none';
			document.querySelector('.section_foth').style.display = 'inline-block';
			document.querySelector('.section_five').style.display = 'none';
			
//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '';
			document.querySelector('.left_nav_one').className = 'left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '';
			document.querySelector('.left_nav_two').className = 'left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '';
			document.querySelector('.left_nav_three').className = 'left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '';
			document.querySelector('.left_nav_foth').className = 'active left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '4';
			document.querySelector('.left_nav_five').className = 'left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '';
			
		},
		five: function(){
			document.querySelector('.section_zero').style.display = 'none';
			document.querySelector('.section_one').style.display = 'none';
			document.querySelector('.section_two').style.display = 'none';
			document.querySelector('.section_three').style.display = 'none';
			document.querySelector('.section_foth').style.display = 'none';
			document.querySelector('.section_five').style.display = 'inline-block';
			
//			设置左边导航栏
			document.querySelector('.left_nav_zero').className = 'left_nav_zero';
			document.querySelector('.left_nav_zero span').innerHTML = '';
			document.querySelector('.left_nav_one').className = 'left_nav_one';
			document.querySelector('.left_nav_one span').innerHTML = '';
			document.querySelector('.left_nav_two').className = 'left_nav_two';
			document.querySelector('.left_nav_two span').innerHTML = '';
			document.querySelector('.left_nav_three').className = 'left_nav_three';
			document.querySelector('.left_nav_three span').innerHTML = '';
			document.querySelector('.left_nav_foth').className = 'left_nav_foth';
			document.querySelector('.left_nav_foth span').innerHTML = '';
			document.querySelector('.left_nav_five').className = 'active left_nav_five';
			document.querySelector('.left_nav_five span').innerHTML = '5';
		}
	}
})