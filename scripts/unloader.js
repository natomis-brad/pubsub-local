var Unloader = Unloader ||
    (function (w, d, $) {
        "use strict";

        function init() {

            window.addEventListener('beforeunload', function (e) {
                // Cancel the event
                e.preventDefault();
                // Chrome requires returnValue to be set
                e.returnValue = '';
                return true;
              });
/*
            w.onbeforeunload = function (e) {
                e = e || window.event;
            
                // For IE and Firefox prior to version 4
                if (e) {
                    e.returnValue = 'Sure?';
                }
            
                // For Safari
                return 'Sure?';
            };
            */
        }
   
        function beforeUnload(event){
            var p = event;
            return true; // prevents page from unloading!
           // return false; // allows page to unload!


        }

       return {
            Init: init
        };
    })(window, document, jQuery);