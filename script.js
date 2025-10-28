const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

    // Regex to match valid US phone numbers
    function isValidPhoneNumber(str) {
      const validPatterns = [
        /^1\s?\d{3}-\d{3}-\d{4}$/,        // 1 555-555-5555
        /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/,   // 1 (555) 555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/,         // 1(555)555-5555
        /^1\s?\d{3}\s\d{3}\s\d{4}$/,       // 1 555 555 5555
        /^\d{10}$/,                        // 5555555555
        /^\d{3}-\d{3}-\d{4}$/,             // 555-555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/           // (555)555-5555
      ];

      for (let pattern of validPatterns) {
        if (pattern.test(str)) {
          return true;
        }
      }
      return false;
    }

    checkBtn.addEventListener('click', () => {
      const phone = userInput.value.trim();

      if (phone === '') {
        alert('Please provide a phone number');
        return;
      }

      const isValid = isValidPhoneNumber(phone);

      if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phone}`;
      } else {
        resultsDiv.textContent = `Invalid US number: ${phone}`;
      }
    });

    clearBtn.addEventListener('click', () => {
      resultsDiv.textContent = '';
      userInput.value = '';
    });