import React from "react";
import { useState } from "react";
// import CloseIcon from '../node@mui/icons-material/Close';
import CloseIcon from "../../node_modules/@material-ui/icons/Close"

import "./Gallery.css"
const Gallery = () => {

    let data = [
        {
            id: 1,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_4258.JPG',
        },
        {
            id: 2,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0036.JPG',
        },
        {
            id: 3,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0048.JPG',
        },
        {
            id: 4,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_9129.JPG'
        },
        {
            id: 5,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0058.JPG'
        },
        {
            id: 6,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0039.JPG'
        },
        {
            id: 7,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0051.JPG'
        },
        {
            id: 8,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0229.JPG'
        },
        {
            id: 9,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0226.JPG',
        },
        {
            id: 10,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/_MG_4028.JPG',
        },
        {
            id: 11,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/_MG_3987.JPG',
        },
        {
            id: 12,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_8314.JPG'
        },
        {
            id: 13,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_5345.JPG'
        },
        {
            id: 14,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_0200.JPG'
        },
        {
            id: 15,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/DSC_0291.JPG'
        },
        {
            id: 16,
            imgsrc: 'https://ik.imagekit.io/jjrubqbgu/done/IMG_4757.JPG'
        }
    ]


    const [model, setmodel] = useState(false);
    const [tempimgsrc, settempimgsrc] = useState('');



    const getImg = (imgsrc) => {
        settempimgsrc(imgsrc);
        setmodel(true);
    }

    return (
        <>
            <div className={model ?
                "w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black visible opacity-1 overflow-hidden z-50" : "w-full h-screen fixed top-0 left-0 bg-black invisible opacity-0 overflow-hidden z-50"}>
                <img className="w-auto h-auto max-w-full max-h-full block" src={tempimgsrc} alt="" />
                <CloseIcon className="fixed w-36 h-36 text-white inset-6 cursor-pointer" onClick={() => setmodel(false)} />
            </div>

            <div className="Gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index}
                                onClick={() => {
                                    getImg(item.imgsrc)

                                }}>
                                <img src={item.imgsrc} alt="" className="w-full" />
                            </div>
                        )
                    })
                }
            </div>


        </>
    )
}


export default Gallery;