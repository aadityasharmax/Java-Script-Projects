const rect = document.querySelector('.center');


rect.addEventListener("mousemove" , function(details){
    let rectangleDetail = rect.getBoundingClientRect();
    let insideRectValue = details.clientX - rectangleDetail.left;

    if(insideRectValue < rectangleDetail.width /2){
        let redColor = gsap.utils.mapRange(0 , rectangleDetail.width / 2 , 255 , 0 , insideRectValue);
        gsap.to(rect , {
            backgroundColor: `rgb(${redColor} , 0, 0)`,
            ease : Power3
        });
    }

    else{
        let blueColor = gsap.utils.mapRange(rectangleDetail.width / 2 , 800 , 0 , 255 , insideRectValue);
        gsap.to(rect , {
            backgroundColor: `rgb(0 , 0, ${blueColor})`,
            ease : Power3
        });
    }


    rect.addEventListener("mouseout" , function(){
        gsap.to(rect , {
            backgroundColor : "white"
        });
    })
})