import Swal from 'sweetalert2'
import loading from '@/../public/images/icons/loading.gif'
// import advertament from '@/../public/images/icons/advertament.svg'
// import checked from '@/../public/images/icons/checked.svg'

export function alertLoading(title: string = '', text: string = 'Espere un momento...') {
  Swal.fire({
    title,
    text,
    iconHtml: `<img src="${loading.src}" style="width: 42px; height: 42px;" >`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
    }
  })
}

export function alertSuccess(title: string = '', text: string = 'Los datos proporcionados son correctos') {
  Swal.fire({
    title,
    text,
    icon: 'success',
    // iconHtml: `<img src="${checked.src}" style="width: 42px; height: 42px;" >`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
    }
  })
}

export function alertError(title: string = '', text: string | Record<string, any> = 'Los datos proporcionados son incorrectos') {
  Swal.fire({
    title,
    icon: 'error',
    // iconHtml: `<img src="${advertament.src}" style="width: 42px;height: 42px;" >`,
    html: typeof text === 'object'
      ? `<ul>${Object.entries(text).map(([key, item]) => {
        return item.map((item: any) => { return `<li>${item}</li>` }).join('')
      }).join('')}</ul>`
      : text,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
    }
  })
}

export function alertDelete(title: string = '¿Estas seguro que deseas eliminar?', text: string = 'El registro se eliminará', onConfirm: () => void = () => { }) {
  Swal.fire({
    title,
    text,
    icon: 'warning',
    showDenyButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: 'Cancelar',
    customClass: {
      title: 'titleModal',
      // popup: 'fontFamily'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
    } else if (result.isDenied) {
      Swal.close()
    }
  })
}

export function closeAlerts() {
  Swal.close()
}
