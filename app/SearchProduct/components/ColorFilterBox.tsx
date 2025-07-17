

import React, { useEffect, useState } from 'react'
import "../styles/ColorFilterBox.scss"
import { faSquarePlus, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ColorFilterBox = () => {
    const [selectedColorsList, setselectedColorList] = useState<string[]>([])
    const [ColorsList, setColorsList] = useState<string[]>(['blue', 'white', 'black', 'cyan', 'red', 'green', 'salmon'])

    const RemoveAllSelectedColors = () => {
        setColorsList(prev => {
            const merged = [...prev, ...selectedColorsList];
            return Array.from(new Set(merged));
        });
        setselectedColorList([]);
    };

    const RemoveTheSelectedColor = (color: string) => {
        if (ColorsList.includes(color)) return
        setColorsList((prev) => (
            [...prev, color]
        ))

        if (selectedColorsList.includes(color)) {
            const newList = selectedColorsList.filter(el => el !== color);
            setselectedColorList(newList)
        }

    }

    const AddTheSelectedColor = (color: string) => {
        if (selectedColorsList.includes(color)) return
        setselectedColorList((prev) => (
            [...prev, color]
        ))
        if (ColorsList.includes(color)) {
            const newList = ColorsList.filter(el => el !== color);
            setColorsList(newList)
        }

    }

    useEffect(() => {
        const SelectedColorsBox = document.getElementsByClassName("SelectedColors")[0]
        const ColorListBox = document.getElementsByClassName("Colors-Options")[0]
        if (selectedColorsList.length !== 0) {
            if (!SelectedColorsBox.classList.contains("colorisselected")) {
                SelectedColorsBox.classList.add("colorisselected")
            }
        } else {
            if (SelectedColorsBox.classList.contains("colorisselected")) {
                SelectedColorsBox.classList.remove("colorisselected")
            }
        }

        if (ColorsList.length === 0) {
            ColorListBox.classList.add("empty");
        } else {
            ColorListBox.classList.remove("empty");
        }

    }, [selectedColorsList, setselectedColorList, ColorsList, setColorsList])

    return (
        <>
            <div className="Color-Filter-Box filter-box">
                <div className="Title">Color</div>
                <div className="SelectedColors">
                    <div className="remove-all-icons" onClick={() => { RemoveAllSelectedColors() }}>
                        <p> Remove All</p>
                        <FontAwesomeIcon icon={faSquareXmark} id='RemoveAllSelectedColors' />
                    </div>
                    <div className="Colors">
                        {selectedColorsList.map((color) => (
                            
                            <div key={color} className={`ColorBox ${color}`} style={{ "--selected-color-box": color  } as React.CSSProperties} onClick={() => { RemoveTheSelectedColor(color) }} >
                                <div className="CancelIcon selected">
                                    <FontAwesomeIcon icon={faSquareXmark} id={`RemoveSelectedColor${color}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Colors-Options">
                    {ColorsList.map((color) => (
                        <div key={color} className={`ColorBox ${color}`} style={{ "--filter-color-box": color } as React.CSSProperties}onClick={() => { AddTheSelectedColor(color) }}>
                            <div className="SelectColorIcon" >
                                <FontAwesomeIcon icon={faSquarePlus} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ColorFilterBox
