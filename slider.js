MySlides=new Array('images/offer1.jpg', 'images/offer2.jpg', 'images/offer3.jpg')
Slide=0

function ShowSlides(SlideNumber){

{ Slide = Slide + SlideNumber

if (Slide>MySlides.length-1){
	Slide=0
}

if (Slide<0) {
	Slide=MySlides.length-1
}



document.getElementById('DisplaySlide').src=MySlides[Slide]


}
}