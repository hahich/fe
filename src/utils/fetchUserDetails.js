<<<<<<< HEAD
import Axios from './Axios'
import SummarryApi from '../common/SummaryApi'

const fetchUserDetails = async() => {
    try {
        const res = await Axios({
            ...SummarryApi.user_details

        })
        return res.data
    } catch (error) {
        return{data: null}
    }
}

export default fetchUserDetails
=======
import SummaryApi from '../common/SummaryApi'
import Axios from './Axios'

const fetchUserDetails = async () => {
    try {
        const res = await Axios({
            ...SummaryApi.getMe
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails;
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
