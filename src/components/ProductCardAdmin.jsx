import propTypes from "prop-types"

const ProductCardAdmin = ({ data }) => {
    return (
        <div className="w-full p-4 bg-white rounded text-center shadow-lg">
            <div className="">
                <img src={data.image[0]} alt={data.name}
                    className="h-36 w-36 object-scale-down"
                />
            </div>

            <p className="text-ellipsis line-clamp-2 font-medium">{data?.name}</p>
            <p className="text-slate-400">{data?.unit}</p>
        </div>
    )
}

ProductCardAdmin.propTypes = {
    data: propTypes.object.isRequired,
}

ProductCardAdmin.defaultProps = {
    data: {},
}

export default ProductCardAdmin