import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useController } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'
import imageIcon from '@/../public/images/icons/addImage.svg'
import IconDelete from '@/../public/images/icons/IconDelete.svg'
import IconShow from '@/../public/images/icons/IconShow.svg'
import defaultUser from '@/../public/images/defaultUser.png'
import EditIcon from '@/../public/images/icons/EditIcon.svg'

interface ComponentProps {
  name?: string;
  label?: string;
  title?: string;
  showHandlePhoto?: boolean;
  icon?: any;
  accept?: string;
  setImageFile?: (file: File) => void;
  onUpload?: () => void;
  defaultImage?: string;
  disabled?: boolean;
  loading?: boolean;
  rules?: any;
  onHandlePhoto?: () => void;
  width?: string;
  height?: string;
  variant?: string;
  className?: string;
  editIcon?: boolean;
}

export const ImageUpload: React.FC<ComponentProps> = ({
  name = 'fileupload',
  label,
  title,
  icon = imageIcon,
  accept = 'image/png, image/jpg, image/jpeg',
  setImageFile = () => { },
  onUpload = () => { },
  defaultImage,
  disabled = false,
  loading = false,
  showHandlePhoto = true,
  rules,
  variant = 'fileupload',
  width = '100%',
  editIcon = false,
  height = '660px',
  onHandlePhoto = () => { },
  className = ''
}) => {
  const [imageUploadedUrl, setImageUploadedUrl] = useState<string | null>(null)
  const inputTypeFile = useRef<HTMLInputElement>(null)

  const { field, fieldState: { error } } = useController({
    name,
    rules
  })

  useEffect(() => {
    if (defaultImage) setImageUploadedUrl(defaultImage)
  }, [defaultImage])

  useEffect(() => {
    return () => {
      field.onChange({ target: { value: '', files: [] } })
    }
  }, [])

  const onChangeFile = (e: any) => {
    field.onChange(e)
    if (e.target.value === '') {
      setImageUploadedUrl(null)
    }
    const file = e.target.files[0]
    setImageFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImageUploadedUrl(URL.createObjectURL(file))
      }
      reader.readAsDataURL(file)
    }
    onUpload = () => { }
  }

  const activateInput = () => {
    if (!disabled && inputTypeFile.current) inputTypeFile.current.click()
  }

  const handleDeleteFile = (e: any) => {
    e.stopPropagation()
    onChangeFile({ target: { value: '', files: [] } })
  }

  const handlePhoto = (e: any) => {
    e.stopPropagation()
    onHandlePhoto();
  }

  return (
    <div className={`${styles.fileupload} ${className} ${styles[variant]}`}>
      {label && <label className={styles.fileupload_label}>{label}</label>}
      {loading
        ? <Skeleton width={width} height={height} />
        : (
          <div
            onClick={activateInput}
            className={`${styles.fileupload_content} ${error ? styles.invalid : ''}`}
            style={{ width, height }}
          >
            <input
              {...field}
              type='file'
              name={name}
              ref={inputTypeFile}
              onChange={(e) => onChangeFile(e)}
              accept={accept}
              className={styles.fileupload_input_hidden}
            />
            {editIcon &&
              <div className={styles.editButton}>
                <Image src={EditIcon} alt='' />
              </div>
            }
            {imageUploadedUrl
              ? (
                <>
                {variant !== 'primary' ? 
                  (
                    <Image
                      src={imageUploadedUrl}
                      loader={({ src }) => src}
                      alt='image'
                      className={styles.fileupload_image}
                      width={535}
                      height={285}
                    />
                  )
                  :
                  (
                    <div className={styles.contImage}>
                      <Image
                        src={imageUploadedUrl}
                        loader={({ src }) => src}
                        alt='image'
                        className={styles.fileupload_image}
                        width={535}
                        height={285}
                      />
                    </div>
                  )
                }
                  {variant !== 'primary' && 
                    <div className={showHandlePhoto ? styles.fileupload_delete : styles.showImage} onClick={(e) => handleDeleteFile(e)}>
                      <Image src={IconDelete} alt='' />
                    </div>
                  }
                  {showHandlePhoto &&
                    <div className={styles.showImage} onClick={handlePhoto}>
                      <Image src={IconShow} alt='' />
                    </div>
                  }
                </>)
              : (
                <div className={styles.fileupload_empty}>
                  <div>{title}</div>
                  <Image
                    src={variant === 'primary' ? defaultUser : icon}
                    alt='icon'
                  />
                </div>
              )}
          </div>)}
      {error && <span className={styles.invalid_message}>{error.message}</span>}
    </div>
  )
}