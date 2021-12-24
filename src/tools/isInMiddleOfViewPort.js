
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
  
    for(k=0 ; k<lengthOfcardsCollection ; k++){
  
        thisLoopReturn = cardsCollection[k]; 
        
        thisElement = thisLoopReturn.getBoundingClientRect();
        
        topPos = thisElement.top;
        bottomPos = thisElement.bottom;

        idCurrentElement = thisLoopReturn.getAttribute("id");

        if (middleOfHeight >= topPos && middleOfHeight <= bottomPos) {              

          hook(idCurrentElement)

          // console.log("hookVal -> " + hookVal);

        }

        // // Not used in this function, just for test :
        // let xCoordinate;
        // let yCoordinate;
        // let leftPos;
        // yCoordinate = thisElement.y;
        // xCoordinate = thisElement.x;
        // leftPos = thisElement.left;    

        // to easy understand look console logs :
        // console.log("thisLoopReturn : " + thisLoopReturn);
        // console.log(thisLoopReturn);
        // console.log("middleOfHeight -> "+ middleOfHeight);
              
        
        // console.log("topPos -> " + topPos);
        // console.log("bottomPos -> " + bottomPos);

        // console.log("yCoordinate -> " + yCoordinate);
        // console.log("xCoordinate -> " + xCoordinate);
        // console.log("leftPos -> " + leftPos);        

        // console.log("idCurrentElement -> " + idCurrentElement);   
        
        // console.log("cardsCollection -> " + cardsCollection);
        // console.log(cardsCollection);
  
  
    }
  
  }

export default isInMiddleOfViewPort;
  
