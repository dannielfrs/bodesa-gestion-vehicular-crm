import { FileUpload as FileUploadPrime } from 'primereact/fileupload'
import { ReactNode } from 'react'

interface FileUploadProps {
  id?: string;
  name?: string;
  url?: string;
  accept?: string;
  maxFileSize?: number;
  children?: ReactNode;
  label2?: string;
  onUpload?: () => void;
  className?: string;
  style?: any;
}

const chooseOptions = { label: 'Buscar' }

export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  name,
  url,
  accept,
  maxFileSize,
  onUpload,
  children,
  label2,
  className,
  style
}) => {
  return (
    <FileUploadPrime
      id={id}
      name={name}
      url={url}
      accept={accept}
      maxFileSize={maxFileSize}
      onUpload={onUpload}
      className={className}
      style={style}
      mode="basic"
      chooseOptions={{ label: label2 || chooseOptions.label }}
    >
      {children}
    </FileUploadPrime>
  )
}