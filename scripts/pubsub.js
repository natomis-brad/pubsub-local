var PubSub = PubSub ||
    (function (w, d, $) {
        "use strict";

        var functions = functions || {};

        function publish(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
            
            if (containsKey(key) == true) {
               functions[key](data);
            }
            
        }

        function subscribe(key, listener) {
            //
            if (w.addEventListener) {
                w.addEventListener("storage", onStorage, false);
              } else {
                w.attachEvent("onstorage", onStorage);
              };

              functions[key] = listener;
        }

        function onStorage(event){
            var thisKey = event.key;
            var thisFunction = functions[thisKey];
            thisFunction(event.newValue);
        }


        function containsKey(key) {
            if (functions.hasOwnProperty(key)) {
                return true
            }
            return false;
        }
        return {
            Publish: publish,
            Subscribe: subscribe
        };
    })(window, document, jQuery);