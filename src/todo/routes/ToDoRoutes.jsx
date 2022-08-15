import { Route, Routes, Navigate } from "react-router-dom"

import { ToDoPage } from '../page/ToDoPage'

export const ToDoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ToDoPage />}/>
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
