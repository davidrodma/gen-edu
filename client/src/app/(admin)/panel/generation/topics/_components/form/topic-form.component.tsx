import { InputText } from "@/app/_common/components/inputs"
import { Col, Row } from "@/app/_common/components/grid-layout"
import { Topic } from "@/app/_common/models/topic/topic.model"
import { ReactNode, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { handleError } from "@/app/_common/errors/handleError"
import { Toast } from "primereact/toast"
import { FormButtonsFooter } from "@/app/_common/components/button/form-buttons-footer.component"
import { useDataTableCustomContext } from "@/app/_common/components/datatable"
import { RefObject } from "@fullcalendar/core/preact.js"
import { TopicService } from "../../_services/topic.service"
import { Select } from "@/app/_common/components/inputs/select.component.orig"
import { LanguagesArray } from "@/app/_common/models"

type Model = Partial<Topic>

const emptyModel: Partial<Model> = {
  id: "",
  subject: "",
  language: "pt",
}

export const TopicForm = ({
  setFormDialog,
  model = emptyModel,
  toast,
  ...props
}: {
  setFormDialog: (open: boolean) => void
  model?: Model
  toast?: RefObject<Toast>
}) => {
  const { rows, setRows, refresh } = useDataTableCustomContext<Model>()
  const { control, handleSubmit, reset, setValue, getValues } = useForm<Model>()
  const [error, setError] = useState<string | ReactNode>("")
  const [formData, setFormData] = useState({ ...model })
  const [loading, setLoading] = useState<boolean>(false)
  const modelInit = useRef<Model>(model)

  useEffect(() => {
    reset()
    setError("")
    if (modelInit.current?.id) {
      setFormData({
        ...modelInit.current,
      })
      setValue("id", modelInit.current.id, { shouldValidate: true })
    } else {
      setFormData({ ...emptyModel })
    }
  }, [reset, setValue])

  async function save(params: Model) {
    setError("")
    setLoading(true)
    const data = {
      id: params.id,
      subject: params.subject,
      language: params.language,
    }
    const saved = await TopicService.save(data).catch((res) => handleError(res))
    if ("error" in saved) {
      setError("error" in saved ? saved.error : "no results")
    } else {
      toast?.current?.show({
        severity: "success",
        summary: "Successful",
        detail: `Record Saved`,
        life: 3000,
      })
      if (params?.id) {
        const index = rows.findIndex((obj) => obj.id == saved.id)
        rows[index] = saved
        setRows([...rows])
      } else {
        setRows([saved, ...rows])
      }
      setFormDialog(false)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(save)} className="min-h-full flex flex-col">
      <Row>
        <Col addClassName={`sm:col-span-12`}>
          <InputText
            label={"Subject"}
            name="subject"
            value={formData.subject}
            defaultValue={formData.subject}
            control={control}
          />
        </Col>
      </Row>
      <Row>
        <Col addClassName="sm:col-span-3">
          <Select
            items={LanguagesArray}
            control={control}
            propertyKey="code"
            propertyLabel="name"
            label="Language"
            name="language"
            value={formData.language}
          />
        </Col>
      </Row>
      <FormButtonsFooter
        loading={loading}
        error={error}
        cancelEvent={() => setFormDialog(false)}
      />
    </form>
  )
}
