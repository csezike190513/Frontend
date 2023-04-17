function removeClickListenersAndSetClass() {
    // get all div elements whose id starts with "key_"
    const keyDivs = document.querySelectorAll('div[id^="key_"]');
  
    // loop through each keyDiv element
    keyDivs.forEach((keyDiv) => {
      // remove the click event listener
      keyDiv.removeEventListener('click', null);
  
      // set the class to "hasznaltkey"
      keyDiv.id = ("hasznaltkey");
    });
  }