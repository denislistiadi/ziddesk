import React, { useState } from "react"
import Input from "../../components/Input"
import LoginWrapper from "../../components/Layout/LoginLayout"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { useLoginUser } from "../../modules/Auth/hooks"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const loginMutation = useLoginUser()

  // HANDLE LOGIN
  const handleLogin = () => {
    try {
      loginMutation.mutate(
        {
          username: username,
          password: password,
        },
        {
          onError: () => {
            setError(true)
          },
        },
        {
          onSuccess: (data) => {
            if (data.status == true) {
              localStorage.setItem("token", data.token)
              navigate("/")
            }
          },
        }
      )
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <LoginWrapper>
      <div className="relative">
        <h1 className="font-medium text-[50px] text-primary">ZidDesk</h1>
        <p className="text-xl font-light tracking-wide">Masuk ke ZidDesk</p>

        <div className="py-7 text-center h-24">
          {error && (
            <span className="text-sm text-error  text-center">
              Silakan masukkan Username dan Kata Sandi yang sudah terdaftar ini
              untuk masuk.
            </span>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}
          className="flex flex-col gap-3"
        >
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error}
          />
          <Input
            label="Password"
            value={password}
            type={!showPassword ? "password" : "text"}
            error={error}
            iconAppend={
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword((prevValue) => !prevValue)}
              >
                {!showPassword ? (
                  <IoEyeOffOutline className="w-full h-full text-[#9D9D9D]" />
                ) : (
                  <IoEyeOutline className="w-full h-full text-[#9D9D9D]" />
                )}
              </div>
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-xs text-primary text-end font-medium cursor-pointer">
            Lupa Kata Sandi?
          </span>
          <button
            type="submit"
            disabled={
              username.length == 0 || password.length == 0 ? true : false
            }
            className={`mt-28 rounded-md disabled:text-gray-400 disabled:bg-gray-100 hover:opacity-90 bg-primary py-4 mr-4 text-white text-sm font-semibold w-full`}
          >
            MASUK
          </button>
        </form>
      </div>
    </LoginWrapper>
  )
}

export default Login
