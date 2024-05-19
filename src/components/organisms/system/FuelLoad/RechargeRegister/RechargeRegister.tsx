import { useContext, useEffect, useRef, useState } from 'react'
import styles from './RechargeRegister.module.scss'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import IconX from '@/../public/images/icons/IconX.svg'
import IconHistorial from '@/../public/images/icons/IconHistorial.svg'
import defaultPicture from '@/../public/images/default_picture.svg'
import { ImageUpload } from '@/components/molecules/ImageUpload/ImageUpload'
import Button from '@/components/molecules/Button/Button/Button'
import IconInfo from '@/../public/images/icons/IconInfo.svg'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import InputText2 from '@/components/molecules/InputText2/InputText2'
import card from '@/../public/images/card.png'
import { ModalRejectRequest } from '@/components/molecules/ModalRejectRequest/ModalRejectRequest'
import { Galleria } from 'primereact/galleria'
import { ToastSuccess } from '@/components/molecules/ToastSuccess/ToastSuccess'
import { ModalShowRequest } from '@/components/organisms/system/FuelLoad/ModalShowRequest/ModalShowRequest'
import { FuelLoadRegisterContext } from "@/context/authenticated/fuelLoadRegister/FuelLoadRegisterContext"

interface ComponentProps {
  onHide?: () => void
}

