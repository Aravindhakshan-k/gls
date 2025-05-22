/**
 * Common Image Upload Functions
 * 
 * This file contains reusable functions for handling image uploads with preview functionality
 * throughout the application.
 */

/**
 * Initialize image upload with preview
 * @param {string} inputSelector - The file input selector
 * @param {Object} options - Configuration options
 * @param {string} options.previewSelector - The image preview container selector
 * @param {string} options.defaultImageUrl - Default image URL to show when no file is selected
 * @param {number} options.maxSizeMB - Maximum file size in MB
 * @param {Array} options.allowedTypes - Array of allowed MIME types
 * @param {Function} options.onFileSelect - Callback function when file is selected
 * @param {Function} options.onFileInvalid - Callback function when file is invalid
 */
function initImageUploadWithPreview(inputSelector, options = {}) {
    // Set default options
    const defaultOptions = {
        previewSelector: '.image-preview',
        defaultImageUrl: '/static/images/default-avatar.png',
        maxSizeMB: 2,
        allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        onFileSelect: null,
        onFileInvalid: null
    };
    
    // Merge default options with provided options
    const settings = {...defaultOptions, ...options};
    
    // Get DOM elements
    const inputElement = document.querySelector(inputSelector);
    const previewContainer = document.querySelector(settings.previewSelector);
    
    // If elements don't exist, exit
    if (!inputElement || !previewContainer) {
        console.error('Image upload elements not found.');
        return;
    }
    
    // Add preview container if it doesn't exist
    if (!previewContainer.querySelector('img')) {
        // Create an image element for the preview
        const previewImg = document.createElement('img');
        previewImg.className = 'preview-image';
        previewImg.src = settings.defaultImageUrl;
        previewImg.alt = 'Preview';
        previewImg.style.maxWidth = '100%';
        previewImg.style.maxHeight = '200px';
        previewImg.style.objectFit = 'contain';
        
        // Add to preview container
        previewContainer.appendChild(previewImg);
        
        // Add necessary styling to container
        previewContainer.style.marginTop = '10px';
        previewContainer.style.marginBottom = '10px';
        previewContainer.style.textAlign = 'center';
        previewContainer.style.border = '1px dashed #ccc';
        previewContainer.style.padding = '10px';
        previewContainer.style.borderRadius = '4px';
        previewContainer.style.backgroundColor = '#f9f9f9';
    }
    
    // Handle change event
    inputElement.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const previewImg = previewContainer.querySelector('img');
        
        // If no file selected, show default image
        if (!file) {
            previewImg.src = settings.defaultImageUrl;
            return;
        }
        
        // Validate file type
        if (!settings.allowedTypes.includes(file.type)) {
            // Reset the input
            inputElement.value = '';
            
            // Show default image
            previewImg.src = settings.defaultImageUrl;
            
            // Call invalid callback if provided
            if (typeof settings.onFileInvalid === 'function') {
                settings.onFileInvalid('Invalid file type. Allowed types: ' + settings.allowedTypes.join(', '));
            } else {
                alert('Invalid file type. Please select an image file.');
            }
            
            return;
        }
        
        // Validate file size
        if (file.size > settings.maxSizeMB * 1024 * 1024) {
            // Reset the input
            inputElement.value = '';
            
            // Show default image
            previewImg.src = settings.defaultImageUrl;
            
            // Call invalid callback if provided
            if (typeof settings.onFileInvalid === 'function') {
                settings.onFileInvalid('File size exceeds maximum allowed size of ' + settings.maxSizeMB + 'MB.');
            } else {
                alert('File size exceeds maximum allowed size of ' + settings.maxSizeMB + 'MB.');
            }
            
            return;
        }
        
        // Create a URL for the file and set it as the source of the preview image
        const objectURL = URL.createObjectURL(file);
        previewImg.src = objectURL;
        
        // Call success callback if provided
        if (typeof settings.onFileSelect === 'function') {
            settings.onFileSelect(file);
        }
    });
    
    // Add drag and drop support
    previewContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        previewContainer.style.borderColor = '#6576ff';
        previewContainer.style.backgroundColor = '#f0f3ff';
    });
    
    previewContainer.addEventListener('dragleave', function(e) {
        e.preventDefault();
        previewContainer.style.borderColor = '#ccc';
        previewContainer.style.backgroundColor = '#f9f9f9';
    });
    
    previewContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        previewContainer.style.borderColor = '#ccc';
        previewContainer.style.backgroundColor = '#f9f9f9';
        
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            
            // Trigger change event manually
            const changeEvent = new Event('change');
            inputElement.dispatchEvent(changeEvent);
        }
    });
    
    // Add click support (clicking on preview opens file dialog)
    previewContainer.addEventListener('click', function() {
        inputElement.click();
    });
}

/**
 * Initialize multiple image uploads with previews
 * @param {Array} configs - Array of configuration objects
 */
function initMultipleImageUploads(configs = []) {
    configs.forEach(config => {
        initImageUploadWithPreview(config.inputSelector, config.options);
    });
} 