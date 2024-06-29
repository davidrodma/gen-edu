"use client"
import {
  DataTableCustom,
  useDataTableCustomContext,
} from "@/app/_common/components/datatable"
import { Columns } from "./topic-datatable-columns.component"
import { Modal } from "@/app/_common/components/modal/modal.component"
import { useEffect, useRef, useState } from "react"
import { Topic } from "@/app/_common/models/topic/topic.model"
import { FiltersForm } from "./topic-filters-form.component"
import { useHeaderContext } from "@/app/_common/contexts/header.context"
import { Toast } from "primereact/toast"
import { topicStatusArray } from "@/app/_common/models"
import { useRouter } from "next/navigation"
import { _routes } from "@/app/(admin)/_configs/_routes"
import { DataTableRowClickEvent } from "primereact/datatable"
import { ID } from "@/app/_common/types/ID.type"
import { TopicService } from "../../_services/topic.service"
import { TopicForm } from "../form/topic-form.component"

type Model = Topic

export const TopicDatatable = () => {
  const { setHeaderInfo } = useHeaderContext()
  const toast = useRef<Toast>(null)
  const router = useRouter()

  useEffect(() => {
    setHeaderInfo("Topics", "Topics of instructional materials")
  }, [setHeaderInfo])

  const [formDialog, setFormDialog] = useState<boolean>(false)
  const { row, setRow } = useDataTableCustomContext<Model>()

  const openNew = () => {
    setRow(undefined)
    setFormDialog(true)
  }

  const redirectTopicLinks = (id: ID) => {
    router.push(`${_routes.contexts}/${id}`)
  }

  return (
    <>
      <Toast ref={toast} />
      <DataTableCustom<Model>
        columns={Columns()}
        paginateRequest={TopicService.paginate}
        statusRequest={TopicService.status}
        deleteRequest={TopicService.delete}
        eventNew={openNew}
        FiltersFormTemplate={<FiltersForm />}
        showStatusSwitch={false}
        statusArray={topicStatusArray}
        onRowDoubleClick={(event: DataTableRowClickEvent) =>
          redirectTopicLinks(event.data.id)
        }
        addMenusRow={[
          {
            label: "Contexts",
            icon: "pi pi-link",
            command: () => {
              if (row?.id) {
                redirectTopicLinks(row.id)
              }
            },
          },
        ]}
      />
      <Modal
        visible={formDialog}
        header="Topic Details"
        onHide={() => setFormDialog(false)}
      >
        <TopicForm setFormDialog={setFormDialog} model={row} toast={toast} />
      </Modal>
    </>
  )
}
