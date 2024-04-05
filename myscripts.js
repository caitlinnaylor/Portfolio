/** Faq page, makes faq answers visible and invisible*/
function getAnswer(faqA, faqX){
	/* Code from https://www.w3schools.com/jsref/prop_style_display.asp */
	/* Make the answer visible or not visble depending on current state */
	 var x = document.getElementById(faqA);
	  if (x.style.display === 'none') {
		x.style.display = 'block';
	  } else {
		x.style.display = 'none';
	  }
	  
	/* Make either 'x' or 'v' depending on if answer open or closed */
	var symbol = document.getElementById(faqX);
	
	if(symbol.textContent == 'v'){
		symbol.textContent = 'x';
	} else {
		symbol.textContent = 'v';
	}
}

/** Scrolls to section of page */
function scrollToSection(sectionID){
	var section = document.getElementById(sectionID);
	section.scrollIntoView();
}

/** When the user clicks on the button, scroll to the top of the document */
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}