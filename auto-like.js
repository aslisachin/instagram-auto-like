let likes = 0;
setInterval(() => {
    const heart = document.querySelector('svg[aria-label="Like"][width="24"]');
    const arrow = document.querySelector('svg[aria-label="Next"]');
    if (heart) {
        heart.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    arrow.parentElement.parentElement.click();
}, 15000);
// Interval of 15 seconds
