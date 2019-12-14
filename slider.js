const slider = document.getElementById('slider-id');
const sliderData = [
    {
        image: 'slides/1.jpg',
        title: 'Slide Title 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam, ea praesentium maiores voluptatum veniam magnam numquam delectus'
    },
    {
        image: 'slides/2.jpg',
        title: 'Slide Title 2',
        text: 'Odit sequi reprehenderit necessitatibus exercitationem nemo similique, illo reiciendis ducimus perferendis in quo optio autem consequuntur '
    },
    {
        image: 'slides/3.jpg',
        title: 'Slide Title 3',
        text: 'Explicabo minus corrupti eveniet atque mollitia ducimus. Ducimus magnam optio dolores minus aut in possimus, culpa dolore, quam provident'
    },
    {
        image: 'slides/4.jpg',
        title: 'Slide Title 4',
        text: 'Itaque nesciunt harum dolorum obcaecati quidem ducimus, odit sunt aliquam suscipit voluptas, eum, est quas quam rem illo. Perspiciatis cupiditate voluptas quasi!'
    }
];

let activeSlide = 0;

let sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
slider.appendChild(sliderContainer);

//SLIDES
let slides = document.createElement('div');
slides.classList.add('slides');
sliderContainer.appendChild(slides);

//BTN
let btnPrev = document.createElement('button');
let btnNext = document.createElement('button');
btnPrev.classList.add('slider-prev');
btnNext.classList.add('slider-next');
let btnPrevIcon = document.createElement('i');
let btnNextIcon = document.createElement('i');
btnPrevIcon.classList.add('icon-left-open-big')
btnNextIcon.classList.add('icon-right-open-big')
btnPrev.appendChild(btnPrevIcon);
btnNext.appendChild(btnNextIcon);
sliderContainer.appendChild(btnPrev);
sliderContainer.appendChild(btnNext);

//BULLETS 
let sliderBullets = document.createElement('div');
sliderBullets.classList.add('slider-bullets');
sliderContainer.appendChild(sliderBullets);


//LOOP 
sliderData.map((slide, index) => { 

    let bullet  = document.createElement('a');
    bullet.href = '#';
    sliderBullets.appendChild(bullet);

    let sliderItem = document.createElement('div');
    sliderItem.classList.add('slide-item');
    let sliderItemImage = document.createElement('div');
    sliderItemImage.classList.add('slide-item-image');
    let sliderItemText = document.createElement('div');
    sliderItemText.classList.add('slide-item-text');

    let img = document.createElement('img');
    img.src = slide.image; 
    img.alt = slide.title;

    let h3 = document.createElement('h3');
    h3.innerText = slide.title
    let p = document.createElement('p');
    p.innerText = slide.text

    sliderItemImage.appendChild(img);
    sliderItemText.appendChild(h3);
    sliderItemText.appendChild(p);


    sliderItem.appendChild(sliderItemImage);
    sliderItem.appendChild(sliderItemText);

    slides.appendChild(sliderItem);
})

function changeSlide () { 
    if(document.querySelector('.slide-item.active')) { 
        document.querySelector('.slide-item.active').classList.remove('active');
        document.querySelector('.slider-bullets>a.active').classList.remove('active');
    }
    
    document.querySelectorAll('.slide-item')[activeSlide].classList.add('active');
    document.querySelectorAll('.slider-bullets>a')[activeSlide].classList.add('active');
}

    btnPrev.addEventListener('click',  () => {
        if( activeSlide === 0)  activeSlide = sliderData.length;
        activeSlide--;
        console.log(sliderData.length)
        changeSlide();
    })

    btnNext.addEventListener('click', () => {
        activeSlide++; 
        if( activeSlide === sliderData.length)  activeSlide = 0;
        
        changeSlide();
    })

    document.querySelectorAll('.slider-bullets>a').forEach( function(items, i) {  
        items.addEventListener('click', () => { 
            activeSlide = i;
            changeSlide();
        })
        

    })


changeSlide();