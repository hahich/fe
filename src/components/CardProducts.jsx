import { Link } from "react-router-dom"
import { displayPriceInVND } from "../utils/DisplayPriceInVNd"
import { validURLConvert } from "../utils/validURL.Convert"
import propTypes from "prop-types"

const CardProducts = ({ data }) => {
    const url = `/products/${validURLConvert(data._id)}`
    return (
        <Link to={url} className="border lg:p-2 grid gap-2 lg:gap-3 min-w-60 rounded bg-white">
            <div className="max-h-24 m-2 lg:w-full flex justify-center items-center">
                <img src={data.image[0]} alt="" className="w-full h-full object-scale-down" />
            </div>

            <div className="mx-2 p-[0.5px] rounded text-xs w-fit px-2 text-blue-500 bg-blue-50">
                10min
            </div>

            <div className="mx-2 px-1 font-medium text-ellipsis lg:text-base text-sm line-clamp-2">
                {data.name}
            </div>

            <div className="mx-2 px-2 text-sm lg:text-base rounded">
                {data.unit}
            </div>


            <div className="mx-2 px-1 pb-2 rounded text-sm lg:text-base">
                {displayPriceInVND(data.price)}
            </div>


            <div className="bg-blue-500 hover:bg-blue-600 text-center lg:m-0 mx-2 mb-2 py-1 text-white rounded cursor-pointer">
                Add
            </div>
        </Link>
    )
}

CardProducts.propTypes = {
    data: propTypes.object.isRequired
}

export default CardProducts