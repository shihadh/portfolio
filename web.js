
  function sendEmail() {
    // Collect form data
    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
  
    const serviceID = "service_m41uf0h"; // Replace with your actual Service ID
    const templateID = "template_ripfvbn"; // Replace with your actual Template ID
  
    // Use EmailJS to send the form data
    emailjs.send(serviceID, templateID, params)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Clear form fields
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  
    // Prevent default form submission behavior
    return false;
  }
  
 

  // Get the dark mode button and icon
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeIcon = document.getElementById('darkModeIcon');
  
  // Check if the theme is stored in localStorage
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.remove('bi-sun');
    darkModeIcon.classList.add('bi-moon');
  }

  // Toggle dark/light theme
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    if (document.body.classList.contains('dark-mode')) {
      darkModeIcon.classList.remove('bi-sun');
      darkModeIcon.classList.add('bi-moon');
      localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
      darkModeIcon.classList.remove('bi-moon');
      darkModeIcon.classList.add('bi-sun');
      localStorage.removeItem('theme'); // Reset to light mode
    }
  });




(function(){
      emailjs.init({
        publicKey: "e4NPmFH6wALV-HVeQ",
      });
   })();