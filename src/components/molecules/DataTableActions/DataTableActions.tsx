import React, { useState } from 'react'
import styles from './styles.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch'

interface DataTableActionsProps {
  recordButton?: boolean
  photoButton?: boolean
  activateButton?: boolean
  excelButton?: boolean
  ticketButton?: boolean
  showButton?: boolean
  switchButton?: boolean
  deleteButton?: boolean
  onClickDelete?: () => void
  onClickRecord?: () => void
  onClickPhoto?: () => void
  onClickActivate?: (e: any) => void
  onClickTicket?: () => void
  onClickExcel?: () => void
  onClickShow?: () => void
  status?: boolean
  className?: string
  switchChecked?: boolean
}

const DataTableActions: React.FC<DataTableActionsProps> = ({
  recordButton,
  photoButton,
  activateButton,
  excelButton,
  ticketButton,
  showButton,
  switchButton,
  deleteButton,
  onClickDelete = () => { },
  onClickRecord = () => { },
  onClickPhoto = () => { },
  onClickShow = () => { },
  onClickActivate = () => { },
  onClickTicket = () => { },
  onClickExcel = () => { },
  status,
  className = '',
}) => {

  const [checked, setChecked] = useState<boolean>(true)
  const [switchChecked, setSwitchChecked] = useState<boolean>(true)

  return (
    <div className={`${styles.datatable_actions} ${className}`}>
      {photoButton && (
        <div>
          <Button
            type='button'
            icon='i-photo'
            onClick={onClickPhoto}
            tooltip='Fotos'
            tooltipOptions={{ position: 'top' }}
            variant='button_action'
            height='30px'
          />
        </div>
      )}
      {activateButton && (
        <div>
          {/* <ToggleButton
            onIcon='i-activate'
            offIcon='i-activate'
            checked={status}
            onChange={onClickActivate}
            tooltip={status ? 'Inactivar' : 'Activar'}
            tooltipOptions={{ position: 'top' }}
            variant='primary'
            height='30px'
          /> */}
        </div>
      )}
      {ticketButton && (
        <div>
          <Button
            type='button'
            icon='i-ticket'
            onClick={onClickTicket}
            tooltip='Ticket recarga'
            tooltipOptions={{ position: 'top' }}
            variant='button_action'
            height='30px'
          />
        </div>
      )}
      {excelButton && (
        <div>
          <Button
            type='button'
            icon='i-excel'
            onClick={onClickExcel}
            tooltip='Expediente'
            tooltipOptions={{ position: 'top' }}
            variant='button_action'
            height='30px'
          />
        </div>
      )}
      {recordButton && (
        <div>
          <Button
            type='button'
            icon='i-record'
            onClick={onClickRecord}
            tooltip='Historial'
            tooltipOptions={{ position: 'top' }}
            variant='button_action'
            width='30px'
            height='30px'
          />
        </div>
      )}
      {switchButton && (
        <div>
          <Button
            variant='button_action'
            tooltip={checked ? 'Inactivar' : 'Activar'}
            tooltipOptions={{ position: 'top' }}
          >
            <div className={styles.inputswitch}>
              <InputSwitch
                checked={switchChecked}
                onChange={(e: InputSwitchChangeEvent) => setSwitchChecked(e.value)}
              />
            </div>
          </Button>
        </div>
      )}
      {showButton && (
        <div>
          <Button
            type='button'
            icon='show-more'
            onClick={onClickShow}
            tooltip='Ver más'
            tooltipOptions={{ position: 'top' }}
            variant='button_action'
            height='30px'
          />
        </div>
      )}
      {deleteButton && (
        <div>
          <Button
            type='button'
            icon='delete'
            onClick={onClickDelete}
            tooltip='Eliminar'
            tooltipOptions={{ position: 'top' }}
            variant='red'
            height='30px'
          />
        </div>
      )}
    </div>
  )
}

export default DataTableActions
