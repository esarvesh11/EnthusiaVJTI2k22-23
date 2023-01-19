import React from "react";
import { useState } from "react";
// import CloseIcon from '../node@mui/icons-material/Close';
import CloseIcon from "../../node_modules/@material-ui/icons/Close"

import "./Gallery.css"
const Gallery = () => {

    let data = [
        {
            id: 1,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0006.JPG?raw=true',
        },
        {
            id: 2,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0036.JPG?raw=true',
        },
        {
            id: 3,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0048.JPG?raw=true',
        },
        {
            id: 4,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/IMG_8314.JPG?raw=true'
        },
        {
            id: 5,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0006.JPG?raw=true'
        },
        {
            id: 6,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0006.JPG?raw=true'
        },
        {
            id: 7,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0006.JPG?raw=true'
        },
        {
            id: 8,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0006.JPG?raw=true'
        },
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