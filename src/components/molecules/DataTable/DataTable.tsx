import React, { FC } from 'react'
import { DataTable as DataTablePrime } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { Skeleton } from 'primereact/skeleton'
import styles from './styles.module.scss'

interface DataTableProps {
  data: any[]
  columns: any[]
  numberRows?: number
  variant?: string
  search?: string
  searchStatus?: any
  headerFilters?: string
  loading?: boolean
  paginatorNone?: boolean
  scrollable?: boolean
  scrollHeight?: string
  noSort?: boolean
  selectionMode?: "multiple" | "single" | "radiobutton" | "checkbox" | null | undefined
  selection?: any[]
  onSelectionChange?: (e: any) => void
  onRowSelect?: (e: any) => void
  editMode?: string
  editor?: any
  onCellEditComplete?: (e: any) => void
  rowHeight?: string
  className?: string
  textAlign?: string
}

const DataTable: FC<DataTableProps> = ({
  data = [],
  columns = [],
  numberRows = 10,
  variant = 'primary',
  search = '',
  searchStatus,
  headerFilters = '',
  loading = false,
  paginatorNone = false,
  scrollable = true,
  scrollHeight = '550px',
  noSort = false,
  selectionMode,
  selection,
  onSelectionChange,
  onRowSelect,
  editMode,
  editor,
  onCellEditComplete,
  rowHeight = '50px',
  className = '',
}) => {
  const filters = {
    global: { value: search, matchMode: FilterMatchMode.CONTAINS },
    status: { value: searchStatus, matchMode: FilterMatchMode.EQUALS },
  }

  const bodyTemplate = () => {
    return <Skeleton />
  }

  const paginatorTemplate = () => {
    return loading
      ? undefined
      : {
        layout: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        CurrentPageReport: (options: any) => {
          return (
            <div className={styles.datatable_footer}>
              Mostrando{' '}
              <span className='fw-bold'>{options.first}</span>-
              <span className='fw-bold'>{options.last}</span> de{' '}
              <span className='fw-bold'>{options.totalRecords}</span> registros
            </div>
          )
        },
      }
  }

  const bodyColumn = (column: any) => {
    if (column?.body) {
      return column?.body
    } else {
      return ''
    }
  }

  return (
    <div className={`${styles.datatable} ${styles[variant]} ${className}`}>
      <DataTablePrime
        value={data}
        paginator={!paginatorNone}
        paginatorTemplate={loading ? undefined : paginatorTemplate()}
        rows={numberRows}
        filters={filters}
        header={headerFilters}
        scrollable={scrollable}
        scrollHeight={scrollHeight}
        stripedRows
        emptyMessage='No se encontraron resultados'
        selection={selection}
        onSelectionChange={onSelectionChange}
        onRowSelect={onRowSelect}
        editMode={editMode}
      >
        {columns?.map((column) => (
          <Column
            key={column?.id}
            field={column?.field}
            header={column?.header}
            body={loading ? bodyTemplate : bodyColumn(column)}
            editor={column?.body ? '' : editor}
            onCellEditComplete={onCellEditComplete}
            sortable={!noSort ? !loading : false}
            className={styles.datatable_column}
            style={{
              minWidth: column.w,
              width: column.w,
              textAlign: column.t,
              height: rowHeight,
              minHeight: rowHeight,
            }}
            frozen={column.frozen}
          />
        ))}
      </DataTablePrime>
    </div>
  )
}

export default DataTable
