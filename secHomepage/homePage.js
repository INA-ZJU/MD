var subheadProject=new Vue({
    el:'#subheadProject',
    methods:{
        showSub:function(){
            subheadProject.style.display = 'inline';
        },
        hideSub:function(){
            subheadProject.style.display = 'none';
        }
    }
})