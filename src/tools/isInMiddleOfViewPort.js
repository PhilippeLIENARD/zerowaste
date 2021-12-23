let isInMiddleOfViewPort = () => {

    let intViewportHeight = window.innerHeight;
    let middleOfHeight = intViewportHeight / 2;
  
  
    let cardsCollection = document.getElementsByClassName("card");
  
    let lengthOfcardsCollection = cardsCollection.length;
  
    let thisLoopReturn; 
    let idCurrentElement;
    let thisElement;
    let topPos;
    let bottomPos;
    let k;
  
    for(k=0 ; k<lengthOfcardsCollection ; k++){
  
        thisLoopReturn = cardsCollection[k];
  
        console.log("thisLoopReturn : " + thisLoopReturn);
        console.log(thisLoopReturn);
        thisElement = thisLoopReturn.getBoundingClientRect();
        console.log("middleOfHeight -> "+ middleOfHeight);
        topPos = thisElement.top;
        bottomPos = thisElement.bottom;
        idCurrentElement = thisLoopReturn.getAttribute("id");
        console.log("topPos -> " + topPos);
        console.log("bottomPos -> " + bottomPos);
        console.log("idCurrentElement -> " + idCurrentElement);
  
        (middleOfHeight >= topPos && middleOfHeight <= bottomPos) ? console.log('- - - Yes I\'m inMiddle') : console.log('xxxx NOT IN Middle'); 

        // return console.log('void return');
  
  
    }
  
  }

export default isInMiddleOfViewPort;
  
