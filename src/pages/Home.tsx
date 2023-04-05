import Chat from "../components/custom/Chat/Chat"
import ServerBar from "../components/custom/ServerBar/ServerBar"
import Sidebar from "../components/custom/Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="home">
      <ServerBar />
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home