export const RechargeRegister: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, itemData, saveDataService, cancelService, savedSuccess } = useContext(FuelLoadRegisterContext)
  const methods = useForm()
  const galleria: any = useRef(null)
  const [showRequest, setShowRequest] = useState(false)
  const [openRejectRequest, setOpenRejectRequest] = useState(false)
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [imageFile, setImageFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    if (imageFile) setGalleryImages([{ imageUrl: URL.createObjectURL(imageFile) }])
    else setGalleryImages([{ imageUrl: '' }])
  }, [imageFile])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    saveDataService(data, imageFile, itemData.uuid)
  }

  const onSubmit2: SubmitHandler<FieldValues> = (data) => {
    cancelService(data, itemData.uuid)
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

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.RechargeRegister}>
          <div className={styles.header}>
            <div className={styles.left}>
              <Button
                type='button'
                onClick={onHide}
                variant='square'
              >
                <Image src={IconX} alt='icon' />
              </Button>
              <p className={styles.status}>Estatus de recarga: <label>{itemData.status}</label></p>
            </div>
            <div className={styles.right}>
              <div style={{ width: '115px' }}>
                <Button
                  height='35px'
                  variant='success'
                >
                  Finalizar
                </Button>
              </div>
              <div style={{ width: '115px' }}>
                <Button
                  type='button'
                  onClick={() => setOpenRejectRequest(true)}
                  height='35px'
                  variant='cancel'
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <div className={styles.user}>
                <div className={styles.image}>
                  <Image
                    src={itemData.userFuelLoadResponse?.image?.url || defaultPicture}
                    alt='picture_profile'
                    loader={({ src }) => src}
                    width={55}
                    height={55}
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.name}>{itemData.userFuelLoadResponse?.fullName}</p>
                  <p className={styles.type}>{itemData.userFuelLoadResponse?.position}</p>
                </div>
                <Button
                  type='button'
                  onClick={() => { }}
                  tooltip='Ver historial'
                  tooltipOptions={{ position: 'bottom' }}
                  variant='square'
                >
                  <Image src={IconHistorial} alt='icon' />
                </Button>
              </div>
              <div className={styles.showUser}>ver usuario</div>
              <div className={styles.info}>
                <p className={styles.sheet}>Folio: <label>{itemData.invoice}</label></p>
                <p className={styles.txtRequest}>Solicitud: <label>{itemData.status}</label></p>
                <div className={styles.both}>
                  <p className={styles.date}>Fecha de envío: <label>{itemData.createFuel}</label></p>
                  <p className={styles.date}>Hora de envío: <label>{itemData.hour}</label></p>
                </div>
                <div className={styles.infoVehicle}>
                  <div className={styles.vehicle}>
                    <p className={styles.txtGray}>Vehículo</p>
                    <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.unitName}</p>
                  </div>
                  <div className={styles.vehicle}>
                    <p className={styles.txtGray}>Placas</p>
                    <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.plates}</p>
                  </div>
                </div>
                <div className={styles.ubication}>
                  <p className={styles.txtGray}>Ubicación GPS</p>
                  <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.keyGps}</p>
                </div>
                <div className={styles.km}>
                  <div className={styles.kmAccept}>
                    <p className={styles.txtGray}>Kilometraje aceptado</p>
                    <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.acceptedMileage}</p>
                  </div>
                  <div className={styles.kmAccept}>
                    <p className={styles.txtGray}>Ventana de kilómetros</p>
                    <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.mileageWindow}</p>
                  </div>
                </div>
                <div className={styles.percent}>
                  <p className={styles.txtGray}>Porcentaje de diferencias</p>
                  <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.differencePercentage}</p>
                </div>
                <div className={styles.showButton}>
                  <Button
                    type='button'
                    onClick={() => setShowRequest(true)}
                    variant='secondary'
                    height='25px'
                  >
                    Ver solicitud
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.top}>
                <Galleria
                  ref={galleria}
                  value={galleryImages}
                  numVisible={1}
                  item={itemTemplate}
                  fullScreen
                  style={{ maxWidth: '50%' }}
                />
                <div className={styles.chargeImg}>
                  <ImageUpload
                    name='fileupload_ticket'
                    label='Recibo de la recarga'
                    title='Subir foto'
                    accept='image/png, image/jpg, image/jpeg'
                    defaultImage={imageUrl}
                    setImageFile={setImageFile}
                    onHandlePhoto={() => handlePhotoClick()}
                    width='270px'
                    height='260px'
                    rules={{ required: true }}
                  />
                </div>
                <div className={styles.inputs}>
                  <div className={styles.recharge}>
                    <InputText2
                      name='recharge'
                      type='number'
                      label='Recarga'
                      placeholder='$0.00'
                      variant='primary'
                      height='45px'
                      rules={{ required: true }}
                    />
                    <div className={styles.txtBottom}>
                      <Image src={IconInfo} alt='icon' />
                      <p className={styles.txt}>La cantidad no tiene que sobre pasar el saldo inicial</p>
                    </div>
                  </div>
                  <div style={{ width: '330px', marginTop: '30px' }}>
                    <InputTextArea
                      name='comment'
                      label='Observaciones'
                      placeholder=''
                      rows={5}
                      variant='secondary'
                      optional
                      type='text'
                      height='147px'
                      width='100%'
                    />
                  </div>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.contCard}>
                  <p className={styles.title}>Tarjeta Toka</p>
                  <div className={styles.card}>
                    <Image src={card} alt='' />
                  </div>
                  <div className={styles.infoCard}>
                    <p className={styles.text1}>Saldo inicial: ${itemData.cardTokaResponse?.balance}</p>
                    <div className={styles.noCard}>
                      <p className={styles.txtNo}>No. Tarjeta:</p>
                      <p className={styles.no}>{itemData.cardTokaResponse?.number}</p>
                    </div>
                    <div className={styles.both}>
                      <div className={styles.date}>
                        <p className={styles.txtDate}>Fecha de vencimiento</p>
                        <p className={styles.txtNumber}>{new Date(itemData.cardTokaResponse?.expirationDate).getMonth() + 1} / {new Date(itemData.cardTokaResponse?.expirationDate).getFullYear() - 2000}</p>
                      </div>
                      <div className={styles.status}>
                        <p className={styles.txtStatus}>Estatus</p>
                        {new Date() < new Date(itemData.cardTokaResponse?.expirationDate) ?
                          <p className={styles.txt}>Vigente</p>
                          :
                          <p className={styles.txtRed}>No vigente</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomRight}>
                  <p className={styles.gray}>No. nómina tarjeta: <label>{itemData.cardTokaResponse?.number}</label></p>
                  <p className={styles.gray}>Centro de costos: <label>{itemData.cardTokaResponse?.costCenter?.description}</label></p>
                  <p className={styles.gray}>Dirección: <label>{itemData.cardTokaResponse?.directionId?.description}</label></p>
                  <p className={styles.gray}>No. nomina: <label>{itemData.cardTokaResponse?.numberPayroll}</label></p>
                </div>
              </div>
            </div>
          </div>
          {showRequest && <ModalShowRequest data={itemData} onHide={() => setShowRequest(false)} />}
        </div>
      </FormHookProvider>
      <ToastSuccess
        visible={savedSuccess}
        title='Has "Finalizado" la recarga'
        subtitle='Respuesta enviada con éxito.'
      />
      {openRejectRequest &&
        <ModalRejectRequest
          title='Cancelar recarga'
          subtitle='Se cancelará la recarga 001'
          onHide={() => setOpenRejectRequest(false)}
          onSubmit={onSubmit2}
        />
      }
    </>
  )
}
