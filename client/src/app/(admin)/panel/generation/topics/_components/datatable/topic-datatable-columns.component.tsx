import { useDataTableCustomContext } from "@/app/_common/components/datatable"
import { topicStatusTemplate } from "@/app/_common/models"
import { Topic } from "@/app/_common/models/topic/topic.model"
import { DateTime } from "@/app/_common/utilities/datetime.utility"
import { ColumnProps } from "primereact/column"
import { useEffect } from "react"

type Model = Topic

export const Columns = () => {
  const { hiddenColumns, setHiddenColumns } = useDataTableCustomContext<Model>()

  useEffect(() => {
    setHiddenColumns({
      id: true,
      noteError: true,
      createdAt: true,
      updatedAt: true,
    })
  }, [setHiddenColumns])

  const columns: ColumnProps[] = [
    {
      field: "id",
      header: "ID",
      sortable: true,
      hidden: hiddenColumns?.id,
    },
    {
      field: "subject",
      header: "Subject",
      sortable: true,
      align: "center",
    },
    {
      field: "language",
      header: "Language",
      sortable: true,
      align: "center",
    },
    {
      field: "file",
      header: "File",
      sortable: true,
      align: "center",
    },
    {
      field: "sizeBytes",
      header: "Size",
      sortable: true,
      align: "center",
    },
    {
      field: "duration",
      header: "Duration",
      sortable: true,
      align: "center",
    },
    {
      field: "noteError",
      header: "Error",
      sortable: true,
      hidden: hiddenColumns?.noteError,
    },
    {
      field: "createdAt",
      sortable: true,
      header: "Created At",
      body: (rowData: Model) => DateTime.dateTemplate(rowData.createdAt),
      hidden: hiddenColumns?.createdAt,
    },
    {
      field: "updatedAt",
      sortable: true,
      header: "Updated At",
      hidden: hiddenColumns?.updatedAt,
      body: (rowData: Model) => DateTime.dateTemplate(rowData.updatedAt),
    },
    {
      field: "status",
      sortable: true,
      header: "Status",
      body: (rowData: Model) => topicStatusTemplate(rowData.status),
      align: "center",
    },
  ]
  return columns
}
