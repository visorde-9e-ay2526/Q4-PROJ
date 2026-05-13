const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const fileName = document.getElementById('file-name');

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) {
        fileName.textContent = this.files[0].name;
        
        // Optional: Preview the image
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-img').src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
    } else {
        fileName.textContent = "No file chosen";
    }
});