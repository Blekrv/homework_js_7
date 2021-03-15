// let $p = document.getElementsByTagName('p')
// console.log($p)

// for (let i = 0; i < $p.length; i++){
//     $p[i].addEventListener('click', ()=>{
//         if ($p[i].textContent === 'Hello'){
//             $p[i].style.color = 'red'
//             $p[i].textContent = 'World'
//         } else {
//             $p[i].style.color = 'black'
//             $p[i].textContent = 'Hello'
//         }
//     })
// }
// for (let i = 0; i < $p.length; i++){
//     $p[i].addEventListener('click', function(){
//         if (this.textContent === 'Hello'){
//             this.style.color = 'red'
//             this.textContent = 'World'
//         } else {
//             this.style.color = 'black'
//             this.textContent = 'Hello'
//         }
//         console.log(this)
//     })
//     $p[i].addEventListener('mousemove', ()=> {
//         $p[i].style.color = 'green'
//         $p[i].style.fontWeight = 'bold'
//         $p[i].style.cursor = 'pointer'
//         $p[i].style.marginLeft = '10px'
//     })
//     $p[i].addEventListener('mouseout', ()=> {
//         $p[i].style.color = 'red'
//         $p[i].style.fontWeight = 'normal'
//         $p[i].style.marginLeft = '0'
//     })
// }

// let $list = document.querySelector('ul.list'),
//     $btn = document.querySelector('button')
//     list_items = ''
// $btn.addEventListener('click', function(){
// list_items += '<li>****</li>'
// console.log(list_items)
// $list.innerHTML = list_items
// let li = document.createElement('li')
// li.textContent = '****'
// $list.insertAdjacentElement('beforebegin', li) // $list.before(li)
// $list.insertAdjacentElement('afterbegin', li)  // $list.prepend(li)
// $list.insertAdjacentElement('beforeend', li)   // $list.append(li)
// $list.insertAdjacentElement('afterend', li)    // $list.after(li)

// $list.insertAdjacentText('afterbegin', 'text ')
// $list.insertAdjacentHTML('afterbegin','<li>****</li>')
// })
// let $link = document.querySelector('a')
// console.log($link.attributes)
// console.log($link.getAttribute('href'))
// console.log($link.hasAttribute('name'))
// console.log($link.attributes[0].nodeValue)
// $link.setAttribute('class','myClass newClass')
// $link.setAttribute('target','_self')
// // $link.removeAttribute('class')

// console.log($link.className)
// console.log($link.classList)
// console.log($link.classList.value)
// console.log($link.classList.contains('myClass'))
// $link.classList.toggle('myClass_NEW')
// $link.classList.remove('myClass_NEW')
// $link.classList.replace('myClass', 'myClassNEW')
// $link.classList.add('foooo', 'booo')

// console.log($link.matches('.myClass.newClass'))

let $place_list = document.querySelectorAll("aside ul.places li"),
  $article_list = document.querySelectorAll("article");

let prev_visible_item = 0;

for (let i = 0; i < $place_list.length; i++) {
  $place_list[i].addEventListener("mousemove", () => {
    $place_list[i].style.color = "red";
    $place_list[i].style.fontWeight = "bold";
    $place_list[i].style.cursor = "pointer";
    $place_list[i].style.paddingLeft = "10px";
    $place_list[i].classList.add("arrow");
    $place_list[i].style.transition = ".5s";
  });
  $place_list[i].addEventListener("mouseout", () => {
    $place_list[i].style.color = "black";
    $place_list[i].style.fontWeight = "normal";
    $place_list[i].style.paddingLeft = "0";
    $place_list[i].classList.remove("arrow");
  });
  $place_list[i].addEventListener("click", function () {
    if ($article_list[i + 1].style.display !== "block") {
      $article_list[i + 1].style.display = "block";
      $article_list[prev_visible_item].style.display = "none";
      prev_visible_item = i + 1;
    }
    let $place_list_active = document.querySelector("aside ul.places li.active")
    console.log($place_list_active)
    if ($place_list_active){
      $place_list_active.classList.remove('active')
    }
    this.classList.add('active');
  });
}
