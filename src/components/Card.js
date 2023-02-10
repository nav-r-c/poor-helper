import React from 'react'

function Card(props) {
    return (
        <div className='w-[22%] h-[35em] bg-[#F5F5F5] rounded-lg m-5'>
            <img src = "https://wallpaperaccess.com/full/2122578.jpg" alt = "card photo" className='w-[100%] rounded-t-lg'></img>
            <h1 className='m-2 text-[2em] font-bold text-center'>{props.cardTitle}</h1>
            <p className='text-center m-2'>{props.cardInfo}</p>
            <button type = "submit" className='border-2 px-5 py-2 rounded-md mx-auto border-[#3A3A3A] transition ease-in-out hover:bg-[#3A3A3A] hover:text-white'>Know More</button>
       
        </div>
    )
}

Card.defaultProps = {
    cardTitle : "Card Title",
    cardInfo : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, tenetur omnis? Excepturi sed maxime neque molestiae distinctio corporis voluptatibus reprehenderit."
}

export default Card