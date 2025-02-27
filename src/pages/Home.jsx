import useLogin from '../hooks/useLogin'

const Home = () => {
  const {isLogin} = useLogin()
  return (
    <div>
      {
        isLogin?
        <div>
        <h1>Home</h1>
        </div>
        :
        <div>
        <h1>Please Login</h1>
        </div>
      }
      
    </div>
  )
}

export default Home