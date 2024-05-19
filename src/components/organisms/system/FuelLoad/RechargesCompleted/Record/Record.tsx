import React, { useContext } from 'react'
import styles from './Record.module.scss'
import Image from 'next/image'
import IconBack from '@/../public/images/icons/IconBack.svg'
import user from '@/../public/images/user.jpg'
import odometro from '@/../public/images/odometro.jpg'
import ticket from '@/../public/images/ticket.jpg'
import voucher from '@/../public/images/voucher.jpg'
import ubication from '@/../public/images/icons/ubication.svg'
import pago from '@/../public/images/pago.jpg'
import { useRouter } from 'next/navigation'
import { FuelLoadHistoryContext } from '@/context/authenticated/fuelLoadHistory/FuelLoadHistoryContext'

export default function Record() {
  //
  const { loading, data } = useContext(FuelLoadHistoryContext)
  const router = useRouter()

  const dataPhotos = [
    {
      id: 1,
      image: odometro,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del odómetro'
    },
    {
      id: 2,
      image: ticket,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del ticket'
    },
    {
      id: 3,
      image: voucher,
      ubication: 'Av. Constitución, Puerta del Sol, Colima.',
      title: 'Fotografía del voucher'
    }
  ]

  return (
    <div className={styles.Record}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.back} onClick={() => router.back()}>
            <Image src={IconBack} alt='' />
          </div>
          <div className={styles.user}>
            <Image src={user} alt='' />
          </div>
          <p className={styles.name}>Gabriel Mendoza Villaseñor</p>
          <p className={styles.type}>Chofer</p>
        </div>
        <div className={styles.right}>Folio: <p className={styles.number}>5941</p></div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Datos generales:</p>
        <div className={styles.text}>
          <div className={styles.cont}>
            <p className={styles.gray}>Vehículo</p>
            <p className={styles.black}>CAMCEDI - 01 2021</p>
          </div>
          <div className={styles.cont}>
            <p className={styles.gray}>Placas</p>
            <p className={styles.black}>FVK980A</p>
          </div>
          <div className={styles.cont}>
            <p className={styles.gray}>Ubicación GPS</p>
            <p className={styles.black}>Av. Constitución, Puerta del sol, Colima.</p>
          </div>
          <div className={styles.cont}>
            <p className={styles.gray}>Kilometraje aceptado</p>
            <p className={styles.black}>184.00 km</p>
          </div>
          <div className={styles.cont}>
            <p className={styles.gray}>Ventana de kilómetros</p>
            <p className={styles.black}>195.00 km</p>
          </div>
          <div className={styles.cont}>
            <p className={styles.gray}>Porcentaje de diferencias</p>
            <p className={styles.black}>% 15</p>
          </div>
        </div>
        <div className={styles.request}>
          <p className={styles.title}>Solicitud: <label>Enviada</label></p>
          <div className={styles.dateHour}>
            <p>30/06/2023</p>
            <p>2:00 pm</p>
          </div>
        </div>
        <div className={styles.folio}>
          <p>Folio: <label>59411</label></p>
        </div>
        <div className={styles.date}>
          <div className={styles.date1}>
            <p>Fecha de envío: <label>30/06/2023</label></p>
          </div>
          <div className={styles.date1}>
            <p>Hora de envío: <label>2:00 pm</label></p>
          </div>
        </div>
        <div className={styles.status}>
          <p>Estatus: <label>Rechazada</label></p>
        </div>
        <div className={styles.contReason}>
          <p className={styles.titleReason}>Motivo:</p>
          <div className={styles.reason}>Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</div>
        </div>
        <div className={styles.contInfo}>
          <div className={styles.perfomance}>
            <p className={styles.title}>Rendimiento</p>
            <p className={styles.gray}>Kilómetros por litro</p>
            <p className={styles.yellow}>40 km</p>
            <p className={styles.red}>Diferencia</p>
            <p className={styles.redBig}>40 km / 1 lt</p>
          </div>
          <div className={styles.right}>
            <div className={styles.mileage}>
              <p className={styles.km}>Kilometraje / litro</p>
              <p className={styles.currently}>Actual</p>
              <div className={styles.numberKm}>184.00 km / 5 lt</div>
              <p className={styles.date}>Fecha de solicitud</p>
              <p className={styles.textDate}>02 /Agosto/2023</p>
            </div>
            <div className={styles.lastReload}>
              <p className={styles.gray}>Ultima recarga</p>
              <div className={styles.kmlt}>184.00 km / 5 lt</div>
              <p className={styles.dateLast}>Fecha de ultima recarga</p>
              <p className={styles.textD}>02 /Julio/2023</p>
            </div>
          </div>
        </div>
        <div className={styles.contRequest}>
          <p className={styles.title2}>Solicitud</p>
          <div className={styles.containerR}>
            <div className={styles.txt}>
              <div className={styles.both}>
                <div className={styles.contKm}>
                  <p className={styles.titlekm}>Kilometraje</p>
                  <div className={styles.km}>184</div>
                </div>
                <div className={styles.contLt}>
                  <p className={styles.titleLt}>Litros</p>
                  <div className={styles.lt}>5</div>
                </div>
              </div>
              <div className={styles.contAmount}>
                <p className={styles.amount}>Monto total de la recarga</p>
                <div className={styles.number}>$861.860</div>
              </div>
            </div>
            <div className={styles.photos}>
              {dataPhotos.map((e, index) => {
                return (
                  <div className={styles.contPhoto} key={e.id}>
                    <p className={styles.title}>{e.title}</p>
                    <div className={styles.photo}>
                      <div className={styles.white} />
                      <Image src={e.image} alt='' />
                    </div>
                    <div className={styles.ubication}>
                      <Image src={ubication} alt='' />
                      <p className={styles.textU}>{e.ubication}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.resending}>
          <p className={styles.textRe}>Solicitud: <label>Reenvío</label></p>
          <div className={styles.dateRe}>
            <p className={styles.textgray}>30/06/2023</p>
            <p className={styles.textgray}>2:35 pm</p>
          </div>
        </div>
        <div className={styles.sheet}>
          Folio: <p className={styles.green}>59411</p>
        </div>
        <div className={styles.dateSheet}>
          <div className={styles.dateSheet1}>
            <p className={styles.grayS}>Fecha de envío:</p>
            <p className={styles.blackS}>30/06/2023</p>
          </div>
          <div className={styles.dateSheet1}>
            <p className={styles.grayS}>Hora de envío</p>
            <p className={styles.blackS}>2:00 pm</p>
          </div>
        </div>
        <div className={styles.resending2}>
          <p className={styles.textRe}>Solicitud: <label>Reenvío</label></p>
          <div className={styles.dateRe}>
            <p className={styles.textgray}>30/06/2023</p>
            <p className={styles.textgray}>2:35 pm</p>
          </div>
        </div>
        <div className={styles.contInfo}>
          <div className={styles.perfomance}>
            <p className={styles.title}>Rendimiento</p>
            <p className={styles.gray}>Kilómetros por litro</p>
            <p className={styles.yellow}>40 km</p>
            <p className={styles.red}>Diferencia</p>
            <p className={styles.redBig}>40 km / 1 lt</p>
          </div>
          <div className={styles.right}>
            <div className={styles.mileage}>
              <p className={styles.km}>Kilometraje / litro</p>
              <p className={styles.currently}>Actual</p>
              <div className={styles.numberKm}>184.00 km / 5 lt</div>
              <p className={styles.date}>Fecha de solicitud</p>
              <p className={styles.textDate}>02 /Agosto/2023</p>
            </div>
            <div className={styles.lastReload}>
              <p className={styles.gray}>Ultima recarga</p>
              <div className={styles.kmlt}>184.00 km / 5 lt</div>
              <p className={styles.dateLast}>Fecha de ultima recarga</p>
              <p className={styles.textD}>02 /Julio/2023</p>
            </div>
          </div>
        </div>
        <div className={styles.contRequest}>
          <p className={styles.title2}>Solicitud</p>
          <div className={styles.containerR}>
            <div className={styles.txt}>
              <div className={styles.both}>
                <div className={styles.contKm}>
                  <p className={styles.titlekm}>Kilometraje</p>
                  <div className={styles.km}>184</div>
                </div>
                <div className={styles.contLt}>
                  <p className={styles.titleLt}>Litros</p>
                  <div className={styles.lt}>5</div>
                </div>
              </div>
              <div className={styles.contAmount}>
                <p className={styles.amount}>Monto total de la recarga</p>
                <div className={styles.number}>$861.860</div>
              </div>
            </div>
            <div className={styles.photos}>
              {dataPhotos.map((e, index) => {
                return (
                  <div className={styles.contPhoto} key={e.id}>
                    <p className={styles.title}>{e.title}</p>
                    <div className={styles.photo}>
                      <div className={styles.white} />
                      <Image src={e.image} alt='' />
                    </div>
                    <div className={styles.ubication}>
                      <Image src={ubication} alt='' />
                      <p className={styles.textU}>{e.ubication}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.register}>
          <p className={styles.textRe}>Registro de recarga: <label>Finalizada</label></p>
          <div className={styles.dateRe}>
            <p className={styles.textgray}>30/06/2023</p>
            <p className={styles.textgray}>2:35 pm</p>
          </div>
        </div>
        <div className={styles.textL}>
          <div className={styles.txtBoth}>
            <p className={styles.gray}>No. nómina  tarjeta :</p>
            <p className={styles.black}>123456789123456</p>
          </div>
          <div className={styles.txtBoth}>
            <p className={styles.gray}>Centro de costos 2:</p>
            <p className={styles.black}>Centro costos 2</p>
          </div>
          <div className={styles.txtBoth}>
            <p className={styles.gray}>Dirección:</p>
            <p className={styles.black}>Cobranza</p>
          </div>
          <div className={styles.txtBoth}>
            <p className={styles.gray}>No. nómina:</p>
            <p className={styles.black}>123456789123456</p>
          </div>
        </div>
        <div className={styles.receiptRecharge}>
          <div className={styles.left}>
            <div className={styles.recharge}>
              <label>Recarga</label>
              <div className={styles.blue}>$100.00</div>
            </div>
            <div className={styles.observations}>
              <div className={styles.contTitle}>
                <p className={styles.title}>Observaciones</p>
                <p className={styles.number}>99/150</p>
              </div>
              <div className={styles.textObservations}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>Recibo de la recarga</p>
            <div className={styles.contReceipt}>
              <Image src={pago} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
