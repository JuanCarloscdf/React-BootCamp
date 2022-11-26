import Mensaje from "./Mensaje"

const Description = ({des})=>{
  return <p>{des}</p>
}

const App = () => {
  /* ffffffffffffffffffffff */
  const msg = 'test of param'
  const msg1 = 'test of param 1'
  const msg2 = 'test of param 2'
  return (
    <div>
      <h1>hola  mundo</h1>
      <Mensaje color="red" text={msg}/>
      <Mensaje color="green" text={msg1}/>
      <Mensaje color="yellow" text={msg2}/>
      <Description des="this is a description of the page"/>
    </div>
  )
}

export default App
