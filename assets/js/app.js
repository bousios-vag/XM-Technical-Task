fetch("https://api.coinlore.com/api/tickers/?start=0&limit=100")
    .then(res => {

        // Print res for debug
        console.log(res);
        return res.json();
    })

    .then(apiData => {
        let result = ``;
        apiData.data.forEach(individualCoinDataItem => {
            // Print res for debug
            console.log(individualCoinDataItem);

            const {
                nameid,
                name,
                symbol,
                price_usd,
                percent_change_24h
            } = individualCoinDataItem;

            let coin = document.getElementById(nameid);
            if (coin) {
                if (percent_change_24h > 0) {
                result = `     
                <div class="px-md-4 px-lg-1 cryptos_wrapper">         
                    <div class="text-left px-3 px-md-0 pt-2 cryptos__item cryptos__item--up">
                        <img src="../assets/images/${symbol}.png" alt="logo of ${name} cryptocurrency" class="cryptos__img d-inline">
                        <p class="d-inline py-3 px-2">${symbol}</p>
                        <p class="cryptos__name d-inline px-2 py-1">${name}</p>
                        <hr>
                    </div>
                
                    <div class="text-left px-2 px-md-0 cryptos__item cryptos__item--down">
                    <p class="cryptos__price px-2">$${price_usd}</p>
                    <p class="px-2 py-2" style="color:#B1FFC2;"><i class="fa-solid fa-circle-chevron-up"></i>  ${percent_change_24h}%</p>
                    </div>
                </div>
        `;} else {
            result = `  
            <div class="px-md-4 px-lg-1 cryptos_wrapper">             
                <div class="text-left px-3 px-md-0 pt-2 cryptos__item cryptos__item--up">
                   <img src="../assets/images/${symbol}.png" alt="logo of ${name} cryptocurrency" class="cryptos__img d-inline"">
                    <p class="d-inline py-3 px-2">${symbol}</p>
                    <p class="cryptos__name d-inline px-2 py-1">${name}</p>
                    <hr>
                </div>
                
                <div class="text-left px-2 px-md-0 cryptos__item cryptos__item--down">
                <p class="cryptos__price px-2">$${price_usd}</p>
                <p class="px-2 py-2" style="color:#FFA3A6;"><i class="fa-solid fa-circle-chevron-down"></i>  ${percent_change_24h}%</p>
                </div>
            </div>
        `;
        }

                const coinTable = document.getElementById(nameid);
                coinTable.innerHTML = result;
            }



        });
    });


        // form validations and styles
  const form = document.getElementById('login-form');
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const emailGuidelines = document.getElementById('email-guidelines');
  const passwordLength = document.getElementById('password-length');
  const passwordNumber = document.getElementById('password-number');
  const passwordLowercase = document.getElementById('password-lowercase');
  const passwordUppercase = document.getElementById('password-uppercase');
  const passwordChar = document.getElementById('password-char');

        // Submission and alerts
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!isValidEmail(emailInput.value)) {
      alert('Please Enter Valid Email');
      return;
    }
    
    if (!isValidPassword(passwordInput.value)) {
      alert('Please enter a password that meets the guidelines.');
      return;
    }

    // Submit the form    
     document.getElementById('success-message').style.display = 'block';
  });
  
    emailInput.addEventListener('input', function() {
    if (!isValidEmail(emailInput.value)) {
      emailGuidelines.classList.remove('d-none');
      emailGuidelines.style.color = 'red';
    } else {
      emailGuidelines.classList.add('d-none');
    }
  });
  
    // Validation checks with regex
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    const lengthRegex = /^.{8,15}$/;
    const numberRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const charRegex = /[#\[\]()@$&*!?|,.^/\+_-]+/;
    return lengthRegex.test(password) && numberRegex.test(password) && lowercaseRegex.test(password) && uppercaseRegex.test(password) && charRegex.test(password);
  }
  

  // input password guidelines styling 
passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  const lengthValid = password.length >= 8 && password.length <= 15;
  const numberValid = /\d/.test(password);
  const lowercaseValid = /[a-z]/.test(password);
  const uppercaseValid = /[A-Z]/.test(password);
  const charValid = /[#\[\]()@$&*!?|,.^/\+_-]+/.test(password);

  if (lengthValid) {
    passwordLength.style.color = 'green';
  } else {
    passwordLength.style.color = 'red';
  }

  if (numberValid) {
    passwordNumber.style.color = 'green';
  } else {
    passwordNumber.style.color = 'red';
  }

  if (lowercaseValid) {
    passwordLowercase.style.color = 'green';
  } else {
    passwordLowercase.style.color = 'red';
  }


  if (uppercaseValid) {
    passwordUppercase.style.color = 'green';
  } else {
    passwordUppercase.style.color = 'red';
  }

  if (charValid) {
    passwordChar.style.color = 'green';
  } else {
    passwordChar.style.color = 'red';
  }

  if (isValidEmail(emailInput.value) && isValidPassword(passwordInput.value)) {
    document.querySelector('button[type="submit"]').removeAttribute('disabled');
  } else {
    document.querySelector('button[type="submit"]').setAttribute('disabled', true);
   }

});


$(document).ready(function(){
  $('.slider').slick({
      arrows: true,
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 300,
      autoplaySpeed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      }]
  });
});
  

    // fetch("https://api.coinlore.com/api/tickers/?start=0&limit=10"): This initiates a request to the specified API endpoint to fetch data for the top 10 cryptocurrencies.

    // .then(res => {: This is a promise chain, which means that it waits for the fetch request to complete and then performs the next set of operations on the response. Here, we are taking the response as input and performing a set of operations on it.

    // console.log(res);: This logs the response object to the console for debugging purposes.

    // return res.json();: This extracts the JSON content from the response object and returns it to the next .then() method in the chain.

    // .then(apiData => {: This is the second promise in the chain, which waits for the JSON data to be extracted from the response and then performs a set of operations on it.

    // let result = ``;: This initializes an empty string variable called result, which will be used to store the HTML code for the table of cryptocurrency data.

    // apiData.data.forEach(individualCoinDataItem => {: This iterates through each individual cryptocurrency object in the data array of the apiData object.

    // console.log(individualCoinDataItem);: This logs the details of each individual cryptocurrency object to the console for debugging purposes.

    // const { id, nameid, symbol, price_usd, tsupply } = individualCoinDataItem;: This uses destructuring to extract specific properties from the individualCoinDataItem object and assign them to constant variables.

    // let test = document.getElementById(nameid);: This attempts to select an HTML element with an ID equal to the nameid property of the current cryptocurrency object.

    // if (test) {: This checks if the test variable is truthy, meaning that an HTML element with the specified ID exists.

    // result += ``;: This appends a new HTML table to the result string variable, containing the details of the current cryptocurrency object.

    // const coinTable = document.querySelector(".all-coins");: This selects the HTML element with a class of all-coins, which is the container element for the cryptocurrency tables.

    // coinTable.innerHTML = result;: This sets the innerHTML property of the coinTable element to the result string variable, which will insert the newly generated cryptocurrency table into the container.