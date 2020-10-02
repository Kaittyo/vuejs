new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田'
        }
    },
    mounted: function() {
        Vue.set(this.author, 'company', 'WINGSプロジェクト');
        // <div id="app">配下にcompanyプロパティの内容が含まれているか
        let that = this;
        this.$nextTick().then(function() {
            // ビューへの反映を待ってから確認
            console.log(that.$el.textContent.includes(that.author.company));
        })
    }
});