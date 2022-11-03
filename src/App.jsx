import React, { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Route, Routes } from "react-router-dom"
import Loading from "./components/Loading"
import PrivateRoute from "./components/PrivateRoute"

const Login = React.lazy(() => import("./pages/Login"))
const Home = React.lazy(() => import("./pages/Home"))
const RequestService = React.lazy(() => import("./pages/RequestService"))
const HistoryService = React.lazy(() => import("./pages/HistoryService"))
const DetailService = React.lazy(() => import("./pages/DetailService"))

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    },
  })

  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/request-service"
            element={
              <PrivateRoute>
                <RequestService />
              </PrivateRoute>
            }
          />
          <Route
            path="/history-service"
            element={
              <PrivateRoute>
                <HistoryService />
              </PrivateRoute>
            }
          />
          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <DetailService />
              </PrivateRoute>
            }
          />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
