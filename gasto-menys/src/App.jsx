import './App.css'
import './auth/Login'
import { NavigationBar } from './shared/navbar/NavigationBar'
import { Button } from "@nextui-org/react";
function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <Button color="primary">
        Button
      </Button>
    </>
  )
}

export default App
