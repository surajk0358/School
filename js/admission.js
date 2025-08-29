// js/admission.js
document.addEventListener('DOMContentLoaded', function() {
    // Class selection handler
    const classSelect = document.getElementById('class');
    const roomTypeSelect = document.getElementById('roomType');
    
    if (classSelect && roomTypeSelect) {
        classSelect.addEventListener('change', function() {
            // Enable room type selection only for higher classes
            if (this.value >= 6) {
                roomTypeSelect.disabled = false;
            } else {
                roomTypeSelect.disabled = true;
                roomTypeSelect.value = '';
            }
        });
    }
    
    // Form validation
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '#e9ecef';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('कृपया सर्व आवश्यक फील्ड भरा.');
            }
        });
    }
});