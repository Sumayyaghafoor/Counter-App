const counter = document.querySelector('#counter');
const butt = document.querySelectorAll('.btn')

let count = 0;

 butt.forEach((btn) => {

    btn.addEventListener("click", (e) => {

      const styles = e.currentTarget.classList;

   if(styles.contain("increase")) {
    count++;
   } 
   else if(styles.contain("decrease")){
    count--;
   }
   else {
    count=0;
   }
   if (count > 0) {
    this.style.color ="blue"
   }
   if (count < 0) {
    this.style.color ="pink"
   }
   if (count === 0) {
    this.style.color ="gray"
   }
   counter.textContent = count;


    })
 })