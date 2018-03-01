// START: taken from IAT339 Week7 Lecture
"use strict";
console.log("JavaScript is running.");

var width = window.innerWidth;
console.log("Window width: "+width+"px");

var overlayProductDescriptionBlock = document.querySelectorAll(".overlayProductDescriptionBlock");
var overlayProductDescriptionHover = document.querySelectorAll(".overlayProductDescriptionHover");


window.onresize = toggleHover;
window.onload = toggleHover;

function toggleHover() {
	// width = window.innerWidth;

	if (width > 1071) {
		console.log("Window width is less than 1071px, collapsing menu.");

		 // overlayProductDescriptionHover.classList.remove("hidden");
		 // // overlayProductDescriptionHover.setAttribute("aria-hidden", "false");
		 // overlayProductDescriptionBlock.classList.add("hidden");
		 // // overlayProductDescriptionBlock.setAttribute("aria-hidden", "true");
		 // // overlayProductDescriptionBlock.setAttribute("aria-labelledby", "overlayProductDescriptionHover");

		 $('.overlayProductDescriptionHover').removeClass("hidden");
		 // overlayProductDescriptionHover.setAttribute("aria-hidden", "false");
		 $('.overlayProductDescriptionBlock').addClass("hidden");
		 // overlayProductDescriptionBlock.setAttribute("aria-hidden", "true");
		 // overlayProductDescriptionBlock.setAttribute("aria-labelledby", "overlayProductDescriptionHover");

	} else {

		// overlayProductDescriptionHover.classList.add("hidden");
		// // overlayProductDescriptionHover.setAttribute("aria-hidden", "true");
		// overlayProductDescriptionBlock.classList.remove("hidden");
		// // overlayProductDescriptionBlock.setAttribute("aria-hidden", "false");

		$('.overlayProductDescriptionHover').addClass("hidden");
		// overlayProductDescriptionHover.setAttribute("aria-hidden", "false");
		$('.overlayProductDescriptionBlock').removeClass("hidden");
		// overlayProductDescriptionBlock.setAttribute("aria-hidden", "true");
		// overlayProductDescriptionBlock.setAttribute("aria-labelledby", "overlayProductDescriptionHover");
	}
}

// window.addEventListener("resize",
// 	function() {
// 		// width = window.innerWidth;
//
// 		if (width > 1071) {
// 			console.log("Window width is less than 1071px, collapsing menu.");
//
// 			 overlayProductDescriptionHover.classList.remove("hidden");
// 			 // overlayProductDescriptionHover.setAttribute("aria-hidden", "false");
// 			 overlayProductDescriptionBlock.classList.add("hidden");
// 			 // overlayProductDescriptionBlock.setAttribute("aria-hidden", "true");
// 			 // overlayProductDescriptionBlock.setAttribute("aria-labelledby", "overlayProductDescriptionHover");
//
// 		} else {
//
// 			overlayProductDescriptionHover.classList.add("hidden");
// 			// overlayProductDescriptionHover.setAttribute("aria-hidden", "true");
// 			overlayProductDescriptionBlock.classList.remove("hidden");
// 			// overlayProductDescriptionBlock.setAttribute("aria-hidden", "false");
// 		}
// 	}
// );

// navToggle.addEventListener("click",
//    function() {
// 		console.log("#nav-toggle has been clicked.");
//       if ( navItems.classList.contains("hidden") ) {
// 			console.log("#nav-items are hidden, showing them now.");
//
// 			navItems.classList.remove("hidden");
//          navItems.setAttribute("aria-hidden", "false");
// 			navToggle.setAttribute("aria-expanded", "true");
//          navFirstItem.focus();
//          } else {
// 			console.log("#nav-items are showing, hiding them now.");
//
//          navItems.classList.add("hidden");
//          navItems.setAttribute("aria-hidden", "true");
// 			navToggle.setAttribute("aria-expanded", "false");
//       }
//    }
// );
// END: taken from IAT339 Week7 Lecture
