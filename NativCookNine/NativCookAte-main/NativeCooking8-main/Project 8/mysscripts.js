	///var PrintButton1 = new Image
	///var PrintButton2 = new Image
	///var logo1 = new Image
	///var logo2 = new Image

////if (document.images) {
	///PrintButton1.src = "Images/print.png"
	////PrintButton2.src = "Images/Print2.png"
	///logo1.src = "Images/Logo.png"
	////logo2.src = "Images/Logo2.png"
//}


		var imgArray = new Array(
			'Chef2Lg.jpg',
			'DutchOvenLg.jpg',
			'RasberryCakeLg.jpg',
			'JelloCakeLg.jpg'
		);


		var titleArray = new Array(
			'Chef',
			'Dutch Oven',
			'Raspberry Cake',
			'Jello Cake'	
		);
			
		var imgPath = "Images/Fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			var textTitle=titleArray[imgID];
			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		