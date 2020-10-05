new Vue({
    el: '#app',
    methods: {
        // .htmlファイルから渡されたメッセージをログ出力
        onclick: function(message, e) {
            console.log(message);
            console.log(e);
        }
    }
});