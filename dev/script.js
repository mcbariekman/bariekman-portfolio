// Function to handle navigation clicks
function handleNavigationClick(event) {
    event.preventDefault();
  
    // Remove 'active' class from all navigation items
    const navigationItems = document.querySelectorAll('nav li');
    navigationItems.forEach(item => {
      item.classList.remove('active');
    });
  
    // Add 'active' class to the clicked navigation item
    const clickedNavItem = event.currentTarget;
    clickedNavItem.classList.add('active');
  
    // Get the target section ID from the href attribute
    const targetSectionId = clickedNavItem.querySelector('a').getAttribute('href');
  
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the target section
    const targetSection = document.querySelector(targetSectionId);
    targetSection.style.display = 'block';
  }
  
  // Function to handle form field blur event
  function handleFormFieldBlur(event) {
    const inputField = event.currentTarget;
    if (inputField.value.trim() === '') {
      inputField.classList.add('error');
      inputField.setAttribute('aria-invalid', 'true');
      inputField.nextElementSibling.style.display = 'block';
    } else {
      inputField.classList.remove('error');
      inputField.setAttribute('aria-invalid', 'false');
      inputField.nextElementSibling.style.display = 'none';
    }
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Add your form submission logic here
  
    // Reset the form fields
    const form = document.getElementById('contact-form');
    form.reset();
  }
  
  // Add event listeners to navigation items
  const navigationItems = document.querySelectorAll('nav li');
  navigationItems.forEach(item => {
    item.addEventListener('click', handleNavigationClick);
  });
  
  // Add event listeners to form fields for validation
  const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea');
  formFields.forEach(field => {
    field.addEventListener('blur', handleFormFieldBlur);
  });
  
  // Add event listener to form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', handleFormSubmit);
  