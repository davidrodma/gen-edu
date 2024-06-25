import Integration from '@/app/_common/components/integration/Integration'
import integrations from '@/app/_common/data/intigration'

function Integrations() {
  return (
    <>
      {integrations?.map(integration => (
        <Integration key={integration.id} integration={integration} />
      ))}
    </>
  )
}

export default Integrations
