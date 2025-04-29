{% load static %}
<script src="{% static 'assets/js/core/jquery.3.2.1.min.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/core/popper.min.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/core/bootstrap.min.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/bootstrap-switch.js' %}"></script>
<script src="{% static 'assets/js/plugins/chartist.min.js' %}"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>

<script src="{% static 'assets/js/plugins/bootstrap-notify.js' %}"></script>
<script src="{% static 'assets/js/plugins/jquery.sharrre.js' %}"></script>
<script src="{% static 'assets/js/plugins/jquery-jvectormap.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/moment.min.js' %}"></script>
<script src="{% static 'assets/js/plugins/bootstrap-datetimepicker.js' %}"></script>
<script src="{% static 'assets/js/plugins/sweetalert2.min.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/bootstrap-tagsinput.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/nouislider.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/bootstrap-selectpicker.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/jquery.validate.min.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/plugins/jquery.bootstrap-wizard.js' %}"></script>
<script src="{% static 'assets/js/plugins/bootstrap-table.js' %}"></script>
<script src="{% static 'assets/js/plugins/jquery.dataTables.min.js' %}"></script>
<script src="{% static 'assets/js/plugins/fullcalendar.min.js' %}"></script>
<script src="{% static 'assets/js/light-bootstrap-dashboard.js' %}" type="text/javascript"></script>
<script src="{% static 'assets/js/demo.js' %}"></script>
<script type="text/javascript">
    $(document).ready(function() {
        // Javascript method's body can be found in assets/js/demos.js
        demo.initDashboardPageCharts();


        demo.initVectorMap();

    });
</script>
<script>
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window,
        document, 'script', '../../../connect.facebook.net/en_US/fbevents.js');

    try {
        fbq('init', '111649226022273');
        fbq('track', "PageView");

    } catch (err) {
        console.log('Facebook Track Error:', err);
    }
</script>