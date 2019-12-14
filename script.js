
// accordion 
    let accHead = document.querySelectorAll(".content h2") // коллекция всех заголовков 
    
    accHead.forEach( function(item, i, accHead) {
        accHead[i].addEventListener('click', ()=> {
            accHead[i].nextElementSibling.classList.toggle('transf-accord') ;
            for(let n = 0 ; n < accHead.length;n++ ) { 
                if( n == i) continue;
                accHead[n].nextElementSibling.classList.remove('transf-accord') ;
            }
        });
    });
// accordion end



    // for(let i=0; i < accHead.length; i++) { 
    //     accHead[i].addEventListener('click', ()=> { 
            
    //         switch(i){ 
    //             case 0: 
    //             {   console.log(i);
    //                 accHead[0].nextElementSibling.classList.toggle('transf-accord') ;
    //                 accHead[1].nextElementSibling.classList.remove('transf-accord') ;
    //                 accHead[2].nextElementSibling.classList.remove('transf-accord') ;
    //             }
    //             case 1: {
    //                 console.log(i);
    //                 accHead[0].nextElementSibling.classList.remove('transf-accord') ;
    //                 accHead[1].nextElementSibling.classList.toggle('transf-accord') ;
    //                 accHead[2].nextElementSibling.classList.remove('transf-accord') ;
    //             }
    //             case 2:  {
    //                 console.log(i);
    //                 accHead[0].nextElementSibling.classList.remove('transf-accord') ;
    //                 accHead[1].nextElementSibling.classList.remove('transf-accord') ;
    //                 accHead[2].nextElementSibling.classList.toggle('transf-accord') ;
    //             }
    //         }
    //     })
    // }





    // accHead[0].addEventListener('click', first)
    // accHead[1].addEventListener('click', second)
    // accHead[2].addEventListener('click', third)

// function first () {
//     accHead[0].nextElementSibling.classList.toggle('transf-accord') ;
//     accHead[1].nextElementSibling.classList.remove('transf-accord') ;
//     accHead[2].nextElementSibling.classList.remove('transf-accord') ;
// }
// function second () {
//     accHead[0].nextElementSibling.classList.remove('transf-accord') ;
//     accHead[1].nextElementSibling.classList.toggle('transf-accord') ;
//     accHead[2].nextElementSibling.classList.remove('transf-accord') ;
// }
// function third () {
//     accHead[0].nextElementSibling.classList.remove('transf-accord') ;
//     accHead[1].nextElementSibling.classList.remove('transf-accord') ;
//     accHead[2].nextElementSibling.classList.toggle('transf-accord') ;
// }











// MENU open
let block = document.querySelector('.block')
let burg = document.querySelector('.burger')

block.addEventListener('click', menuFunc)
document.addEventListener('click' , closeMenu)


function CloseOrOpen() { 
    block.classList.toggle('transf')
    burg.classList.toggle('no-transf') 
    burg.classList.toggle('burger-icon') 
    burg.classList.toggle('times-icon') 
}

function menuFunc() { 
    if(block.classList.contains('transf')){
        if (event.target == burg && burg.classList.contains('times-icon')) { 
            CloseOrOpen()
        }           
     } 
    else {
        CloseOrOpen()
    }
}

function closeMenu() { 
   if (block.classList.contains('transf')) { 
       if (event.target != block && event.target != burg ) {
        CloseOrOpen()
        } 
   }

}
// MENU open end



// MENU render

let menuAside = [
    {
        text: 'Home',
        url: '1#'
    }, 
    {
        text: 'Main',
        url: '2#',
        
    }, 
    {
        text: 'General',
        url: '3#'
    }, 
    {
        text: 'Unusual',
        url: '4#',
        submenu: [
            { 
                text: 'Unusual_First',
                url: '4.1#',
            },
            { 
                text: 'Unusual_Second',
                url: '4.2#',
            },
            { 
                text: 'Unusual_Third',
                url: '4.3#',
            }
            
        ]
    }, 
    {
        text: 'Magic',
        url: '#5'
    }, 
    {
        text: 'Limpopo',
        url: '#6'
    } 
]

let listContainer = document.getElementById('list-container');


let list = document.createElement("ul");
list.classList.add('list');
listContainer.appendChild(list);


    function render(array) { 
        
        array.forEach( function(item, i) { 
            let li = document.createElement('li');
            let link = document.createElement('a');
            
            li.appendChild(link);
            list.appendChild(li); 
            link.innerText = array[i].text;
            link.href = array[i].url;
            if (array[i].submenu) { 
                // console.log(1);
                // let ul = document.createElement('ul');
                // ul.classList.add('list'); 
                // li.appendChild(ul);
                render(array[i].submenu)
            }
        })
        
       
        
        
    }
render(menuAside)
  