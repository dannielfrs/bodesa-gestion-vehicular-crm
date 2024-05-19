import React, { useContext } from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import user from '@/../public/images/user.jpg'
import icon_home from '@/../public/images/icons/icon_home.svg'
import carga_combustible from '@/../public/images/icons/carga_combustible.svg'
import mantenimiento from '@/../public/images/icons/mantenimiento.svg'
import vehicles_pool from '@/../public/images/icons/vehicles-pool.svg'
import users from '@/../public/images/icons/users.svg'
import talleres from '@/../public/images/icons/talleres.svg'
import unidades from '@/../public/images/icons/unidades.svg'
import settings from '@/../public/images/icons/settings.svg'
import reports from '@/../public/images/icons/reports.svg'
import cerrar_sesion from '@/../public/images/icons/cerrar_sesion.svg'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import IconEditar from '@/../public/images/icons/IconEditar.svg'

interface Route {
    id: number
    icon: string
    title: string
    link: string
    onClick?: Function
}

export default function Sidebar() {
    //
    const { logoutService } = useContext(AuthContext)
    const router = useRouter()
    // const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    const currentPath = router.pathname

    const routes: Route[] = [
        {
            id: 1,
            icon: icon_home,
            title: 'Inicio',
            link: '/system/home'
        },
        {
            id: 2,
            icon: carga_combustible,
            title: 'Carga de combustible',
            link: '/system/fuel-load'
        },
        {
            id: 3,
            icon: mantenimiento,
            title: 'Mantenimiento',
            link: '/system/maintenance'
        },
        {
            id: 4,
            icon: vehicles_pool,
            title: 'Vehículos pool',
            link: '/system/pool-vehicles'
        }
    ]

    const routes2: Route[] = [
        {
            id: 5,
            icon: users,
            title: 'Usuario',
            link: '/system/users'
        },
        {
            id: 6,
            icon: talleres,
            title: 'Talleres',
            link: '/system/workshops'
        },
        {
            id: 7,
            icon: unidades,
            title: 'Unidades',
            link: '/system/units'
        }
    ]

    const routes3: Route[] = [
        {
            id: 8,
            icon: settings,
            title: 'Configuraciones',
            link: '/system/settings'
        },
        {
            id: 9,
            icon: reports,
            title: 'Reportes',
            link: '/system/reports'
        }
    ]

    const isRouteActive = (route: Route) => {
        return currentPath.startsWith(route.link);
    }

    return (
        <>
            <div className={styles.Sidebar}>
                <div className={styles.user}>
                    <Image src={user} alt='icon' />
                </div>
                <p className={styles.name}>Roxie Moreno Hettie Wallace</p>
                <div className={styles.editProfile} onClick={() => router.push('/system/edit-profile')}>
                    <p>Editar mi perfil</p>
                    <Image src={IconEditar} alt=''/>
                </div>
                <div className={styles.pages}>
                    {routes.map((route) => {
                        return (
                            <>
                                <div className={`${styles.link} ${isRouteActive(route) ? styles.active : ''}`} key={route.id} onClick={() => router.push(route.link)}>
                                    <Image src={route.icon} alt='icon' />
                                    <p className={styles.title}>{route.title}</p>
                                </div>
                            </>
                        )
                    })}
                    <div className={styles.titleGray}>Gestión Usuarios y Unidades</div>
                    {routes2.map((route) => {
                        return (
                            <>
                                <div className={`${styles.link} ${isRouteActive(route) ? styles.active : ''}`} key={route.id} onClick={() => router.push(route.link)}>
                                    <Image src={route.icon} alt='icon' />
                                    <p className={styles.title}>{route.title}</p>
                                </div>
                            </>
                        )
                    })}
                    <div className={styles.titleGray}>Gestión del sistema</div>
                    {routes3.map((route) => {
                        return (
                            <>
                                <div className={`${styles.link} ${isRouteActive(route) ? styles.active : ''}`} key={route.id} onClick={() => router.push(route.link)}>
                                    <Image src={route.icon} alt='icon' />
                                    <p className={styles.title}>{route.title}</p>
                                </div>
                            </>
                        )
                    })}
                    <div className={styles.link} onClick={logoutService}>
                        <Image src={cerrar_sesion} alt='icon' />
                        <p className={styles.title}>Cerrar sesión</p>
                    </div>
                </div>
            </div >
        </>
    )
}