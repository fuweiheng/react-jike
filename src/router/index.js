import Login from '@/pages/Login'
import GeekLayout from '@/pages/Layout'
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import { lazy, Suspense } from "react";

const Home = lazy(()=>import('@/pages/Home'))
const Article = lazy(()=>import('@/pages/Article'))
const Publish = lazy(()=>import('@/pages/Publish'))


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><GeekLayout/></AuthRoute>,
        children: [
            {
              path: '/',
              element: <Suspense fallback={'加载中'}><Home></Home></Suspense> 
            },
            {
                path: '/article',
                element: <Suspense fallback={'加载中'}><Article></Article> </Suspense> 
            },
            {
                path: '/publish',
                element: <Suspense fallback={'加载中'}><Publish></Publish> </Suspense> 
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router