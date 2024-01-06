//product-data
const eCommerceData = [
    {
      id: 1,
      productName: "laptop",
      productPrice: 29.99,
      productImg: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Electronics",
    },
    {
      id: 2,
      productName: "Shoping",
      productPrice: 49.99,
      productImg: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Clothing",
    },
    {
      id: 3,
      productName: "KitChen Blender",
      productPrice: 19.99,
      productImg: "https://plus.unsplash.com/premium_photo-1681826671576-8d612accc77a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Home and Kitchen",
    },
    {
      id: 4,
      productName: "Books Self",
      productPrice: 39.99,
      productImg: "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Books",
    },
    {
      id: 5,
      productName: "Games",
      productPrice: 59.99,
      productImg: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Toys and Games",
    },
    {
      id: 6,
      productName: "Fitnes Tracker",
      productPrice: 79.99,
      productImg: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Sports and Outdoors",
    },
    {
      id: 7,
      productName: "Cosmetic",
      productPrice: 99.99,
      productImg: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Beauty and Personal Care",
    },
    {
      id: 8,
      productName: " Health Foods",
      productPrice: 69.99,
      productImg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCategory: "Health",
    },
  ];
  function product(){
    const productContainer=document.getElementById('productContainer');
    for( let object of eCommerceData){
      console .log(object);
      const div=document.createElement('div')
      div.classList="card bg-base-100 shadow broder"
      div.innerHTML=`
      <figure class="h-60"><img class="h-full w-full" src= ${object.productImg} 
      alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">${ object.productName}</h2>
        <p> Category:${object.productCategory}</p>
        <h2>Price:${object.productPrice}</h2>
        <div class="card-actions justify-end">
          <button onclick=" handlen(this)" class="btn btn-primary">Add to card</button>
        </div>
      </div>
      `
      productContainer .appendChild(div);
    }
  
  }
  product()
  function handlen(event){
    console.log(event.parentNode.parentNode.childNodes[1].innerHTML)
  }