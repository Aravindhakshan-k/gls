// Global JavaScript settings

$(document).ready(function() {
    // Configure toastr to show on right side
    toastr.options = {
        "positionClass": "toast-top-right",
        "closeButton": true,
        "progressBar": true,
        "timeOut": "3000"
    };
    
    // Add global AJAX loader
    $(document).ajaxStart(function() {
        $("body").append("<div id='ajaxLoader' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; justify-content: center; align-items: center;'><div class='spinner-border text-light' role='status'><span class='visually-hidden'>Loading...</span></div></div>");
    });
    
    $(document).ajaxStop(function() {
        $("#ajaxLoader").remove();
    });
});