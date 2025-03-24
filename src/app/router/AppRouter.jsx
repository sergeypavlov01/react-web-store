import { Routes, Route } from "react-router"
import { router } from "./router"
import { Layout } from "../../components/Layout/Layout"
import { HomePage } from "../../pages/HomePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        {router.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element}/>
        ))}
      </Route>
    </Routes> 
  )
}