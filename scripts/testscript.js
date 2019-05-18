var TestScript = TestScript ||
(function(w, d, $) {
    "use strict";

    var 
    dp = "",
    pid = "";

    var pageTopics ={
        'LogOut' : 'LogOut',
        'SaveItem' : 'SaveItem',
        'Clicked' :'Clicked'
    }

    function init() {
        var d = new Date();
        pid = d.getTime();
        dp = location.href.split(location.pathname)[0] + "/";
        subscribe(pageTopics.Clicked,logger);
        listenForClicks();
    }

    function subscribe(topic,delegate){
        PubSub.Subscribe(topic,delegate)
    }

    function publish(topic,payload){
        PubSub.Publish(topic,payload);
    }

    function unsubscribe(topic){
        $.unsubscribe(topic);
    }

    function getPageId(){
        return pid;
    }
    
    function logger(){
        var d = new Date();
        $( "#results" ).html(arguments[0]);
    }

    function listenForClicks(){
        $(d.body)
            .on("click",
                ".dialogLink",
                function() {
                    var d = new Date();
                    publish(pageTopics.Clicked, ["Something was clicked" ,d.getTime()]);
                });
    }

    return {
        Init: init,
        PageId: getPageId
    };
})(window, document, jQuery);