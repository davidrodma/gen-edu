import { DataTableCustomContextProvider } from "@/app/_common/components/datatable/contexts/datatable-custom.context"
import { TopicDatatable } from "./_components/datatable/topic-datatable.component"

function Topics() {
  return (
    <section className="mb-6 2xl:mb-0 2xl:flex-1">
      <DataTableCustomContextProvider>
        <TopicDatatable />
      </DataTableCustomContextProvider>
    </section>
  )
}

export default Topics
