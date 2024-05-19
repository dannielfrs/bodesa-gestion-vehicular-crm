import React, { useEffect, useState } from 'react'
import styles from './VehicleCategory.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import { RadioButton } from '@/components/molecules/RadioButtonAltern/RadioButton'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Button from '@/components/molecules/Button/Button/Button'

interface VehicleCategoryProps {
  onOptionSelect: (option: string) => void;
  onClose: () => void;
}

export default function VehicleCategory ({ onOptionSelect, onClose }: VehicleCategoryProps) {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => { }
  const [selectedOption, setSelectedOption] = useState<string>()
  useEffect(() => {
    methods.setValue('vehicle', '')
  }, [])

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  }

  const handleOptionSelectClick = (option: string) => {
    onOptionSelect(option)
    onClose()
  }
  
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.VehicleCategory}>
          <div className={styles.containerCategory}>
            <div className={styles.header}>
              <Image src={IconBack} alt='' />
              <div className={styles.text}>
                <p className={styles.title}>Categoría de vehículo</p>
                <p className={styles.text2}>Selecciona en qué categoría quedará guardado este vehículo.</p>
              </div>
            </div>
            <div className={styles.options}>
              <div className={styles.option1}>
                <RadioButton
                  name='vehicle'
                  inputId='assignment'
                  value='assignment'
                  defaultValue='' 
                  setValue={handleOptionChange}
                  label='Vehículo de asignación'
                  rules={{ required: true }} 
                  variant='primary'
                />
                <p>Este vehículo podrá ser asignado a un usuario.</p>
              </div>
              <div className={styles.option1}>
                <RadioButton
                  name='vehicle'
                  inputId='pool'
                  value='pool'
                  defaultValue=''
                  setValue={handleOptionChange}
                  label='Vehículo pool'
                  rules={{ required: true }}
                  variant='primary'
                />
                <p>Este vehículo estará disponible solo por solicitud.</p>
              </div>
            </div>
            <div className={styles.buttonCreate}>
              <Button disabled={!selectedOption} variant='primary' height='40px' onClick={() => handleOptionSelectClick(selectedOption || '')}>Crear</Button>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
