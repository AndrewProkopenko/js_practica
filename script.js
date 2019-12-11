

    let accHead = document.querySelectorAll(".content h2") // коллекция всех заголовков 
    
    for(let i=0; i < accHead.length; i++) { 
        accHead[i].addEventListener('click', ()=> { 
            
            switch(i){ 
                case 0: 
                {   console.log(i);
                    accHead[0].nextElementSibling.classList.toggle('transf-accord') ;
                    accHead[1].nextElementSibling.classList.remove('transf-accord') ;
                    accHead[2].nextElementSibling.classList.remove('transf-accord') ;
                }
                case 1: {
                    console.log(i);
                    accHead[0].nextElementSibling.classList.remove('transf-accord') ;
                    accHead[1].nextElementSibling.classList.toggle('transf-accord') ;
                    accHead[2].nextElementSibling.classList.remove('transf-accord') ;
                }
                case 2:  {
                    console.log(i);
                    accHead[0].nextElementSibling.classList.remove('transf-accord') ;
                    accHead[1].nextElementSibling.classList.remove('transf-accord') ;
                    accHead[2].nextElementSibling.classList.toggle('transf-accord') ;
                }
            }
        })
    }

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











// MENUuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
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
// MENU

let menuAside = [
    {
        text: 'Home',
        url: '#'
    }, 
    {
        text: 'Main',
        url: '#',
        
    }, 
    {
        text: 'General',
        url: '#'
    }, 
    {
        text: 'Unusual',
        url: '#',
        submenu: [
            { 
                text: 'Unusual_First',
                url: '#',
            },
            { 
                text: 'Unusual_Second',
                url: '#',
            },
            { 
                text: 'Unusual_Third',
                url: '#',
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
let cont = document.createElement("div");
cont.classList.add('list');
listContainer.appendChild(cont);


// let li = document.createElement('li');
// let link = document.createElement('a');

// let list = document.createElement('ul');
// cont.appendChild(list);

function render(array) { 

   
    let list = document.createElement('ul');
    cont.appendChild(list);

    array.map( (menuItem, i) => { 
        
        
        let li = document.createElement('li');
        let link = document.createElement('a');
        list.appendChild(li)
        li.appendChild(link)

        link.innerText = menuItem.text;
        link.setAttribute ( 'href' , menuItem.url );
       
        if(menuItem.submenu) { 
            
            console.log(i, menuAside[i].submenu);
        
            render(menuItem.submenu)
    
        }
       
    })
};
render(menuAside);


  