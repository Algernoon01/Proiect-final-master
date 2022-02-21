import React, { useState } from "react";
import { useEffect } from "react";
import { getPicsByCategory, getCategories } from "../services/picsCollection";



const Portofolio = () => {


    const [pix, setPix] = useState([]);
    const [selectedPic, setSelectedPic] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const cats = getCategories();
        setCategories(cats);

    }, [])

    const handleZoom = (pic) => {
        setSelectedPic(pic);
    }

    return (
        <React.Fragment>
            <div className="p-2">
                {categories.map(cat => (<>
                <label className="m-3" style={{color: "white"}}>{cat}</label>
                <div className="photo-colection-container">
                    {getPicsByCategory(cat).map((p, index) => (
                    <div key={"portofolio-photo-" + index} style={{ cursor: 'pointer', margin: "0 1rem" }} onClick={() => handleZoom(p)}>
                        <img src={p.path} alt="pic" width={320} height="auto"/>
                        </div>
                    ))}
                </div>
                </>))}
            </div>
            {selectedPic &&
                <div className="photo-zoom-container-modal">
                    <button className="portofolio-button-close-modal" onClick={() => setSelectedPic(undefined)}>X</button>
                    <img src={selectedPic.path} alt="pic" id="image-modal-zoom-container"/>
                </div>}
        </React.Fragment>
    )
}

export default Portofolio;