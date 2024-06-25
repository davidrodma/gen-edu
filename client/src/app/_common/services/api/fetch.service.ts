import { parseCookies } from "nookies"
import { auth_token_name } from "@/app/_common/configs/constants"
import { _routes as _routesUser } from "@/app/(admin)/_configs/_routes"

export function getAPIClient(ctx?: any) {
  const { [auth_token_name]: token } = parseCookies(ctx)

  const baseURL = process.env.NEXT_PUBLIC_API_URL

  const api = {
    defaults: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    } as RequestInit,
    request: async function <Return = any>(
      path: string,
      params?: any,
      options?: {
        method?: string
        base_url?: string
      }
    ): Promise<Return> {
      let { method = "GET", base_url = baseURL } = options || {}
      let [body, queryParams] = [undefined as undefined | string, ""]
      if (method == "GET" && params) {
        queryParams = params
          ? Object.keys(params)
              .map(
                (k) =>
                  encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
              )
              .join("&")
          : ""
        queryParams = queryParams ? `?${queryParams}` : ""
      } else if (params) {
        body = JSON.stringify(params)
      }
      if (token) {
        api.defaults.headers = {
          ...api.defaults.headers,
          Authorization: `Bearer ${token}`,
        }
      }
      return fetch(`${base_url}${path}${queryParams}`, {
        headers: api.defaults.headers,
        method: method,
        body: body,
      }).then((resp) => {
        if (
          resp?.status === 403 &&
          ![`${_routesUser.signin}`].includes(resp.url)
        ) {
          window.location.href = _routesUser.signin
        }
        return resp.json()
      })
    },
    get: function <Return = any>(path: string, params?: any): Promise<Return> {
      return api.request(path, params, { method: "GET" })
    },
    post: function <Return = any>(path: string, params?: any): Promise<Return> {
      return api.request(path, params, { method: "POST" })
    },
    patch: function <Return = any>(
      path: string,
      params?: any
    ): Promise<Return> {
      return api.request(path, params, { method: "PATCH" })
    },
    put: function <Return = any>(path: string, params?: any): Promise<Return> {
      return api.request(path, params, { method: "PUT" })
    },
    delete: function <Return = any>(
      path: string,
      params?: any
    ): Promise<Return> {
      return api.request(path, params, { method: "DELETE" })
    },
  }

  return api
}
