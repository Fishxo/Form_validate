
    
        document.getElementById('showPassword').addEventListener('change', function() {
            const passwordField = document.getElementById('password');
            passwordField.type = this.checked ? 'text' : 'password';
            const passwordfield = document.getElementById('confirmPassword');
             passwordfield.type = this.checked ? 'text':
             'password';
        });

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission for validation
            
            // Clear previous error messages
            document.querySelectorAll('.error').forEach(el => el.textContent = '');

            let isValid = true;

            // Username validation
            const username = document.getElementById('username').value;
            const usernameRegex = /^[a-zA-Z0-9]{5,}$/;
            if (!usernameRegex.test(username)) {
                document.getElementById('usernameError').textContent = "Username must be at least 5 characters long and contain only letters and numbers.";
                isValid = false;
            }

            // Email validation
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Password validation
            const password = document.getElementById('password').value;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, and include an uppercase letter, lowercase letter, number, and special character.";
                isValid = false;
            }

            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
                isValid = false;
            }

            // Date of Birth validation
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();
            if (isNaN(dob.getTime()) || dob >= today) {
                document.getElementById('dobError').textContent = "Please enter a valid date in the past.";
                isValid = false;
            }

            // Country validation
            const country = document.getElementById('country').value;
            if (!country) {
                document.getElementById('countryError').textContent = "Please select a country.";
                isValid = false;
            }

            // Image validation
            const imageInput = document.getElementById('image');
            const imageFile = imageInput.files[0];
            if (imageFile) {
                const allowedTypes = ['image/png', 'image/jpeg'];
                if (!allowedTypes.includes(imageFile.type)) {
                    document.getElementById('imageError').textContent = "Image must be in PNG or JPG format.";
                    isValid = false;
                }
            } else {
                document.getElementById('imageError').textContent = "Please upload an image.";
                isValid = false;
            }
            


            // If form is valid, submit it
            if (isValid) {
                alert("are u genius cos u did it 👍!");
                // Here you can add the logic to actually submit the form data
            }
        });
                    // strength of Passwords
            
             function checkPasswordLength(password) { var span = document.getElementById("passError"); if (password.length >= 8) { span.style.color = "green"; return; 
               
             } else if (password.length >= 2) { span.style.color = "yellow"; return; 
               
             } else { span.style.color = "red"; } }
            
    