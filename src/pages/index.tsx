import Content from "../components/Content"


export default function Home() {
  return (
    <div className={ 
      `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white `
    }>
      <Content></Content>
      
    </div>
  )
}
