import React from 'react';

function Card() {

    const data = [
        {
            image: "https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
            name: "Airpods",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. !",
            instock: true
        },

        {
            image: "https://plus.unsplash.com/premium_photo-1681364365147-66aedd028205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
            name: "Face Cream",
            description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet!",
            instock: false
        },

        {
            image: "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vaXN0dXJpemVyfGVufDB8fDB8fHww",
            name: "Moisturiser",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, perferendis expedita? ",
            instock: false
        }
    ];

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
                {data.map((elem , index) => (
                    <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden ">
                        <div className="w-full h-32 bg-zinc-300">
                            <img className="h-full w-full object-cover" src={elem.image} alt="" />
                        </div>
                        <div className="w-full px-3 py-4">
                            <h2 className="font-semibold px-3">{elem.name}</h2>
                            <p className="text-sm py-3 px-3 mt-2">{elem.description}</p>
                            <button className={`px-4 py-1 ${elem.instock ? "bg-sky-600" : "bg-red-600"} rounded text-sm text-zinc-100 mt-3`}>
                            {elem.instock ? "In Stock" : "Out of Stock"}
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}

export default Card;