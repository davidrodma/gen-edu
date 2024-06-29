import {
  PaginateType,
  PaginateResponse,
} from "@/app/_common/components/datatable/types/paginate.type"
import { Topic } from "@/app/_common/models/topic/topic.model"
import { api } from "@/app/_common/services/api/api.service"
import { ID } from "@/app/_common/types/ID.type"
import { StatusDefault } from "@/app/_common/enums/status.default.enum"
import { CountResponse } from "@/app/_common/types/count-response.type"

const path = "/topic"

type Model = Topic

export const TopicService = {
  paginate(query?: PaginateType): Promise<PaginateResponse<Model>> {
    let params: any = { ...query }
    params.page = params?.page || 1
    params?.filters
      ? (params.filters = JSON.stringify(params.filters))
      : delete params.filters
    params?.order
      ? (params.order = JSON.stringify(params.order))
      : delete params.order
    !params?.search ? delete params.search : null
    return api.get(path, params)
  },
  save: async (params: Partial<Model>) => {
    const isUpdate = params?.id || false
    return isUpdate
      ? api.put<Model>(`${path}/${params.id}`, { ...params, id: undefined })
      : api.post<Model>(path, params)
  },
  delete: async (ids: ID[]): Promise<CountResponse> => {
    return api.delete(path, { ids })
  },
  status: async (ids: ID[], status: StatusDefault): Promise<CountResponse> => {
    const url = `${path}/status`
    return api.patch(url, { ids, status })
  },
}
