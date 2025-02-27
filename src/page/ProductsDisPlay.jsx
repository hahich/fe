import { useParams } from "react-router-dom"
import SummarryApi from "../common/SummaryApi"
import Axios from "../utils/Axios"
import AxiosToastError from "../utils/AxiosToastError"
import { useEffect, useRef, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ProductsDisPlay = () => {
  const params = useParams()
  let productsId = params?.products.split("-").slice(-1)
  const [data, setData] = useState({
    name: "",
    image: [],
  })
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState([0])
  const imageContainer = useRef()


  const fetchProductsDetails = async () => {
    try {
      const res = await Axios({
        ...SummarryApi.getProductsDetails,
        data: {
          productsId: productsId,
        }
      })

      const { data: responseData } = res

      if (responseData.success) {
        setData(responseData.data)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductsDetails()
  }, [params])

  const handleScrollRight = () => {
    imageContainer.current.scrollRight += 100
  }

  const handleScrollLeft = () => {
    imageContainer.current.scrollLeft -= 150
  }
  
  return (
    <section className="container mx-auto p-4 grid lg:grid-cols-3">
      <div className="cols-pan-2">
        <div className="min-h-56 max-h-56 rounded h-full w-full">
          <img src={data.image[image]} className="w-full h-full object-scale-down" />
        </div>

        <div className="flex items-center justify-center gap-3">
          {
            data.image.map((img, index) => {
              return (
                <div key={img + index + "point"} className={`bg-slate-200 w-3 h-3 rounded-full my-2 ${index === image && "bg-slate-300"} `}></div>
              )
            })
          }
        </div>

        <div className="grid relative">
          <div ref={imageContainer} className="flex relative z-10 gap-3 w-full overflow-x-auto scrollbar-none">
            {
              data.image.map((img, index) => {
                return (
                  <div className="p-2 w-14 h-14 min-w-14 min-h-14 shadow-md cursou-pointer bg-white" key={img + index}>
                    <img src={img}
                      className="w-full h-full object-scale-down"
                      alt="min-products"
                      onClick={() => setImage(index)}
                    />
                  </div>
                )
              })
            }
          </div>

          <div className="absolute h-full w-full flex justify-between -mr-2 items-center">
            <button onClick={handleScrollLeft} className="z-10 bg-white p-1 rounded-full shadow-md">
              <FaAngleLeft />
            </button>

            <button onClick={handleScrollRight} className="z-50 bg-white p-1 rounded-full shadow-md">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsDisPlay