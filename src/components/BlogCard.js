import React from 'react'

function BlogCard(props) {
    return (
        <div className='w-[90em] mx-auto flex items-center border-2 rounded-lg shadow-lg'>
            <div>
                <img src = {props.cardImage} alt = "blog card photo" className='rounded-l-lg w-[50em]'></img>
            </div>

            <div className='mx-5'>
                <h1 className='font-bold text-[2.5em]'>{props.cardTitle}</h1>
                <p>{props.cardDesc}</p>
                <button type = "submit" className='border-2 border-[#3A3A3A] rounded-lg px-5 py-2 my-2 transition ease-in-out hover:bg-[#3A3A3A] hover:text-white'>Know More</button>
            </div>
        </div>
    )
}

BlogCard.defaultProps = {
    cardImage : "https://rare-gallery.com/mocahbig/27986-Artistic-Pixel-Art-4k-Ultra-HD-Wallpaper.png",
    cardDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos natus laborum architecto blanditiis dolores autem magnam, exercitationem enim unde similique numquam delectus voluptas ducimus veniam nam repellat dolorum nisi labore.",
    cardTitle : "Title"
}

export default BlogCard