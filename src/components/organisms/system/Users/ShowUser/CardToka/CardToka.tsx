import React from 'react'
import styles from './CardToka.module.scss'
import Image from 'next/image'
import card from '@/../public/images/card.png'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export default function CardToka ({ isEditing }: { isEditing: boolean }) {
  const methods = useForm()
  const onSubmit = () => { }
  const centerOptions = [
    { name: 'Centro de costos 1', value: 'Centro de costos 1' },
    { name: 'Centro de costos 2', value: 'Centro de costos 2' },
    { name: 'Centro de costos 3', value: 'Centro de costos 3' }
  ]
  const dropdownCenter = {
    name: 'center',
    label: 'Centro de costos',
    placeholder: 'Seleccione centro de costos',
    options: centerOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const addressOptions = [
    { name: 'Dirección 1', value: 'Dirección 1' },
    { name: 'Dirección 2', value: 'Dirección 2' },
    { name: 'Dirección 3', value: 'Dirección 3' }
  ]
  const dropdownAddress = {
    name: 'address',
    label: 'Dirección',
    placeholder: 'Seleccione dirección',
    options: addressOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }

  const payrollOptions = [
    { name: '312589768459', value: '312589768459' },
    { name: '789456123', value: '789456123' },
    { name: '852369741', value: '852369741' }
  ]
  const dropdownPayroll = {
    name: 'payroll',
    label: 'Nómina',
    placeholder: 'Seleccione nómina',
    options: payrollOptions,
    disabled: !isEditing,
    readOnly: !isEditing,
    optionLabel: 'name',
    required: false,
    variant: 'secondary',
    filter: false,
    height: '35px',
    panelClassName: styles.primary
  }
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.CardToka}>
          <div className={styles.right}>
            <Image src={card} alt='' />
            <div className={styles.infoCard}>
              <p className={styles.balance}>Saldo inicial: $3,000.00</p>
              <div className={styles.number}>
                <p className={styles.text1}>No. Tarjeta</p>
                <p className={styles.text2}>4152 3137 7984 7522</p>
              </div>
              <div className={styles.validity}>
                <div className={styles.date}>
                  <p>Fecha de</p>
                  <p>01/26</p>
                </div>
                <div className={styles.status}>
                  <p className={styles.white}>Estatus</p>
                  <p className={styles.blue}>Vigente</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <p className={styles.title}>Tarjeta toka</p>
            <div className={styles.inputs}>
              <div style={{ width: '330px' }}>
                <InputText2
                  name='number'
                  type='text'
                  label='Número de tarjeta'
                  placeholder='Ingrese número de tarjeta'
                  variant='primary'
                  value='1245 78945 4444'
                  readOnly={!isEditing}
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <div style={{ width: '126px' }}>
                <InputText2
                  name='balance'
                  type='text'
                  label='Saldo'
                  placeholder='Ingrese saldo'
                  variant='primary'
                  value='$3,000'
                  readOnly={!isEditing}
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <div style={{ width: '170px' }}>
                <InputText2
                  name='date'
                  type='date'
                  label='Fecha de vencimiento'
                  placeholder=''
                  variant='primary'
                  value=''
                  readOnly={!isEditing}
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.inputs2}>
              <div style={{ width: '297px' }}>
                <InputText2
                  name='numberN'
                  type='text'
                  label='Número de nómina'
                  placeholder='Ingrese número de nómina'
                  variant='primary'
                  value='1245789454444'
                  readOnly={!isEditing}
                  height='35px'
                  rules={{ required: false }}
                />
              </div>
              <div style={{ width: '357px' }}>
                <Dropdown {...dropdownCenter} />
              </div>
            </div>
            <div className={styles.inputs3}>
              <div style={{ width: '352px' }}>
                <Dropdown {...dropdownAddress} />
              </div>
              <div style={{ width: '352px' }}>
                <Dropdown {...dropdownPayroll} />
              </div>
            </div>
            <div style={{ width: '150px' }}>
              <InputText2
                name='nip'
                type='text'
                label='NIP'
                placeholder='Ingrese NIP'
                variant='primary'
                value='5241'
                readOnly={!isEditing}
                height='35px'
                rules={{ required: false }}
              />
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
