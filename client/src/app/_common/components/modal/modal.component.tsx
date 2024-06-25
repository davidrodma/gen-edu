import { Dialog, DialogProps } from 'primereact/dialog'

export const Modal = ({ visible, onHide, header, ...props }: DialogProps) => {
  return (
    <Dialog
      visible={visible}
      style={{ width: '40vw' }}
      breakpoints={{ '1280px': '75vw', '780px': '100vw' }}
      header={header}
      modal
      maximizable
      className="p-fluid"
      onHide={onHide}
      {...props}
    >
      {props.children}
    </Dialog>
  )
}
