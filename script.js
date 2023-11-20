

document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.querySelector('.trigger p');
    const optionsSection = document.querySelector('.options-section');
    let isOpen = false;

    const toggleOptions = () => {
        isOpen = !isOpen;
        optionsSection.style.display = isOpen ? 'block' : 'none';
    };

    triggerBtn.addEventListener('click', toggleOptions);

    const handleOptionClick = (option) => {
        const options = optionsSection.querySelectorAll('.flag');
        options.forEach(opt => {
            if (opt !== option) {
                opt.style.backgroundColor = ''; // Reset other options' background color
            }
        });
        if (option.style.backgroundColor === '') {
            option.style.backgroundColor = '#4643EE1A';
            option.style.color="black";
            option.style.fontWeight="600"; // Change the background color of clicked option
        } else {
            option.style.backgroundColor = ''; // Toggle off if clicked again
        }
    };

    const options = optionsSection.querySelectorAll('.flag');
    options.forEach(option => {
        option.addEventListener('click', () => {
            handleOptionClick(option);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const closeAccountButton = document.querySelector('.close-cancel');
    const closeAccountSection = document.querySelector('.close-accountsection');
    const closeButton = closeAccountSection.querySelector('button');
    const formInputs = closeAccountSection.querySelectorAll('input');

    closeAccountButton.addEventListener('click', function() {
        closeAccountSection.style.display = 'block';
        document.body.classList.add('show-after');
    });

    const closeSectionCloseButton = document.querySelector('.close-accountsection .heading img');
    closeSectionCloseButton.addEventListener('click', function() {
        closeAccountSection.style.display = 'none';
        document.body.classList.remove('show-after');
    });

    closeButton.addEventListener('click', function() {
        closeAccountSection.style.display = 'none';
        document.body.classList.remove('show-after');
    });

    // Add an event listener to form inputs to check if the form is filled
    formInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const formFilled = Array.from(formInputs).every(input => input.value.trim() !== '');
            if (formFilled) {
                closeButton.classList.add('filled');
            } else {
                closeButton.classList.remove('filled');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.side-options .options');

    options.forEach(option => {
        option.addEventListener('click', function() {
            // Remove background and text color from all options
            options.forEach(opt => {
                opt.style.backgroundColor = ''; // Reset background color
                opt.querySelector('a').style.color = ''; // Reset text color
            });

            // Set background and text color for the clicked option
            this.style.backgroundColor = '#4643EE1A'; // Change to desired background color
            this.querySelector('a').style.color = '#4643EE'; // Change to desired text color
            this.style.borderRadius ="6px"
        });
    });
});







