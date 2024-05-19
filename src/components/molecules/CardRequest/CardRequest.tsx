import { memo } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Checkbox } from "@/components/molecules/CheckboxAltern/Checkbox"
import defaultPicture from "@/../public/images/default_picture.svg"
import userGroup from '@/../public/images/icons/user_group.svg'

interface ComponentProps {
  key?: any
  id?: string
  imageUrl?: string
  name?: string
  requestStatus?: string
  hour?: string
  isGroup?: boolean
  selection?: boolean
  onClick?: () => void
  methods?: any
  className?: string
}

export const CardRequest: React.FC<ComponentProps> = memo(({
  key,
  id,
  imageUrl,
  name,
  requestStatus,
  hour,
  isGroup,
  selection,
  onClick = () => { },
  methods,
  className = ''
}) => {

  const handleOnClick = () => {
    onClick()
    if (selection) methods.setValue(`check_${id}`, !methods.watch(`check_${id}`))
  }

  return (
    <div className={styles.card} onClick={handleOnClick} key={key}>
      {selection && !isGroup &&
        <div className={styles.card_selection}>
          <Checkbox
            inputId={`check_${id}`}
            name={`check_${id}`}
            variant="primary"
            required={true}
          />
        </div>
      }
      <div className={styles.card_image}>
        <Image
          src={imageUrl || (isGroup ? userGroup : defaultPicture)}
          alt="picture_profile"
          loader={({ src }) => src}
          width={40}
          height={40}
        />
      </div>
      <div className={styles.card_content}>
        <div>{name}</div>
        <div>Solicitud: <span>{requestStatus}</span></div>
        <div className={styles.card_time}>{hour}</div>
      </div>
    </div>
  )
})

CardRequest.displayName = 'CardRequest'
