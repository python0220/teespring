import { faSquarePlus, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import "../styles/BrandFilterBox.scss"


const BrandFilterBox = () => {
    const [SampleBrands, setSampleBrands] = useState<string[]>(['Nike', 'Peter England', 'Vike', 'Sike', 'Like', 'Bike'])
    const [SelectedBrandsList, setSelectedBrandsList] = useState<string[]>([])

    const RemoveAllSelectedBrands = () => {
        setSampleBrands(prev => {
            const merged = [...prev, ...SelectedBrandsList];
            return Array.from(new Set(merged));
        });
        setSelectedBrandsList([]);
    };

    const RemoveTheSelectedBrand = (brand: string) => {
        if (SampleBrands.includes(brand)) return
        setSampleBrands((prev) => (
            [...prev, brand]
        ))

        if (SelectedBrandsList.includes(brand)) {
            const newList = SelectedBrandsList.filter(el => el !== brand);
            setSelectedBrandsList(newList)
        }

    }

    const AddTheSelectedBrand = (brand: string) => {
        if (SelectedBrandsList.includes(brand)) return
        setSelectedBrandsList((prev) => (
            [...prev, brand]
        ))
        if (SampleBrands.includes(brand)) {
            const newList = SampleBrands.filter(el => el !== brand);
            setSampleBrands(newList)
        }

    }

    useEffect(() => {
        const SelectedBrandsBox = document.getElementsByClassName("Clear-All-Selected-Options-Box")[0]
        const BrandListBox = document.getElementsByClassName("Filter-Options-Box")[0]
        if (SelectedBrandsList.length !== 0) {
            if (!SelectedBrandsBox.classList.contains("brandisselected")) {
                SelectedBrandsBox.classList.add("brandisselected")
            }
        } else {
            if (SelectedBrandsBox.classList.contains("brandisselected")) {
                SelectedBrandsBox.classList.remove("brandisselected")
            }
        }

        if (SampleBrands.length === 0) {
            BrandListBox.classList.add("empty");
        } else {
            BrandListBox.classList.remove("empty");
        }

    }, [SelectedBrandsList, SampleBrands])

    return (
        <>
            <div className="Filter-Brand-Box filter-box filter-custom-box">
                <div className="Title">
                    <p>
                        Brand
                    </p>
                </div>
                <div className="Clear-All-Selected-Options-Box ">
                    <div className="Clear-All-Selected-Box">
                        <div className="Clear-All-Selected-Options-Text">Clear All</div>
                        <div className="Clear-All-Selected-Options-icon" onClick={() =>{RemoveAllSelectedBrands()}}>
                            <FontAwesomeIcon icon={faSquareXmark} />
                        </div>
                    </div>
                    <div className="Selected-Brand-Options">
                        {
                            SelectedBrandsList.map((brandname) => (
                                <div key={brandname} className="Selected-OptionBox" onClick={() =>{RemoveTheSelectedBrand(brandname)}}>
                                    <div className="Options-Text">{brandname}

                                    </div>
                                    <div className="Options-Remove-Button">
                                        <FontAwesomeIcon icon={faSquareXmark} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Filter-Options-Box">
                    {
                        SampleBrands.map((brandname) => (
                            <div key={brandname} className="OptionBox" onClick={() =>{AddTheSelectedBrand(brandname)}} >
                                <div className="Options-Text">{brandname}</div>
                                <div className="Options-Select-Button">
                                    <FontAwesomeIcon icon={faSquarePlus} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BrandFilterBox
