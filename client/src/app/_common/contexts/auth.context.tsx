"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { setCookie, parseCookies, destroyCookie } from "nookies"
import { useRouter } from "next/navigation" // Importe useRouter do 'next/router'.
import {
  recoverUserInformation,
  signInRequest,
} from "../services/auth/auth.service"
import { auth_token_name } from "../configs/constants"
import { _routes as _routesAdmin } from "@/app/(admin)/_configs/_routes"
import { Role } from "../models"

type User = {
  name: string
  email: string
  avatar_url: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | any>(null)
  const router = useRouter() // Inicialize o useRouter

  const isAuthenticated = !!user

  useEffect(() => {
    const { [auth_token_name]: token } = parseCookies()

    if (token) {
      recoverUserInformation().then((user) => {
        if (user.email) {
          setUser(user)
        }
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    }).catch((res: Error | any) => {
      throw `${res.message || res}`
    })

    setCookie(undefined, auth_token_name, token, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
    })
    setUser({ ...user })

    if (router) {
      const path = _routesAdmin.dashboard
      router.push(path)
    }
  }

  async function signOut() {
    const role = user?.role
    destroyCookie(undefined, auth_token_name)
    setUser(null)

    if (router) {
      const path = _routesAdmin.signin
      router.push(path)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      "useAuthContext must be used within a HeaderContextProvider"
    )
  }
  return context
}
