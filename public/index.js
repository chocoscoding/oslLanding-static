// Selector
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 900000000000000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = `${Math.ceil(count + inc)}`;
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}
let img = 1;
const changee = document.querySelector('#imgchange')
setInterval(() => {
    if(img === 1){
    }
    
    switch (img) {
        case 1:
            changee.src = 'img2.jpg'
            img = 2
            
            break;
        case 2:
            changee.src = 'img3.jpg'
            img = 3
            
            break;
        case 3:
            changee.src = 'img4.jpg'
            img = 4
            
            break;
        case 4:
            changee.src = 'img1.jpg'
            img = 1
            
            break;
    
    }

    
}, 30 * 1000);

document.querySelector('#contactustop').addEventListener('click', ()=>{
    document.querySelector('.linkscont').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#instagram').addEventListener('click', ()=>{
    window.location.href = 'https://www.instagram.com/oslogistics_?r=nametag'
})
document.querySelector('#email').addEventListener('click', ()=>{
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=oluexecutiveplastics@gmail.com'
})
document.querySelector('#whatsapp').addEventListener('click', ()=>{
    window.location.href = 'https://wa.me/message/FLNKQTFE27B3O1'
})
document.querySelector('#phone').addEventListener('click', ()=>{
    document.location.href = "tel:+2348028299167";
})