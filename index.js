gsap.from(".hero-text h1", { duration: 1, y: -50, opacity: 0, stagger: 0.2 });
gsap.from(".hero-text h2", { duration: 1, y: -50, opacity: 0, delay: 1 });


const femaleProducts=[
{
    img1:"./images/women-col/red-mol.webp",
    img2:"./images/women-col/red.jpeg ",
    description:"Smocked-bodice dress",
    price:"Rs.1,299,00"

},
{
    img1:"./images/women-col/blk-col.webp",
    img2:"./images/women-col/blk-col-mol.jpeg",
    description:"Overlock-detail-dress",
    price:"Rs.1,299.00" 
},
{   
    img1:"./images/women-col/button-col.webp" ,
    img2:"./images/women-col/button-mol.webp",
    description:"Button-top vest top",
    price:"RS.5,000.00",
},
{
    img1:"./images/women-col/gray-col.webp",
    img2:"./images/women-col/gray-col-mol.jpeg",
    description:"Dress with Flared Skirt",
    price:"Rs.4,000.00",
}
// },
// {
//     img1:"",
//     img2:"",
//     description:"",
// }
];
var procard = document.querySelector(".procards");



var  container= "";
femaleProducts.forEach(function(products){

    container +=`
    <div class="procard w-60   object-cover rounded-md  gap-3  p-1 bg-zinc-300">
               
               
            
     <img src="${products.img1}" class=" h-60 object-cover object-fit w-full object-top  rounded-md " alt="">
               
               <div class="pro-des  mt-4">
                 <h1 class="font-bold text-lg">${products.description}</h1>
                 
                 <h1 class="font-bold text-lg">${products.price}</h1>
                </div>

            <button class= "bg-red-400 px-3 py-2 mt-2 text-white font-semibold rounded-md"> AddTo Cart</button>
                
                </div>` 
}
);
     procard.innerHTML=container;



     const maleProduct =[
        {
        img1:"./images/women-col/men1col.webp",
        img2:"./images/women-col/men1mol.jpeg",
        description:" linen-blend trousers",
        price:"Rs.2,699.00",
     },
     {
        img1:"./images/women-col/whitman2-col.webp",
        img2:"./images/women-col/white2-mol.jpeg",
        description:"Loose White Fit T-shirt",
        price:"Rs.1,299.00",
     },
     {
        img1:"./images/women-col/lemon-m3-col.webp",
        img2:"./images/women-col/lemon-m3.jpeg",
        description:"Fit Crinkled resort shirt",
        price:"Rs.1,999.00",
     },
     {
        img1:"./images/women-col/reg-f-col.webp",
        img2:"./images/women-col/reg-t-mol.jpeg",
        description:"Regular White Fit T-shirt",
        price:"Rs.599.00",
     }];

     var clutter="";
     var procards1 =document.querySelector(".procards1")

     maleProduct.forEach(function(products1){
        clutter+=`  <div class="procard  w-60  object-cover object-fit rounded-md   gap-3  px-1  py-1 bg-zinc-300">
               
              
            
                <img src="${products1.img1}" class=" h-60 object-cover w-full object-top  rounded-md " alt="">
                          
                          <div class="pro-des mt-2 ">
                            <h1 class="font-bold text-lg">${products1.description}</h1>
                            
                            <h1 class="font-bold text-lg">${products1.price}</h1>
                            
                           </div>

            <button class= "bg-red-400 px-3 py-2 mt-2 text-white font-semibold rounded-md"> AddTo Cart</button>

                           </div> `
     });

     procards1.innerHTML=clutter;



