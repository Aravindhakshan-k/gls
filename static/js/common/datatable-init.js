/**
 * Common DataTable Initialization Functions
 * 
 * This file contains reusable functions for initializing and customizing DataTables
 * throughout the application.
 */

// Initialize a standard DataTable with common options
function initializeDataTable(tableId, options = {}) {
    // Default options for all DataTables
    const defaultOptions = {
        responsive: true,
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        pageLength: 10,
        ordering: true,
        info: true,
        searching: true,
        dom: '<"row justify-between g-2"<"col-7 col-sm-4 text-start"f><"col-5 col-sm-8 text-end"<"datatable-filter"<"d-flex justify-content-end g-2"l>>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-start text-md-end"i>>',
        language: {
            search: "",
            searchPlaceholder: "Type in to Search",
            lengthMenu: "<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",
            info: "_START_ -_END_ of _TOTAL_",
            infoEmpty: "No records found",
            infoFiltered: "( Total _MAX_  )",
            paginate: {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Prev"
            }
        },
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    };

    // Merge default options with any custom options provided
    const mergedOptions = $.extend(true, {}, defaultOptions, options);
    
    // Initialize the DataTable
    const table = $(tableId).DataTable(mergedOptions);
    
    // Apply common styling to the search input
    $('.dataTables_filter input').addClass('form-control');
    $('.dataTables_filter input').attr('placeholder', 'Search...');
    
    // Set up common responsive behavior
    $(window).on('resize', function() {
        if($(window).width() < 768) {
            $(tableId).addClass('table-responsive');
        } else {
            $(tableId).removeClass('table-responsive');
        }
    }).resize();
    
    return table;
}

// Initialize a DataTable specifically for customer lists with common customer-specific features
function initializeCustomerDataTable(tableId, options = {}) {
    const table = initializeDataTable(tableId, options);
    
    // Set up Select All checkbox functionality
    $("#selectAll").on("click", function() {
        if($(this).is(":checked")) {
            $('.custom-control-input').prop('checked', true);
        } else {
            $('.custom-control-input').prop('checked', false);
        }
    });
    
    // Set up export buttons
    $('#export-csv').on('click', function(e) {
        e.preventDefault();
        table.button('.buttons-csv').trigger();
    });
    
    $('#export-excel').on('click', function(e) {
        e.preventDefault();
        table.button('.buttons-excel').trigger();
    });
    
    $('#export-pdf').on('click', function(e) {
        e.preventDefault();
        table.button('.buttons-pdf').trigger();
    });
    
    return table;
}

// Setup customer delete functionality
function setupCustomerDeleteHandler(deleteUrl) {
    // Delete customer
    $('.delete-customer').on('click', function(e) {
        e.preventDefault();
        var customerId = $(this).data('id');
        $('#confirmDelete').data('id', customerId);
        $('#deleteCustomerModal').modal('show');
    });
    
    $('#confirmDelete').on('click', function(e) {
        e.preventDefault();
        var customerId = $(this).data('id');
        
        $.ajax({
            url: deleteUrl,
            type: "POST",
            data: {
                'customer_id': customerId,
                'csrfmiddlewaretoken': $('[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                if(response.status === "success") {
                    $('#deleteCustomerModal').modal('hide');
                    // Show success notification
                    toastr.success(response.message);
                    // Reload the table or remove the row
                    setTimeout(function() {
                        window.location.reload();
                    }, 1000);
                } else {
                    toastr.error(response.message);
                }
            },
            error: function(xhr, errmsg, err) {
                toastr.error("Error occurred while deleting customer.");
            }
        });
    });
} 