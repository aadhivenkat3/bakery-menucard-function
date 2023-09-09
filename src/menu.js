import React from 'react'

const cakeData = [
    {
        name : 'Blueberry',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 6,
        photoName : 'cake/blueberry.jpg',
        soldOut : false, 
    },
    {
        name : 'ButterScotch',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 8,
        photoName : 'cake/butterscotch.jpg',
        soldOut : false, 
    },
    {
        name : 'Chocolate',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 10,
        photoName : 'cake/chocolate.jpg',
        soldOut : false, 
    },
    {
        name : 'Fruit-Overload',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 6,
        photoName : 'cake/fruit-overload.jpg',
        soldOut : false, 
    },
    {
        name : 'Fudge',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 10,
        photoName : 'cake/fudge.jpg',
        soldOut : false, 
    },
    {
        name : 'Pineapple',
        ingradients : 'Mithai, Cakes, Breads, Snacks and Sweets',
        price : 10,
        photoName : 'cake/pineapple.jpg',
        soldOut : true, 
    },
];

const Menu = () => {

    const cakes = cakeData;
    //const pizzas = [];
    const numCakes = cakes.length;

  return (
    <div>
        <h2 className = "head">Our Bakery menu</h2>
        <p className = "para">Cheris The Sweet Time</p>
        
            <div>
                
                {numCakes > 0 ? (
                <div className = "pizzas">

                    {cakes.map((list,key) =>(
                    
                    <Cake
                    cakeObj = {list}
                    key = {list.name}
                    />
                ))}
                </div> ) :(<p>we're working on it</p>)}
               
            </div>

        
    </div>
    
  );
}



const Cake = ({cakeObj}) => {

    console.log(cakeObj);
    
    //if (pizzaObj.soldOut) return null;
  return (
    <div>

        <div className =  {`pizza ${cakeObj.soldOut ? 'sold-out' : ''}`}>

            <img src = {cakeObj.photoName} alt = {cakeObj.name} width = "150" height = "150"></img>

            <div className = 'content-1'>

                <h2>{cakeObj.name}</h2>
                <p>{cakeObj.ingradients}</p>
                <span>{cakeObj.soldOut ? 'SOLD OUT' : cakeObj.price}</span>

            </div> 

        </div>

    </div>
  )
}


export default Menu;
