$(document).ready(function(){


  $(".product-img-wrap").hover(
    function () {
      let hover = $(this).data("hover");
      $(this).find("img").attr("src", hover);
    },
    function () {
      let dav_Image = $(this).data("dav");
      $(this).find("img").attr("src", dav_Image);
    }
  );



 $('.img-con').mouseover(function(){

 $(this).find('.btnicon').addClass('showw')
})

$('.img-con').mouseout(function(){

 $(this).find('.btnicon').removeClass('showw')
})

 











$('#dem').mouseout(function(){
 $('.tim').hide()

})

$('#ani').mouseover(function(){

$('.an').show()



})

$('#ani').mouseout(function(){

$('.an').hide()

})

$('#card').mouseover(function(){

  let line=$('#line')
  line.animate({width:'100px'})

})


$('#card').mouseout(function(){

  let line=$('#line')
  line.animate({width:'50px'})


})



$('#card2').mouseover(function(){

  let line=$('#line2')
  line.animate({width:'100px'})

})


$('#card2').mouseout(function(){

  let line=$('#line2')
  line.animate({width:'50px'})


})




$('#card3').mouseover(function(){

  let line=$('#line3')
  line.animate({width:'100px'})

})


$('#card3').mouseout(function(){

  let line=$('#line3')
  line.animate({width:'50px'})


})


$('#card5').mouseover(function(){

  let line=$('#line5')
  line.animate({width:'100px'})

})


$('#card5').mouseout(function(){

   let line=$('#line5')
   line.animate({width:'50px'})


})





$(window).scroll(function(){
$('.hidden').each(function(){
  let top=$(this).offset().top;
let below=$(window).scrollTop() + $(window).height();

if(below >top + 100){
  $(this).addClass('show');
}
})
})

$(window).trigger('scroll');


$('.nav-item.dropdown').on('mouseenter', function(){
    if($(window).width() >= 992){
      $(this).find('.dropdown-menu-custom').stop(true, true).slideDown(180);
    }
  }).on('mouseleave', function(){
    if($(window).width() >= 992){
      $(this).find('.dropdown-menu-custom').stop(true, true).slideUp(150);
    }
  });

  $('.nav-item.dropdown > .dropdown-toggle').on('click', function(dav){
    if($(window).width() < 992){
      dav.preventDefault();
      $(this).siblings('.dropdown-menu-custom').stop(true, true).slideToggle(180);
    } else {
      e.preventDefault();
    }
  });

  $('#mobileToggle').on('click', function(){
    $('#mobileMenu').stop(true, true).slideToggle(200);
  });














})




 setInterval(myTimer, 1000);
 function myTimer() {
   const date = new Date();
   document.getElementById("dem").innerHTML = date.toLocaleTimeString();
 }






let mycart=JSON.parse(localStorage.getItem("mi")) || [] 

cart()

const products_items=[
 {id:"Pistachios",price:80,name:'Akbari Salted Pistachios'},
  {id:"Gourmia",price:100,name:'Gourmia Energy Nuts & Seeds'},
  {id:"Kernels",price:150,name:'Karmiq Walnut Kernels'},
  {id:"Nutraj",price:150,name:'Nutraj Special Raisins'},
  {id:"Green",price:112,name:'Farms Green Pistachios'},
  {id:"California",price:180,name:'Karmiq California Almonds'},
  {id:"Dry Fruits",price:250,name:'King Mixed Dry Fruits'},
  {id:"Cranberries",price:350,name:'Premium Dried Cranberries'},
  {id:"Lotus",price:160,name:'Lotus'},
  {id:"Gent",price:150,name:'Karmiq soap Gent'},
  {id:"Trendy Loose",price:100,name:"Trendy Loose Non-Stretch"},
   {id:"Trendy Loose",price:100,name:"Trendy Loose Non-Stretch"},
    {id:"Trendy Loose",price:100,name:"Trendy Loose Non-Stretch"},
{id:"Patched Denim",price:80,name:"Patched Denim Jeans"},
{id:" Stretch Denim",price:70,name:" Stretch Denim Jorts Men"},
{id:"Crew Neck T-Shirt",price:30,name:"Crew Neck T-Shirt"},
{id:"Neck Short Sleeve",price:10,name:"Neck Short Sleeve"},
{id:"Liberty T-Shirt",price:20,name:"Liberty T-Shirt"},
  {id:"Topie Short",price:70,name:"Topie Short"},
  {id:"Super noodles",price:16,name:"Super Pack"},
   {id:"Super noodles",price:16,name:"Super Pack"},
{id:"Hot Pep noodles",price:16,name:"Hotpepper Noodles"},
{id:"Indomie Tables noodles",price:26,name:"Indomie Table Noodles"},
// {id:"Indomie Tables noodles",price:26,name:"Indomie Table Noodles"},
{id:"Onion Chiken Noodles",price:30,name:"Onion Chiken Noodles"},
{id:"Chiken Pepper Noodles",price:10,name:"Chiken pepper Noodles"},




  
]
function cart(btn){
 
  if(!(btn==undefined)){
  
  let product=products_items[btn]
 
let found=mycart.find(function(all_items){
  return all_items.id === product.id;
 
})
  
//mycart.push(found)
if(found){
  found.quantity++;

  
}
else{
  mycart.push({
     id:product.id,
     price:product.price,
     name:product.name,
     quantity:1
  })

}
  const text=document.createElement('span')

  text.innerText=product.id + ' added to cart!'
document.getElementById('alertt').innerHTML="";
  document.getElementById('alertt').appendChild(text)
  document.getElementById('alertt').style.display='block'

 setTimeout(function(){
  document.getElementById('alertt').style.display='none'
 },1000)


 
}





let badge=document.getElementById('num');
 
   badge.innerText=mycart.length



   let total=mycart.reduce(function(sum,myitems){
 
  return sum + myitems.price * myitems.quantity



},0)

localStorage.setItem("mi",JSON.stringify(mycart))
   let m=document.getElementById('k');
  
m.innerText='';
for(let i=0;i<mycart.length;i++){
  let loop=mycart[i]
  let item_total= loop.price * loop.quantity
  m.innerHTML +=`<div class="loop-con"> ${loop.id}-${loop.price}- ${loop.name}-${loop.quantity}-Total is $${item_total}  <br> <button class='btn-cart' onclick="dele(${i})"><i class="fa-solid fa-trash"></i></button>  <br>  `;
  m.style.color="black";

m.innerHTML+='</div>'
document.getElementById('add').innerHTML="Total = $" + total
 if(mycart){
   let o=document.getElementById('m')
   o.style.display='none'
 }








}
}

function dele(itemm){
  mycart.splice(itemm,1)
  cart()
 
}
function order(){
  let miText="Hello i want to order:\n\n";

  let total=mycart.reduce(function(sum,myitems){
 
  return sum + myitems.price * myitems.quantity



},0)
  
  for(let i=0;i<mycart.length;i++){
  let lo=mycart[i]
  let item_total= lo.price * lo.quantity
  
 miText +=  " Name: " + lo.name + "\n"
miText+=  " Id: " + lo.id + "\n"
miText+= " price: " + "$" + lo.price + "\n"
miText+= " Quantity: " + lo.quantity + "\n"
miText+= " Total: "  + "$" + item_total + "\n"
  }
 let all=document.getElementById('add').innerHTML="Total = "  + "$" + total
  window.location.href="https://wa.me/2348121232584?text="+ encodeURIComponent(miText)+encodeURIComponent(all)
}