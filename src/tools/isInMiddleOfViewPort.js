
let isInMiddleOfViewPort = (classNameToSelect , hook , hookVal) => {

    let intViewportHeight = window.innerHeight;
    let middleOfHeight = intViewportHeight / 2;  
  
    let cardsCollection = document.getElementsByClassName(classNameToSelect);
  
    let lengthOfcardsCollection = cardsCollection.length;
  
    let thisLoopReturn; 
    let idCurrentElement;
    let thisElement;
    let topPos;
    let bottomPos;
    let k;  
    let heightRect;
    let marginCard;
  
    for(k=0 ; k<lengthOfcardsCollection ; k++){
  
        thisLoopReturn = cardsCollection[k]; 
        
        thisElement = thisLoopReturn.getBoundingClientRect();
        
        topPos = thisElement.top;
        bottomPos = thisElement.bottom;
        heightRect = thisElement.height;

        marginCard = (heightRect*0.2);

        idCurrentElement = thisLoopReturn.getAttribute("id");

        if (middleOfHeight >= (topPos + marginCard) && middleOfHeight <= (bottomPos - marginCard)) {              

          hook(idCurrentElement)

          // console.log("hookVal -> " + hookVal);

        }

        // Not used in this function, just for test :
        // let xCoordinate;
        // let yCoordinate;
        // let leftPos;
        // let widthRect;
       

        // yCoordinate = thisElement.y;
        // xCoordinate = thisElement.x;
        // leftPos = thisElement.left;
       
        

        //to easy understand look console logs :
        // console.log("thisLoopReturn : " + thisLoopReturn);
        // console.log(thisLoopReturn);
        // console.log("middleOfHeight -> "+ middleOfHeight);
        // console.log("heightRect -> " + heightRect);
        // console.log("marginCard -> " + marginCard);
              
        
        // console.log("topPos -> " + topPos);
        // console.log("topPos + -> " + (topPos + marginCard));

        // console.log("bottomPos -> " + bottomPos);      
        // console.log("bottomPos - -> " + (bottomPos - marginCard));

        // console.log("yCoordinate -> " + yCoordinate);
        // console.log("xCoordinate -> " + xCoordinate);
        // console.log("leftPos -> " + leftPos);        

        // console.log("idCurrentElement -> " + idCurrentElement);   
        
        // console.log("cardsCollection -> " + cardsCollection);
        // console.log(cardsCollection);
  
  
    }
  
  }

export default isInMiddleOfViewPort;
  
