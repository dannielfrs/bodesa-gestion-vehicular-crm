import React, { CSSProperties, ReactNode } from 'react'
import { Dialog } from 'primereact/dialog'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  baseZIndex?: number
  blockScroll?: boolean
  children?: ReactNode
  className?: string
  closable?: boolean
  dismissableMask?: boolean
  draggable?: boolean
  header?: any
  showHeader?: boolean
  maximizable?: boolean
  maximized?: boolean // When enabled, the dialog is initially displayed full screen.
  resizable?: boolean // Enables resizing of the content.
  style?: CSSProperties // Enables resizing of the content.
}

export const Modal: React.FC<ComponentProps> = ({
  visible,
  onHide = () => { },
  baseZIndex,
  blockScroll,
  children,
  closable,
  dismissableMask = false,
  draggable,
  header,
  showHeader,
  maximizable,
  maximized,
  resizable = false,
  className = '',
  style
}) => {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      baseZIndex={baseZIndex}
      blockScroll={blockScroll}
      closable={closable}
      dismissableMask={dismissableMask}
      draggable={draggable}
      header={header}
      showHeader={showHeader}
      maximizable={maximizable}
      maximized={maximized}
      resizable={resizable}
      className={className}
      style={style}
    >
      {children}
    </Dialog>
  )
}
