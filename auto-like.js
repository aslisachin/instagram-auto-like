let likesGiven = 0;  
setInterval(() => {  
     let likes = document.getElementsByClassName('QBdPU'),  
        arrow = document.querySelector('.coreSpriteRightPaginationArrow');  
     if (likes[1]) {  
          likes = likes[1].parentElement;  
          likesGiven++, likes.click();  
  }  
     arrow.click();  
     console.log(`You've liked ${likesGiven} post(s)!`);  
}, 15000);
// Interval of 15 seconds
