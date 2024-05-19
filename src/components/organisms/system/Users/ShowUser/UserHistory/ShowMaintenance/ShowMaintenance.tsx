import React from 'react'
import styles from './ShowMaintenance.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import user from '@/../public/images/user.jpg'
import { useRouter } from 'next/navigation'
import placa from '@/../public/images/placa.svg'
import falla from '@/../public/images/falla.svg'
import VideoPlayer from '@/components/molecules/VideoPlayer/VideoPlayer'

export default function ShowMaintenance () {
  const router = useRouter()
  return (
    <>
      <div className={styles.ShowMaintenance}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.back} onClick={() => router.push('/system/users/id/history')}>
              <Image src={IconBack} alt='' />
            </div>
            <div className={styles.user}>
              <Image src={user} alt='' />
            </div>
            <p className={styles.name}>Gabriel Mendoza Villaseñor</p>
            <p className={styles.type}>Chofer</p>
          </div>
          <p className={styles.right}>Folio: <label>59411</label></p>
        </div>
        <div className={styles.information}>
          <p className={styles.title}>Datos generales:</p>
          <div className={styles.generalData}>
            <div className={styles.text}>
              <p>Vehículo</p>
              <p>CAMCEDI - 01 2021</p>
            </div>
            <div className={styles.text}>
              <p>Placas</p>
              <p>FVK980A</p>
            </div>
            <div className={styles.text}>
              <p>Ultimo mantenimiento:</p>
              <p>18 / 07 / 2020</p>
            </div>
          </div>
          <div className={styles.request}>
            <div className={styles.status}>
              <p className={styles.textRequest}>Solicitud: <label>Enviada</label></p>
              <div className={styles.textDate}>
                <p className={styles.date}>30/06/2023</p>
                <p className={styles.hour}>2:00 pm</p>
              </div>
            </div>
            <div className={styles.infoStatus}>
              <p className={styles.sheet}>Folio: <label>59411</label></p>
              <p className={styles.status2}>Estatus: <label>Aceptada</label></p>
              <p className={styles.date}>Fecha de envío: <label>30/06/2023</label></p>
              <p className={styles.hour}>Hora de envío: <label>10:03 pm</label></p>
            </div>
            <div className={styles.types}>
              <div className={styles.typeMaintenance}>
                <label className={styles.title}>Tipo de mantenimiento</label>
                <div className={styles.type}>Preventivo</div>
              </div>
              <div className={styles.typeVehicle}>
                <label className={styles.title}>Tipo de vehículo</label>
                <div className={styles.type}>Flotilla</div>
              </div>
              <div className={styles.mileageText}>
                <label className={styles.title}>Kilometraje</label>
                <div className={styles.numberMileage}>150 km</div>
              </div>
            </div>
            <div className={styles.details}>
              <label className={styles.title}>Detalles</label>
              <div className={styles.textDetails}>A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples. These apples were always counted, and about the time when they began to grow ripe it was found that every night one of them was gone. The king became very angry at this, and ordered the gardener to keep watch all night under the tree. </div>
            </div>
            <div className={styles.photos}>
              <div className={styles.photoPlate}>
                <p className={styles.title}>Fotografía de la placa</p>
                <div className={styles.photo1}>
                  <Image src={placa} alt='' />
                </div>
              </div>
              <div className={styles.photoFault}>
                <p className={styles.title}>Fotografía de la falla</p>
                <div className={styles.photo2}>
                  <Image src={falla} alt='' />
                </div>
              </div>
            </div>
            <div className={styles.videoFault}>
              <h1>Se adjuntó el video de la falla</h1>
              <VideoPlayer src='/images/video.mp4' />
            </div>
          </div>
          <div className={styles.workshopAssignment}>
            <div className={styles.dateAssignment}>
              <p className={styles.title}>Asignación de taller</p>
              <div className={styles.date}>
                <p>30/06/2023</p>
                <p>2:30 pm</p>
              </div>
            </div>
            <p className={styles.selected}>
              Taller seleccionado: <label>Volkswagen service</label>
            </p>
            <div className={styles.info}>
              <div className={styles.textBoth}>
                <p className={styles.textGray}>No. SAT:</p>
                <p className={styles.textBlack}>61962</p>
              </div>
              <div className={styles.textBoth}>
                <p className={styles.textGray}>Contacto:</p>
                <p className={styles.textBlack}>Jared Hoffman</p>
              </div>
              <div className={styles.textBoth}>
                <p className={styles.textGray}>Contacto:</p>
                <p className={styles.textBlack}>(589) 514-8090</p>
              </div>
              <div className={styles.textBoth}>
                <p className={styles.textGray}>Horario:</p>
                <p className={styles.textBlack}>9:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
