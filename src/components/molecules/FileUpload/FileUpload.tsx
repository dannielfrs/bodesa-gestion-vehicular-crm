import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { Toast } from 'primereact/toast';
import { FileUpload as FileUploadPrime, FileUploadProps, ItemTemplateOptions } from 'primereact/fileupload';
import { Button } from '@/components/atoms/Button';
import { Skeleton } from 'primereact/skeleton';
import addImage from '@/../public/images/icons/addImage.svg'
// import Img from '@/components/atoms/Img/Img';
import Image, { StaticImageData } from 'next/image';
import IconDelete from '@/../public/images/icons/IconDelete.svg'
import pdf from '@/../public/images/icons/pdf.png'
import clip from '@/../public/images/icons/clip.svg'
import addExcel from '@/../public/images/icons/addExcel.svg'
import excel from '@/../public/images/icons/excel.svg'
// import ChargeImg2 from '@/../public/icons/ChargeImg2.svg'
// import upload from '@/../public/images/icons/upload.png'
// import IconCloud from '@/../public/images/icons/IconCloud.svg'

interface ChargeImgProps {
  name?: string;
  value?: any;
  label?: string;
  placeholder?: string;
  multiple?: boolean;
  accept?: string;
  url?: string;
  variant?: string;
  maxFileSize?: number;
  required?: boolean;
  optional?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  typeUpload?: any; // Replace 'any' with the correct type
  defaultImage?: string | StaticImageData;
  setImg?: React.Dispatch<React.SetStateAction<StaticImageData | undefined | string>>;
}

interface CustomFile extends File {
  objectURL?: string | StaticImageData;
}

const FileUpload: React.FC<ChargeImgProps> = ({
  name = '',
  value,
  label,
  placeholder,
  multiple,
  accept = ".pdf,.xlsx,.xls",
  url = '',
  maxFileSize,
  required,
  defaultImage,
  optional,
  readOnly = false,
  disabled = false,
  loading,
  variant = 'primary' || 'secondary',
  className = '',
  typeUpload,
  setImg = ()=>{},
}) => {
  const toast = useRef<any>(null); // Use 'any' or replace with the correct type
  const [totalSize, setTotalSize] = useState<number>(0);
  const fileUploadRef = useRef<FileUploadPrime>(null);

  useEffect(() => {
    if (value) {
      fileUploadRef.current?.setFiles(value);
    }
  }, [value]);

  const onTemplateSelect = (e: { files: File[] }) => {
    let _totalSize = totalSize;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });
    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e: { files: File[] }) => {
    let _totalSize = 0;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });
    setTotalSize(_totalSize);
    toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };

  const onTemplateRemove = (event: Event | undefined, file: CustomFile, callback: () => void) => {
    if (event) {
      const syntheticEvent = event as unknown as React.SyntheticEvent<Element, Event>;
      syntheticEvent.stopPropagation(); // Evitar la propagación del evento si es necesario
    }
    setTotalSize(totalSize - file.size);
    callback();
  };

  const handleDeleteClick = () => {
    // Retrieve the currently uploaded files
    const files = fileUploadRef.current?.getFiles() || [];

    // Remove the first file (you might need to adjust this logic based on your requirements)
    const fileToRemove = files[0];

    // Call onTemplateRemove manually to remove the file
    onTemplateRemove(undefined, fileToRemove, () => {
      // After the file is removed, you can do any additional cleanup or actions here
      // For example, if you need to reset the file input, you can do it here
      fileUploadRef.current?.clear();
    });
  };


  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options: { chooseButton: React.ReactNode }) => {
    const { chooseButton } = options;
    return (
      <div className={styles.fileupload_header}>
        {!readOnly && chooseButton}
      </div>
    );
  };

  const itemTemplate = (file: object, props: ItemTemplateOptions) => {
    let objectURL: string | StaticImageData = '';
    if ((file as CustomFile).type === 'application/pdf') {
      objectURL = pdf;
    } else if ((file as CustomFile).type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || (file as CustomFile).type === 'application/vnd.ms-excel') {
      objectURL = excel;
    }
    return (
      <div className={styles.fileupload_item}>
        <div className={styles.circleDelete} onClick={handleDeleteClick}>
          <Image alt='' src={IconDelete}/>
        </div>
        <div className={styles.fileupload_item_icon}>
          <Image alt={(file as CustomFile).name} role='thumbnail' src={objectURL} width={35} height={35} />
        </div>
        <div className={styles.fileupload_item_content}>
          <div>{(file as CustomFile).name}</div>
          <div>{props.formatSize}</div>
        </div>
        {/* {!(disabled || readOnly) && (
          <Button
            type='button'
            icon='pi pi-times'
            className={styles.fileupload_item_delete}
            onClick={(event) => onTemplateRemove(event, file, props.onRemove )}
          />
        )} */}
      </div>
    );
  };

  const emptyTemplate = () => {
    let imageSrc: string | StaticImageData = addImage;
    let text: string = ''

    if (variant === 'primary') {
      imageSrc = addImage;
      setImg(addImage)
      text = 'Subir logo'
    } else if (variant === 'secondary') {
      imageSrc = defaultImage || clip;
      setImg(defaultImage || clip)
      text = 'Adjuntar documento'
    } else if (variant === 'tertiary') {
      imageSrc = defaultImage || addExcel;
      setImg(defaultImage || addExcel)
      text = ''
    }
    
    return (
      <>
        <div className={styles.textImage}>
          <div className={styles.image}>
            <Image src={imageSrc} alt='' className={styles.maxW}></Image>
          </div>
          <div className={styles.fileupload_empty}>
            {text}
          </div>
        </div>
      </>
    );
  };

  const chooseOptions = {
    label: variant === 'primary' ? 'Subir logo' : 'Adjuntar documento',
    icon: '', iconOnly: false,
    className: variant === 'primary' ? styles.fileupload_choose : variant === 'tertiary' ? styles.fileupload_choose : styles.fileupload_choose2,
  };

  return (
    loading ? <Skeleton width='100%' height={'70px'} /> : (
      <div className={`${styles[variant]} ${className}`}>
        {label && (
          <div className={styles.fileupload_labels}>
            <label htmlFor={name}>{label}</label>
            {required && <div>Obligatorio</div>}
            {optional && <div>Opcional</div>}
          </div>
        )}
        <Toast ref={toast} />
        <FileUploadPrime
          ref={fileUploadRef}
          name={name}
          url={url}
          multiple={multiple}
          accept={accept}
          maxFileSize={maxFileSize}
          onUpload={onTemplateUpload}
          onSelect={onTemplateSelect}
          onError={onTemplateClear}
          onClear={onTemplateClear}
          disabled={disabled || readOnly}
          headerTemplate={headerTemplate}
          itemTemplate={itemTemplate}
          emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        />
      </div>
    )
  );
};

FileUpload.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
};

export default FileUpload;
