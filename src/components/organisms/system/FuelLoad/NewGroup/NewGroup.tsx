import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import Image from 'next/image'
import IconInfo from '@/../public/images/icons/IconInfo.svg'
import { Checkbox } from '@/components/molecules/CheckboxAltern/Checkbox'
import { FuelLoadRegisterContext } from "@/context/authenticated/fuelLoadRegister/FuelLoadRegisterContext"

export default function NewGroup() {

  const { selectedOptions, createGroupService } = useContext(FuelLoadRegisterContext)
  const methods = useForm()
  const [groupData, setGroupData] = useState<any[]>([])
  const [equalAmount, setEqualAmount] = useState<boolean>(true)

  useEffect(() => {
    const result = selectedOptions.map((item: any, index: number) => (
      {
        id: item,
        payroll: '',
        desiredAmount: '',
      }
    ))
    setGroupData(result)
  }, [selectedOptions])

  useEffect(() => {
    methods.setValue('equal_amount', true)
  }, [])

  useEffect(() => {
    if (!equalAmount) {
      methods.setValue('desiredAmount', '')
    }
    if (groupData.length > 0) {
      const result = groupData.map((item: any, index: number) => (
        { ...item, desiredAmount: '' }
      ))
      setGroupData(result)
    }
  }, [equalAmount])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (groupData.length >= 2) createGroupService(data, groupData)
  }

  const handleEqualAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (equalAmount) {
      const result = groupData.map((item: any, index: number) => (
        { ...item, desiredAmount: e.target.value }
      ))
      setGroupData(result)
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const array = [...groupData]
    array[index].desiredAmount = e.target.value
    setGroupData(array)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.GroupRechargeRecord}>
        <div className={styles.top}>
          <p className={styles.title}>Registro de recarga en grupo</p>
          <div style={{ width: '145px' }}>
            <Button
              height='35px'
              variant='primary'
            >
              Crear grupo
            </Button>
          </div>
        </div>
        <p className={styles.yellow}>LAYOUT DE DISPERSIONES 10/08/2023</p>
        <div className={styles.inputs}>
          <div style={{ width: '170px' }} className={styles.inputId}>
            <InputText2
              name='clientId'
              label='ID Cliente'
              placeholder='Ingrese ID'
              variant='primary'
              height='35px'
              rules={{ required: true }}
            />
            <div className={styles.important}>
              <Image src={IconInfo} alt='icon' />
              <p>ID de la empresa de 4 dígitos</p>
            </div>
          </div>
          <div style={{ width: '250px' }}>
            <InputText2
              name='product'
              label='Producto'
              placeholder='Ingrese el producto'
              variant='primary'
              height='35px'
              rules={{ required: true }}
            />
          </div>
          <div style={{ width: '180px' }}>
            <InputText2
              name='desiredAmount'
              label='Monto deseado'
              type='number'
              onChange={handleEqualAmountChange}
              placeholder='$0.00'
              variant='primary'
              height='35px'
              disabled={!equalAmount}
              rules={{ required: equalAmount }}
            />
          </div>
          <Checkbox
            inputId='equal_amount'
            name='equal_amount'
            label='Aplicar Monto deseado igualitario'
            onChange={(e) => setEqualAmount(e.checked)}
            variant='secondary'
          />
        </div>
        <div className={styles.titles}>
          <p style={{ width: '68px' }}>ID Cliente</p>
          <p style={{ width: '68px' }}>Nomina</p>
          <p style={{ width: '106px' }}>Monto deseado</p>
          <p style={{ width: '126px' }}>Producto</p>
        </div>
        <div className={styles.textBottom}>Seleccione las solicitudes pendientes para construir el grupo de registro</div>
        <div className={styles.space}>
          {groupData.map((item: any, index: number) => (
            <div className={styles.inputs2} key={index}>
              <div style={{ width: '90px' }}>
                <InputText2
                  name={`clientId_${item.id}`}
                  label=''
                  value={methods.watch('clientId')}
                  placeholder='-'
                  variant='primary'
                  disabled
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <div style={{ width: '90px' }}>
                <InputText2
                  name={`payroll_${item.id}`}
                  label=''
                  value={item.payroll}
                  placeholder='Nómina'
                  variant='primary'
                  height='35px'
                  disabled
                  rules={{ required: false }}
                />
              </div>
              <div style={{ width: '145px' }}>
                <InputText2
                  name={`desiredAmount_${item.id}`}
                  label=''
                  type='number'
                  value={item.desiredAmount}
                  onChange={(e) => handleAmountChange(e, index)}
                  placeholder='$0.00'
                  variant='primary'
                  height='35px'
                  disabled={equalAmount}
                  rules={{ required: !equalAmount }}
                />
              </div>
              <div style={{ width: '250px' }}>
                <InputText2
                  name={`product_${item.id}`}
                  label=''
                  value={methods.watch('product')}
                  disabled
                  placeholder=''
                  variant='primary'
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FormHookProvider>
  )
}
