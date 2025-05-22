# DataTable Common Functions Usage Guide

This document explains how to use the common DataTable initialization functions across your application.

## Overview

The `datatable-init.js` file contains reusable functions that allow you to easily initialize and customize DataTables throughout your application, maintaining a consistent look and behavior while reducing code duplication.

## Available Functions

### 1. initializeDataTable(tableId, options)

A general-purpose function to initialize any DataTable with sensible defaults.

Parameters:
- `tableId`: The CSS selector for your table (e.g., `'#myTable'`)
- `options`: (Optional) Custom DataTable options to override the defaults

Example:
```javascript
$(document).ready(function() {
    // Initialize a basic DataTable
    initializeDataTable('#myTable');
    
    // Or with custom options
    initializeDataTable('#myTable', {
        pageLength: 25,
        ordering: false,
        searchPlaceholder: "Search records..."
    });
});
```

### 2. initializeCustomerDataTable(tableId, options)

A specialized function for customer-related tables that includes customer-specific functionality.

Parameters:
- `tableId`: The CSS selector for your customer table (e.g., `'#customerTable'`)
- `options`: (Optional) Custom DataTable options to override the defaults

Example:
```javascript
$(document).ready(function() {
    // Initialize a customer DataTable with default options
    initializeCustomerDataTable('#customerTable');
    
    // Or with custom options
    initializeCustomerDataTable('#customerTable', {
        pageLength: 15,
        searchPlaceholder: "Find customers..."
    });
});
```

### 3. setupCustomerDeleteHandler(deleteUrl)

A function to set up customer deletion functionality.

Parameters:
- `deleteUrl`: The URL to send the DELETE request to

Example:
```javascript
$(document).ready(function() {
    // Set up the customer delete handler
    setupCustomerDeleteHandler("{% url 'ajax_delete_customer' %}");
});
```

## Implementation in Templates

### Basic Usage

1. Include the common JS file in your template:
```html
{% block foot_script %}
<!-- Include the common DataTable initialization JS -->
<script src="{% static 'js/common/datatable-init.js' %}"></script>
<script>
    $(document).ready(function() {
        // Initialize your DataTable
        initializeDataTable('#myTable');
    });
</script>
{% endblock %}
```

### For Customer Lists

```html
{% block foot_script %}
<!-- Include the common DataTable initialization JS -->
<script src="{% static 'js/common/datatable-init.js' %}"></script>
<script>
    $(document).ready(function() {
        // Initialize the customer datatable
        initializeCustomerDataTable('#customerTable');
        
        // Set up the delete functionality
        setupCustomerDeleteHandler("{% url 'ajax_delete_customer' %}");
    });
</script>
{% endblock %}
```

### Required HTML Structure

For proper functioning, make sure your table follows this basic structure:

```html
<table id="customerTable" class="datatable-init table" style="width:100%">
    <thead>
        <tr>
            <!-- For tables with checkboxes -->
            <th>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="selectAll">
                    <label class="custom-control-label" for="selectAll"></label>
                </div>
            </th>
            <th>Column 1</th>
            <th>Column 2</th>
            <!-- ... more columns ... -->
            <th class="text-end">Actions</th>
        </tr>
    </thead>
    <tbody>
        <!-- Table rows go here -->
    </tbody>
</table>
```

Don't forget to include a CSRF token in your template for AJAX operations:
```html
{% csrf_token %}
```

## Customization

You can customize any aspect of the DataTable by passing options to the initialization function. For a complete list of available options, refer to the [DataTables documentation](https://datatables.net/reference/option/).

## Dependencies

These functions require:
1. jQuery
2. DataTables library and its extensions
3. Bootstrap for styling (optional but recommended)
4. Toastr for notifications (optional) 