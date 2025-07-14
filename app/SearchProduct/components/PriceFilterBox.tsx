"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react'
import "../styles/PriceFilterBox.scss"


const PriceFilterBox = () => {

    const DefaultmaxPrice = 1000
    const DefaultminPrice = 10
    const [isSliderable, setIsSliderable] = useState(false)
    const activeSphere = useRef<"min" | "max" | null>(null)
    const minsphere = useRef<HTMLDivElement>(null)
    const maxsphere = useRef<HTMLDivElement>(null)
    const sliderBox = useRef<HTMLDivElement>(null)
    const [minPrice, setminPrice] = useState(DefaultminPrice)
    const [maxPrice, setmaxPrice] = useState(DefaultmaxPrice)
    const [currency, setcurrency] = useState("$")
    

    // Pointer move handler: updates position of active sphere
    const pointerMoveHandler = useCallback((e: PointerEvent) => {
        if (!isSliderable) return

        const rectBox = sliderBox.current?.getBoundingClientRect()
        const maxsphereBox = maxsphere.current?.getBoundingClientRect()
        const minsphereBox = minsphere.current?.getBoundingClientRect()
        if (!rectBox) return

        if (activeSphere.current === "min" && maxsphereBox && minsphere.current) {
            minsphere.current.classList.add("active")
            const newX = e.clientX - rectBox.left
            const maxX = maxsphereBox.left - rectBox.left - minsphere.current.offsetWidth
            const clampedX = Math.max(-minsphere.current!.offsetWidth / 2, Math.min(maxX, newX))

            // Convert to percentage relative to slider width
            const percentXMin = (Math.min(clampedX, rectBox.width) / rectBox.width) * 100
            const percentX = percentXMin
            minsphere.current.style.left = `${percentX}%`

            const newMinsphere = minsphere.current.getBoundingClientRect()
            const NewPrice = (((newMinsphere.left - rectBox.left + minsphere.current.offsetWidth / 2) / rectBox.width) * 100) * DefaultmaxPrice / 100

            setminPrice(Math.floor(NewPrice + DefaultminPrice) >= 10 ? Math.floor(NewPrice + DefaultminPrice) : DefaultminPrice)

        } else if (activeSphere.current === "max" && minsphereBox && maxsphere.current) {
            maxsphere.current.classList.add("active")
            const newX = e.clientX - rectBox.left
            const minX = minsphereBox.left - rectBox.left + minsphere.current!.offsetWidth
            const maxRight = rectBox.width - (maxsphere.current.offsetWidth / 2)

            // Clamp between minX and maxRight
            const clampedX = Math.min(maxRight, Math.max(minX, newX))

            const percentX = (clampedX / rectBox.width) * 100
            maxsphere.current.style.left = `${percentX}%`

            // for changing the upper price
            const newMaxsphere = maxsphere.current.getBoundingClientRect()
            const NewPrice = (((newMaxsphere.left - rectBox.left + maxsphere.current.offsetWidth / 2) / rectBox.width) * 100) * DefaultmaxPrice / 100
            setmaxPrice(Math.ceil(NewPrice) >= DefaultmaxPrice ? DefaultmaxPrice : Math.ceil(NewPrice))
        }

        // You can add similar logic for max sphere if needed
    }, [isSliderable])

    // Pointer up handler: cleanup on pointer release
    const pointerUpHandler = useCallback(() => {
        document.removeEventListener("pointermove", pointerMoveHandler)
        document.removeEventListener("pointerup", pointerUpHandler)
        setIsSliderable(false)

        maxsphere.current?.classList.remove("active")
        minsphere.current?.classList.remove("active")

        activeSphere.current = null
    }, [pointerMoveHandler])

    // Pointer down handler factory: sets which sphere is active
    const pointerDownHandler = useCallback((sphere: "min" | "max") => (e: PointerEvent) => {
        e.preventDefault()
        setIsSliderable(true)
        activeSphere.current = sphere

        document.addEventListener("pointermove", pointerMoveHandler)
        document.addEventListener("pointerup", pointerUpHandler)
    }, [pointerMoveHandler, pointerUpHandler])

    useEffect(() => {
        const minSphereElem = minsphere.current
        const maxSphereElem = maxsphere.current
        if (!minSphereElem) return
        if (!maxSphereElem) return

        // Attach pointerdown event to minsphere
        minSphereElem.addEventListener("pointerdown", pointerDownHandler("min"))
        maxSphereElem.addEventListener("pointerdown", pointerDownHandler("max"))

        // Cleanup on unmount
        return () => {
            minSphereElem.removeEventListener("pointerdown", pointerDownHandler("min"))
            maxSphereElem.removeEventListener("pointerdown", pointerDownHandler("max"))
            document.removeEventListener("pointermove", pointerMoveHandler)
            document.removeEventListener("pointerup", pointerUpHandler)
        }
    }, [pointerDownHandler, pointerMoveHandler, pointerUpHandler])
    return (
        <>
            <div className="Price-Filter-Bar-Box filter-box">
                <div className="Title">Price</div>
                <div className="Price-Text">
                    {currency}{minPrice} - {currency}{maxPrice}+
                </div>
                <div className="Price-SliderBar">
                    <div className="slider-bar" id="sliderbar" ref={sliderBox}>
                        <div ref={minsphere} className="min-price-sphere" id="filter-min-price-sphere"></div>
                        <div ref={maxsphere} className="max-price-sphere" id="filter-max-price-sphere"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceFilterBox