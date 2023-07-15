
let total_get_img = document.querySelectorAll('.boxgame img');
let signMenu = document.querySelector('#signinmenu');
let signupMenu = document.querySelector('#signupmenu');

let btn_signup = document.querySelector('#backsignup');
let close_btn  = document.querySelectorAll('.close_btn');

let btn_signin = document.querySelector('#backsignin');
let oldimage;

let body = document.querySelector('body');
let getoldimg = window.getComputedStyle(body);

let gamesection = document.querySelector('.gamesection');

oldimage = getoldimg.getPropertyValue("background-image").slice(4,-1);

window.onload = () =>{
  console.log('loaded pages')
  //getUsers();
    
 /*
  try {
    require.config({
        paths: {
          'fontawesome': 'vendor/fontawesome/fontawesome.min',
          'fontawesome/solid': 'vendor/fontawesome/solid.min'
        },
        shim: {
          'fontawesome': {
            deps: ['fontawesome/solid']
          }
        }
      })
    
      require(['fontawesome'], function (fontawesome) {
        console.log('Congrats, Font Awesome is installed using Require.js')
      })
    }
    catch {
      console.log('not found font awesome icons!')
    }*/

}



function changebackground(){
    total_get_img.forEach(value =>{
        value.addEventListener('click',function(){
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



function back_signup(){
    console.log('signup page is show .. soon!')
    signMenu.classList.toggle('hide');
    signupMenu.classList.toggle('show');
    gamesection.classList.add('active');
}

function back_signin(){
    if(signupMenu.classList.contains('show')){
        signupMenu.classList.remove('show');
        signMenu.classList.replace('hide','show');
        gamesection.classList.remove('active');
        

    }
}

btn_signin.addEventListener('click',back_signin);
btn_signup.addEventListener('click',back_signup);



let signupapi  = "http://localhost:8000/register";
let loginapi = "http://localhost:8000/login";



function closepage(){

  let text = "are you can clear login page :? !\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "clear login page!";
    signupMenu.style.display = 'none';
    signMenu.style.display = 'none';

  } else {
    text = "You canceled!";
    return text;

  }
}

//resonsive page 



close_btn.forEach(index =>{
  index.addEventListener('click',closepage);
})

async function getUsers() {
  try {
      let res = await fetch(signupapi,{
        method:'POST',
        mode:'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return await res.json();

  } catch (error) {
      console.error('error for get signup api : ', error);
  }

try{
    let getlogin = await fetch(loginapi,{
      method:'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    //return await getlogin.json();

  } catch (error) {
      console.error('error for get login api : ', error);
  }

}

