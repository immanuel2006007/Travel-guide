// Handle the Reset Password form submission
const resetPasswordForm = document.getElementById('reset-password-form');

resetPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulating password reset (for demo purposes)
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === email) {
        storedData.password = newPassword; // Update password
        localStorage.setItem('userData', JSON.stringify(storedData));
        alert('Password reset successful!');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Email not found. Please try again.');
    }
});