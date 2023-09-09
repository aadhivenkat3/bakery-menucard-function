import React from 'react'

const  Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 18;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen); 

    if (!isOpen){
        return <p className='close'>we are closed!!</p>
    }

  return (
    <footer className='footer'>
        {isOpen ? (
            <div className='order'>

                <p>we're open until {closeHour}:00. come and visit us or order Online</p>
                <button className='btn'>Order</button>

            </div>  
        ) : (
            <p>we are closed!!</p>
        )}
           
    </footer>
  )
}

export default Footer;