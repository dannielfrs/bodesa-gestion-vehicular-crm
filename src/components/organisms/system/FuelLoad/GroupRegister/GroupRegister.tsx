import { useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import IconX from '@/../public/images/icons/IconX.svg'
import EditBlue from '@/../public/images/icons/EditBlue.svg'
import ExcelBlue from '@/../public/images/icons/ExcelBlue.svg'
import { Checkbox } from '@/components/molecules/CheckboxAltern/Checkbox'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Galleria } from 'primereact/galleria'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import IconInfo from '@/../public/images/icons/IconInfo.svg'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import defaultPicture from "@/../public/images/default_picture.svg"
import { ModalShowRequest } from '@/components/organisms/system/FuelLoad/ModalShowRequest/ModalShowRequest'
import { downloadExcelService } from '@/services/axios/general/general'
import { FuelLoadRegisterContext } from "@/context/authenticated/fuelLoadRegister/FuelLoadRegisterContext"

interface ComponentProps {
  onHide?: () => void
}

export const GroupRegister: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, itemData, getItemService, groupData, finishGroupService, deleteGroupService } = useContext(FuelLoadRegisterContext)
  const methods = useForm()
  const galleria: any = useRef(null)
  const [showRequest, setShowRequest] = useState(false)
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [imageFile, setImageFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    if (Object.keys(groupData).length > 0) {
      methods.setValue('equal_amount', groupData.amountEqual)
    }
  }, [groupData])

  useEffect(() => {
    if (imageFile) setGalleryImages([{ imageUrl: URL.createObjectURL(imageFile) }])
    else setGalleryImages([{ imageUrl: '' }])
  }, [imageFile])

  useEffect(() => {
    setShowRequest(false)
  }, [groupData])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    finishGroupService(data, imageFile, groupData.uuid)
  }

  const itemTemplate = (item: any) => {
    return (
      <Image
        src={item.imageUrl}
        alt='image'
        width={10}
        height={10}
        style={{ width: '100%', height: '50%' }}
      />
    )
  }

  const handlePhotoClick = () => {
    galleria.current?.show()
  }

  const handleShowRequest = (id: string) => {
    getItemService(id)
    setShowRequest(true)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.CreateGroup}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Button
              type='button'
              onClick={onHide}
              variant='square'
            >
              <Image src={IconX} alt='icon' />
            </Button>
            <p className={styles.status}>Estatus de recarga: <label>En espera...</label></p>
          </div>
          <div className={styles.right}>
            <div style={{ width: '130px' }}>
              <Button
                height='35px'
                variant='success'
              >
                Finalizar
              </Button>
            </div>
            <div style={{ width: '130px' }}>
              <Button
                type='button'
                onClick={() => deleteGroupService(groupData.uuid)}
                height='35px'
                variant='cancel'
              >
                Disolver grupo
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.containerData}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.titles}>
                <p className={styles.title1}>Registro de recarga en grupo</p>
                <p className={styles.title2}>{groupData.name}</p>
              </div>
              <div className={styles.buttons}>
                <Button
                  type='button'
                  onClick={() => { }}
                  tooltip='Editar'
                  tooltipOptions={{ position: 'bottom' }}
                  variant='square'
                >
                  <Image src={EditBlue} alt='icon' />
                </Button>
                <Button
                  type='button'
                  onClick={() => downloadExcelService(`/crm/fuel-load/generate-excel/${groupData.uuid}`, 'datos')}
                  tooltip='Descargar layout'
                  tooltipOptions={{ position: 'bottom' }}
                  variant='square'
                >
                  <Image src={ExcelBlue} alt='icon' />
                </Button>
              </div>
            </div>
            <div className={styles.text}>
              <p className={styles.gray}>ID Cliente: <label className={styles.blue}>{groupData.clientId}</label></p>
              <p className={styles.gray}>Producto: <label className={styles.blue}>{groupData.product}</label></p>
            </div>
            <Checkbox
              inputId='equal_amount'
              name='equal_amount'
              variant='secondary'
              required={false}
              label='Aplicar Monto deseado igualitario'
              disabled
            />
            <div className={styles.containerRequest}>
              <p className={styles.title}>Solicitudes</p>
              <div className={styles.container}>
                {groupData.fuelLoads?.map((item: any, index: number) => {
                  return (
                    <div className={styles.card} key={item.uuid}>
                      <div className={styles.card_content}>
                        <div className={styles.card_image}>
                          <Image
                            src={item.image?.url || defaultPicture}
                            alt="picture_profile"
                            loader={({ src }) => src}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className={styles.text}>
                          <p className={styles.gray}>{item.name}</p>
                          <p className={styles.gray}>Nomina: <label>{item.payroll}</label></p>
                          <p className={styles.gray}>Monto deseado: <label>{item.desiredAmount}</label></p>
                        </div>
                      </div>
                      <div className={styles.card_button}>
                        <Button
                          type='button'
                          onClick={() => handleShowRequest(item.uuid)}
                          variant='secondary'
                          height='25px'
                        >
                          Ver solicitud
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={styles.rightcont}>
            <div className={styles.inputs}>
              <div className={styles.input1}>
                <InputText2
                  name='unique_number'
                  type='number'
                  label='Numero único'
                  placeholder='Ingrese número'
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.info}>
                  <Image src={IconInfo} alt='' />
                  <p>Numero creado para la recarga múltiple</p>
                </div>
              </div>
              <div className={styles.input1}>
                <InputText2
                  name='total_recharge'
                  type='number'
                  label='Total de recarga'
                  placeholder='$0.00'
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
                <div className={styles.info}>
                  <Image src={IconInfo} alt='' />
                  <p>La cantidad no tiene que sobre pasar el saldo inicial</p>
                </div>
              </div>
              <div style={{ width: '280px' }}>
                <InputTextArea
                  name='comments'
                  label='Observaciones'
                  placeholder=''
                  rows={5}
                  variant='secondary'
                  optional={true}
                  height='150px'
                  width='100%'
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.chargeImg}>
              <ImageUpload
                name='fileupload_passport'
                label='Recibo de la recarga'
                title='Subir foto'
                accept='image/png, image/jpg, image/jpeg'
                defaultImage={imageUrl}
                setImageFile={setImageFile}
                onHandlePhoto={() => handlePhotoClick()}
                width='250px'
                height='259px'
                rules={{ required: true }}
              />
              <Galleria
                ref={galleria}
                value={galleryImages}
                numVisible={1}
                item={itemTemplate}
                fullScreen
                style={{ maxWidth: '50%' }}
              />
            </div>
          </div>
        </div>
        {showRequest && <ModalShowRequest data={itemData} onHide={() => setShowRequest(false)} />}
      </div>
    </FormHookProvider>
  )
}
