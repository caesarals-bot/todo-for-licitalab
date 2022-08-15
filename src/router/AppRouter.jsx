import { Route, Routes } from "react-router-dom"
import { ToDoRoutes } from "../todo/routes/ToDoRoutes"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<ToDoRoutes />}/>
    </Routes>
  )
}
