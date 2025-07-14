

import React, { useEffect, useState } from 'react'
import "../styles/SizeFilterBox.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
const SizeFilterBox = () => {
  const [SizesList, setSizesList] = useState<string[]>(['S', 'M', 'L', "XL", "XXL", "3XL", "XS"])
  const [selectSizesList, setselectedSizesList] = useState<string[]>([])

  const AddTheSelectedSize = (size: string) => {
    if (selectSizesList.includes(size)) return
    setselectedSizesList((prev) => (
      [...prev, size]
    ))
    if (SizesList.includes(size)) {
      const newList = SizesList.filter(el => el !== size);
      setSizesList(newList)
    }

  }
  const RemoveTheSelectedSize = (size: string) => {
    if (SizesList.includes(size)) return
    setSizesList((prev) => (
      [...prev, size]
    ))

    if (selectSizesList.includes(size)) {
      const newList = selectSizesList.filter(el => el !== size);
      setselectedSizesList(newList)
    }

  }

  const removeAllSelectedSizes = () => {
    setSizesList(prev => {
      const merged = [...prev, ...selectSizesList];
      return Array.from(new Set(merged));
    });
    setselectedSizesList([]);
  };

  useEffect(() => {
    const SelectedSizesBox = document.getElementsByClassName("SelectedSizes")[0]
    const SizesListBox = document.getElementsByClassName("Sizes-Options")[0]
    if (selectSizesList.length !== 0) {
      if (!SelectedSizesBox.classList.contains("sizeisselected")) {
        SelectedSizesBox.classList.add("sizeisselected")
      }
    } else {
      if (SelectedSizesBox.classList.contains("sizeisselected")) {
        SelectedSizesBox.classList.remove("sizeisselected")
      }
    }

    if (SizesList.length === 0) {
      SizesListBox.classList.add("empty");
    } else {
      SizesListBox.classList.remove("empty");
    }

  }, [selectSizesList, setselectedSizesList, SizesList, setSizesList])

  return (
    <>
      <div className="Size-Filter-Box filter-box">
        <div className="Title">Size</div>
        <div className="SelectedSizes">
          <div className="remove-all-icons">
            <p> Remove All</p>
            <FontAwesomeIcon icon={faSquareXmark} id='RemoveAllSelectedSize' onClick={removeAllSelectedSizes} />
          </div>
          <div className="Sizes">
            {selectSizesList.map((size) => (
              <div key={size} className={`SizeBox ${size}-remove ${size.length>1?"extend":""}`} onClick={() => { RemoveTheSelectedSize(size) }} >
                <div className="size-text">{size}</div>
                <div className="CancelIcon" >
                  <FontAwesomeIcon icon={faSquareXmark} id={`RemoveSelectedSize-${size}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Sizes-Options">
          {SizesList.map((size) => (
            <div key={size} className={`SizeBox ${size}-add ${size.length>1?"extend":""}`} onClick={(e) => { AddTheSelectedSize(size) }} >
              <div className="size-text">{size}</div>
              <div className="AddIcon" >
                <FontAwesomeIcon icon={faSquarePlus} id={`AddSelectedSize-${size}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SizeFilterBox
