
    $(document).ready(function(){
        $(".post-view[data-id]").each(function() {
            var l = $(this).parent().find("#postviews").addClass("view-load"),
                i = new Firebase("https://ki-test-23822-default-rtdb.firebaseio.com/pages/id/" + $(this).attr("data-id"));
            i.once("value", function(snapshot) {
                var n = snapshot.val(),
                    t = !1;
                if (n == null) {
                    n = { value: 0, url: window.location.href, id: $(this).attr("data-id") };
                    t = !0;
                }
                l.removeClass("view-load").text(n.value);
                n.value++;
                if (window.location.pathname !== "/") {
                    if (t) {
                        i.set(n);
                    } else {
                        i.child("value").set(n.value);
                    }
                }
            }.bind(this));
        });
    });
