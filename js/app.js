
let total_get_img = document.querySelectorAll('.boxgame img');

let oldimage;

console.log(total_get_img);

let body = document.querySelector('body');
let getoldimg = window.getComputedStyle(body);
oldimage = getoldimg.getPropertyValue("background-image").slice(4,-1)

function changebackground(){
    total_get_img.forEach(value =>{
        value.addEventListener('click',function(){
            //console.log(value.src);
            let newsrc = value.src;
            console.log(`replace image for change : , ${newsrc}, ${oldimage}`);
            if (oldimage != newsrc){
                console.log('background must replace!')
                setTimeout(() => {
                    body.setAttribute("style", "background-image: url(" + newsrc)
                  }, 1000);
            }else{
                console.log('no need replace background')
            }
        })
    })
}

changebackground();

