let form = document.querySelector("#form");
let names = document.querySelector("#names");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let cards = document.querySelector("#cards");
let save = document.querySelector("#save");
let saves = document.querySelector("#cards");
let Tomato = document.querySelector("#Tomato");
let TurkeyMeat = document.querySelector("#TurkeyMeat");
let Olive = document.querySelector("#Olive");
let PickledCucumber = document.querySelector("#PickledCucumber");
let Mushroom = document.querySelector("#Mushroom");
let HorseMeat = document.querySelector("#HorseMeat");
let sausage = document.getElementById("sausages");
let pepper = document.getElementById("pepper");
let h = {};
save.addEventListener("click", () => {
  let out=[]
  let out2=[]
  let check = document.querySelectorAll('input[name="product"]:checked');
  let check2 = document.querySelectorAll('input[name="checkbox"]');
check.forEach((ch)=>{
  out.push(ch.value)
})
check2.forEach((ch2)=>{
  out2.push(ch2.value)
})
console.log(out2);

  
      
      ekrangaChiqarish(cards, h, out, out2);
})

function ekrangaChiqarish(list, arr, product, product2) {
  list.innerHTML = `
         <div class="card">
        <h2>salom</h2>
        <div class="card__header">
            <ul>
                <li>Name: <span> ${(arr.name = names.value)} </span></li>
                <li>Phone: <span>${(arr.phone = tel.value)} </span></li>
                <li>Adress: <span>${(arr.userAddress = email.value)}</span></li>
            </ul>
        </div>
        <span></span>
        <div class="card__body">
            <ul>
                <li>Dough thickness: <span> ${(arr.size =
                  select1.value)} </span></li>
                <li>Size: <span> ${(arr.size2 = select2.value)}</span></li>
                <li>On pizza: <span> ${product} </span></li>
                <li>Add: <span> ${product2}</span></li>
            </ul>
        </div>
        <span></span>
        <div class="card__footer">
            <ul>
                <li>Total: <span>40$</span></li>
            </ul>
        </div>
    </div>`;
}
