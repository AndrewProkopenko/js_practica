let scrollContainer = document.querySelector('.scroll-container');
let scrollContent = scrollContainer.querySelector('.scroll-content');
let scrollBar = scrollContainer.querySelector('.scroll-bar');
let scrollMarker = scrollContainer.querySelector('.scroll-marker');

scrollMarker.style.height = scrollBar.clientHeight * scrollContainer.clientHeight / scrollContent.clientHeight + 'px';

scrollContainer.addEventListener('wheel', (event) => {
    let scrollPercentage = scrollContent.offsetTop / (scrollContainer.clientHeight - scrollContent.clientHeight);
    if(event.deltaY > 0) {
        event.preventDefault();
        if(scrollContent.clientHeight + scrollContent.offsetTop > scrollContainer.clientHeight) {
            scrollContent.style.top = (scrollContent.offsetTop - 10) + 'px';
            console.log(12999);
        }        
    } else {
        if(scrollContent.offsetTop < 0) {
            scrollContent.style.top = (scrollContent.offsetTop + 10) + 'px';
            
        }
    }
    scrollMarker.style.top = (scrollBar.clientHeight - scrollMarker.clientHeight)*scrollPercentage + 'px';
});

scrollMarker.addEventListener('mousedown', (event) => {
    let startY = event.y - scrollContainer.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', (event) => {
        document.removeEventListener('mousemove', drag);
    })
    function drag(event) {
        scrollMarker.style.top = (event.y - scrollContainer.offsetTop - startY) + 'px';
        if(scrollMarker.offsetTop < 0) {
            scrollMarker.style.top = 0 ;
            
        }
        if(scrollMarker.offsetTop > scrollBar.clientHeight - scrollMarker.clientHeight) {
            scrollMarker.style.top = scrollBar.clientHeight - scrollMarker.clientHeight + 'px';
            
        }
        let scrollPercentage = scrollMarker.offsetTop / (scrollBar.clientHeight - scrollMarker.clientHeight);
        scrollContent.style.top = (scrollContainer.clientHeight - scrollContent.clientHeight) * scrollPercentage + 'px';
        console.log(12999);
    }
})
// console.log(scrollContainer.offsetTop ) // 191px - высота от верха 
// console.log( scrollMarker.offsetTop) // отступ маркера сверху 
// console.log(event.clientY - scrollContainer.offsetTop ) // координаты клика относительно бара

scrollBar.addEventListener('mousedown', (element) => { 
    let clickCoordinate = event.clientY - scrollContainer.offsetTop;
    let scrollPercentage = scrollMarker.offsetTop / (scrollBar.clientHeight - scrollMarker.clientHeight);
    if(event.target != scrollMarker) { 
        if(clickCoordinate < scrollMarker.offsetTop  ) { 
            
            scrollMarker.style.top = scrollMarker.offsetTop * scrollPercentage + 'px' ;
            scrollContent.style.top = scrollContent.offsetTop * scrollPercentage + 'px';

        } else { 
            console.log(123);
            scrollMarker.style.top = scrollMarker.offsetTop * scrollPercentage + 'px' ;
            scrollContent.style.top = scrollContent.offsetTop * scrollPercentage + 'px';

        }
    }
    // console.log(event.clientY - scrollContainer.offsetTop )
    if(event.target == scrollMarker) { 
        
        
    }
   
    // console.log(scrollContainer.offsetTop )
})