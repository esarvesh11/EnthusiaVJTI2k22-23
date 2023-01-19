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
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0058.JPG?raw=true',
        },
        {
            id: 4,
            imgsrc: 'https://github.com/esarvesh11/DSA/blob/main/short%20list%20photo/DSC_0171.JPG?raw=true'
        },
        {
            id: 5,
            imgsrc: 'https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 6,
            imgsrc: 'https://images.unsplash.com/photo-1673958123705-92394f541cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 7,
            imgsrc: 'https://images.unsplash.com/photo-1674049949385-a475815ec415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 8,
            imgsrc: 'https://images.unsplash.com/photo-1673972419547-d570c5a78223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 9,
            imgsrc: 'https://images.unsplash.com/photo-1673855945969-5a340b5c0843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 10,
            imgsrc: 'https://images.unsplash.com/photo-1673995544189-9a97fe3c60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 11,
            imgsrc: 'https://images.unsplash.com/photo-1673986042042-00e8228ae46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 12,
            imgsrc: 'https://images.unsplash.com/photo-1673632156153-d3baf0d0401b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
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