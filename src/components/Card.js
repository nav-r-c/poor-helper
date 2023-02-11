import React from 'react'

function Card(props) {
    return (
        <div className='w-[25em] h-[30em] bg-[#F5F5F5] rounded-lg m-5 shadow-lg'>
            <div>
                <img src = {props.cardImage} alt = "card photo" className='w-[100%] rounded-t-lg'></img>
            </div>
            <div>
                <h1 className='m-2 text-[2em] font-bold text-center'>{props.cardTitle}</h1>
                <p className='text-center m-2'>{props.cardInfo}</p>
            </div>
            
            <div>
                <button className='border-2 px-5 py-2 my-10 ml-[35%] rounded-md border-[#3A3A3A] transition ease-in-out hover:bg-[#3A3A3A] hover:text-white'>Know More</button>
            </div>
       
        </div>
    )
}

Card.defaultProps = {
    cardTitle : "Card Title",
    cardInfo : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, tenetur omnis? Excepturi sed maxime neque molestiae distinctio corporis voluptatibus reprehenderit.",
    cardImage : "https://wallpaperaccess.com/full/2122578.jpg"

}

export default Card