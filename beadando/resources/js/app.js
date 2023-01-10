import { ReactDOM } from "react"
import Example from './components/Example'

const app = document.getElementById("example")
if(app){
    const root = ReactDOM.createRoot(app)
    root.render(<Example></Example>)
}