var TestScript = TestScript ||
    (function (w, d, $) {
        "use strict";

        var pageTopics = {
            'LogOut': 'LogOut',
            'SaveItem': 'SaveItem',
            'Clicked': 'Clicked'
        }

        function init() {
            subscribe(pageTopics.Clicked, logger);
            listenForClicks();
        }

        function subscribe(topic, delegate) {
            PubSub.Subscribe(topic, delegate)
        }

        function publish(topic, payload) {
            PubSub.Publish(topic, payload);
        }

        function logger() {
            var d = new Date();
            $("#results").html(arguments[0]);
        }

        function listenForClicks() {
            $(d.body)
                .on("click",
                    ".dialogLink",
                    function () {
                        var d = new Date();
                        publish(pageTopics.Clicked, ["Something was clicked", d.getTime()]);
                    });
            $(d.body)
                .on("click",
                    ".normaLink",
                    function () {
                        if($(this).attr('newTarget')){
                            var win = window.open($(this).attr('newTarget'), '_blank');
                            win.focus();
                        }
                    });
        }

        return {
            Init: init
        };
    })(window, document, jQuery);