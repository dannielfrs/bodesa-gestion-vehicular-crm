import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import iconClose from '@/../public/images/icons/IconX.svg'
import location from '@/../public/images/icons/ubication.svg'

interface ComponentProps {
  data?: any
  onHide?: () => void
}

export const ModalShowRequest: React.FC<ComponentProps> = ({ data, onHide }) => {

  const dataPhotos = [
    {
      title: 'Fotografía del odómetro',
      id: data.pictureOdometer?.uuid,
      image: data.pictureOdometer?.url,
      location: data.userFuelLoadResponse?.position,
    },
    {
      title: 'Fotografía del ticket',
      id: data.pictureTicket?.uuid,
      image: data.pictureTicket?.url,
      location: data.userFuelLoadResponse?.position,
    },
    {
      title: 'Fotografía del voucher',
      id: data.pictureVoucher?.uuid,
      image: data.pictureVoucher?.url,
      location: data.userFuelLoadResponse?.position,
    }
  ]

  return (
    <div className={styles.ShowRequest}>
      <div className={styles.top}>
        <div onClick={onHide} style={{ cursor: 'pointer' }}>
          <Image src={iconClose} alt='icon' />
        </div>
        <p>Solicitud</p>
      </div>
      <div className={styles.info}>
        <div className={styles.amount}>
          <p className={styles.text}>Monto total de la recarga</p>
          <div className={styles.text2}>{data.totalAccount}</div>
        </div>
        <div className={styles.both}>
          <div className={styles.km}>
            <p className={styles.text1}>Kilometraje</p>
            <div className={styles.text2}>{data.initialMillage}</div>
          </div>
          <div className={styles.litros}>
            <p className={styles.text1}>Litros</p>
            <div className={styles.text2}>{data.totalLiters}</div>
          </div>
        </div>
        <div className={styles.photos}>
          {dataPhotos.map((item: any, index: number) => {
            return (
              <div className={styles.contPhoto} key={item.id}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.photo}>
                  <div className={styles.white} />
                  <Image
                    src={item.image}
                    alt='image'
                    loader={({ src }) => src}
                    width={10}
                    height={10}
                  />
                </div>
                <div className={styles.location}>
                  <Image src={location} alt='icon' />
                  <p className={styles.textU}>{item.location}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
