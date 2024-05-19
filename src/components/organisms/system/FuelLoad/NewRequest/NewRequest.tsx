import { useContext, useEffect, useRef, useState } from 'react'
import styles from './NewRequest.module.scss'
import Image from 'next/image'
import FormHookProvider from '@/components/layouts/form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import IconX from '@/../public/images/icons/IconX.svg'
import IconHistorial from '@/../public/images/icons/IconHistorial.svg'
import InputText from '@/components/molecules/InputText/InputText'
import defaultPicture from '@/../public/images/default_picture.svg'
import ubication from '@/../public/images/icons/ubication.svg'
import { Galleria } from 'primereact/galleria'
import { ModalRejectRequest } from '@/components/molecules/ModalRejectRequest/ModalRejectRequest'
import Button from '@/components/molecules/Button/Button/Button'
import { ToastSuccess } from '@/components/molecules/ToastSuccess/ToastSuccess'
import { FuelLoadContext } from '@/context/authenticated/fuelLoad/FuelLoadContext'

interface ComponentProps {
  onHide?: () => void
}

export const NewRequest: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, itemData, acceptNewRequestService, declineNewRequestService, savedSuccessful } = useContext(FuelLoadContext)
  const methods = useForm()
  const galleria: any = useRef(null)
  const [galleryImages, setGalleryImages] = useState<any[]>([{}])
  const [openRejectRequest, setOpenRejectRequest] = useState(false)

  const onSubmit = (data: any) => {
    acceptNewRequestService(data, itemData.uuid)
  }

  const onSubmit2 = (data: any) => {
    declineNewRequestService(data, itemData.uuid)
  }

  useEffect(() => {
    if (Object.keys(itemData).length > 0) {
      let array = []
      if (itemData.pictureOdometer) array.push({ imageUrl: itemData.pictureOdometer?.url })
      if (itemData.pictureTicket) array.push({ imageUrl: itemData.pictureTicket?.url })
      if (itemData.pictureVoucher) array.push({ imageUrl: itemData.pictureVoucher?.url })
      setGalleryImages(array)
    }
  }, [itemData])

  const itemTemplate = (item: any) => {
    return (
      <Image
        src={item.imageUrl}
        alt='image'
        loader={({ src }) => src}
        width={10}
        height={10}
        style={{ width: '100%', height: '50%' }}
      />
    )
  }

  return (
    <div className={styles.NewRequest}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Button
              type='button'
              onClick={onHide}
              variant='square'
            >
              <Image src={IconX} alt='icon' />
            </Button>
            <p className={styles.status}>Estatus de la solicitud: <label>{itemData.status}</label></p>
          </div>
          <div className={styles.right}>
            <div style={{ width: '115px' }}>
              <Button
                height='35px'
                variant='success'
              >
                Aceptar
              </Button>
            </div>
            <div style={{ width: '115px' }}>
              <Button
                type='button'
                onClick={() => setOpenRejectRequest(true)}
                height='35px'
                variant='cancel'
              >
                Rechazar
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.showRecord}>

            </div>
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
              <div className={styles.nomina}>
                <div className={styles.no}>
                  <p className={styles.txtGray}>No. nomina</p>
                  <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.payrollNumber}</p>
                </div>
                <div className={styles.no}>
                  <p className={styles.txtGray}>Centro de costos</p>
                  <p className={styles.txtBold}>{itemData.userFuelLoadResponse?.vehicle?.costCenter}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.card2}>
              <div className={styles.left}>
                <p className={styles.bold}>Rendimiento</p>
                <p className={styles.gray}>Kilómetros por litro</p>
                <p className={styles.yellow}>{itemData?.performance?.kilometer}</p>
                <p className={styles.red}>Diferencia</p>
                <p className={styles.red2}>{itemData?.performance?.difference}</p>
              </div>
              <div className={styles.right}>
                <div className={styles.right1}>
                  <p className={styles.kml}>Kilometraje / litro</p>
                  <p className={styles.current}>Actual</p>
                  <div className={styles.kmlt}>{itemData?.performance?.actualRequest?.performance}</div>
                  <p className={styles.current}>Fecha de solicitud</p>
                  <p className={styles.date}>{itemData?.performance?.actualRequest?.requestDate}</p>
                </div>
                <div className={styles.right2}>
                  <p className={styles.gray}>Ultima recarga</p>
                  <div className={styles.blue}>{itemData?.performance?.lastRecharge?.performance}</div>
                  <p className={styles.gray}>Fecha de ultima recarga</p>
                  <p className={styles.date}>{itemData?.performance?.lastRecharge?.requestDate}</p>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.container}>
                <p className={styles.txtGray}>Indique los litros marcados en la gráfica del sensor, en caso de que el vehículo cuente con ello.</p>
                <div style={{ width: '190px' }}>
                  <InputText
                    name='sensor_liters'
                    label='Litros del sensor'
                    placeholder='0.00'
                    variant='primary'
                    height='45px'
                    rules={{ required: false }}
                  />
                </div>
              </div>
              <p className={styles.txtRequest}>Solicitud</p>
              <div className={styles.inputs}>
                <div className={styles.mileage}>
                  <p>Kilometraje</p>
                  <div className={styles.number}>
                    {itemData.initialMillage}
                  </div>
                </div>
                <div className={styles.liters}>
                  <p>Litros</p>
                  <div className={styles.number}>
                    {itemData.totalLiters}
                  </div>
                </div>
                <div className={styles.amount}>
                  <p>Monto total de la recarga</p>
                  <div className={styles.number}>
                    {itemData.totalAccount}
                  </div>
                </div>
              </div>
              <Galleria
                ref={galleria}
                value={galleryImages}
                numVisible={3}
                item={itemTemplate}
                circular
                fullScreen
                showItemNavigators
                style={{ maxWidth: '50%' }}
              />
              <div className={styles.photos}>
                <div className={styles.contPhoto}>
                  <p className={styles.title}>Fotografía del odómetro</p>
                  <div className={styles.photo} onClick={() => galleria.current?.show()}>
                    {itemData.pictureOdometer?.url &&
                      <Image
                        src={itemData.pictureOdometer?.url}
                        alt='odometer'
                        loader={({ src }) => src}
                        width={20}
                        height={20}
                      />
                    }
                  </div>
                  <div className={styles.ubication}>
                    <Image src={ubication} alt='icon' />
                    <p className={styles.text}>{itemData.userFuelLoadResponse?.vehicle?.keyGps}</p>
                  </div>
                </div>
                <div className={styles.contPhoto}>
                  <p className={styles.title}>Fotografía del ticket</p>
                  <div className={styles.photo} onClick={() => galleria.current?.show()}>
                    {itemData.pictureTicket?.url &&
                      <Image
                        src={itemData.pictureTicket?.url}
                        alt='ticket'
                        loader={({ src }) => src}
                        width={20}
                        height={20}
                      />
                    }
                  </div>
                  <div className={styles.ubication}>
                    <Image src={ubication} alt='icon' />
                    <p className={styles.text}>{itemData.userFuelLoadResponse?.vehicle?.keyGps}</p>
                  </div>
                </div>
                <div className={styles.contPhoto}>
                  <p className={styles.title}>Fotografía del voucher</p>
                  <div className={styles.photo} onClick={() => galleria.current?.show()}>
                    {itemData.pictureVoucher?.url &&
                      <Image
                        src={itemData.pictureVoucher?.url}
                        alt='voucher'
                        loader={({ src }) => src}
                        width={20}
                        height={20}
                      />
                    }
                  </div>
                  <div className={styles.ubication}>
                    <Image src={ubication} alt='icon' />
                    <p className={styles.text}>{itemData.userFuelLoadResponse?.vehicle?.keyGps}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
      <ToastSuccess
        visible={savedSuccessful}
        title='Has "aceptado" la solicitud'
        subtitle='Respuesta enviada con éxito.'
      />
      {openRejectRequest &&
        <ModalRejectRequest
          title='Rechazar solicitud'
          subtitle='Se rechazará la solicitud 001'
          onHide={() => setOpenRejectRequest(false)}
          onSubmit={onSubmit2}
        />
      }
    </div>
  )
}
