import { useContext, useEffect, useState } from "react"
import styles from "./FuelLoad.module.scss"
import InputText from "@/components/molecules/InputText/InputText"
import FormHookProvider from "@/components/layouts/form/FormHookProvider/FormHookProvider"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import buscar from "@/../public/images/icons/buscar.svg"
import Image from "next/image"
import Button from "@/components/molecules/Button/Button/Button"
import { TabPanel, TabView } from "primereact/tabview"
import recarga from "@/../public/images/recarga.svg"
import { NewRequest } from "./NewRequest/NewRequest"
import recargarCombustible from "@/../public/images/recargar_combustible.svg"
import { RechargeRegister } from "./RechargeRegister/RechargeRegister"
import { GroupRegister } from "./GroupRegister/GroupRegister"
import RechargesCompleted from "./RechargesCompleted/RechargesCompleted"
import NewGroup from "./NewGroup/NewGroup"
import { CardRequest } from "@/components/molecules/CardRequest/CardRequest"
import { FuelLoadContext } from "@/context/authenticated/fuelLoad/FuelLoadContext"
import { FuelLoadRegisterContext } from "@/context/authenticated/fuelLoadRegister/FuelLoadRegisterContext"
import { FuelLoadCompletedProvider } from "@/context/authenticated/fuelLoadCompleted/FuelLoadCompletedProvider"

export default function FuelLoad() {

  const { loading, data, getRequestItemService, savedSuccessful } = useContext(FuelLoadContext)
  const { dataRegister, getItemService, savedSuccess, onOptionsChange, getGroupItemService } = useContext(FuelLoadRegisterContext)
  const methods = useForm()
  const [activeIndex, setActiveIndex] = useState(0)
  const [registerData, setRegisterData] = useState<any[]>([])
  const [showNewRequest, setShowNewRequest] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showGroupRegister, setShowGroupRegister] = useState(false)
  const [multipleSelection, setMultipleSelection] = useState(false)

  useEffect(() => {
    setRegisterData(dataRegister)
  }, [dataRegister])

  useEffect(() => {
    if (!savedSuccessful) setShowNewRequest(false)
  }, [savedSuccessful])

  useEffect(() => {
    if (!savedSuccess) setShowRegister(false)
  }, [savedSuccess])

  useEffect(() => {
    if (multipleSelection) {
      const result = dataRegister.filter((item: any) => item.isGroup === false)
      setRegisterData(result)
    } else {
      setRegisterData(dataRegister)
    }
  }, [multipleSelection])

  useEffect(() => {
    setShowNewRequest(false)
    setShowRegister(false)
    setShowGroupRegister(false)
    setMultipleSelection(false)
  }, [activeIndex])

  const onSubmit = () => { }

  const handleMultipleSelection = () => {
    setMultipleSelection(!multipleSelection)
    setShowRegister(false)
    setShowGroupRegister(false)
  }

  const tabs = [
    { id: 0, label: "Solicitudes Nuevas" },
    { id: 1, label: "Registro de recarga" },
    { id: 2, label: "Recargas completadas" },
  ]

  const handleShowRequest = (id: string) => {
    setShowNewRequest(true)
    getRequestItemService(id)
  }

  const handleOnClickRequest = (id: string, isGroup: boolean) => {
    if (multipleSelection) {
      onOptionsChange(id, methods.watch(`check_${id}`))
    } else if (isGroup) {
      getGroupItemService(id)
      setShowRegister(false)
      setShowGroupRegister(true)
    } else {
      getItemService(id)
      setShowRegister(true)
      setShowGroupRegister(false)
    }
  }

  return (
    <div className={styles.FuelLoad}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        {activeIndex === 0 && (
          <div className={styles.ContainerRequests}>
            <p className={styles.title}>Solicitudes nuevas</p>
            <div style={{ width: "248px" }}>
              <InputText
                name="email"
                label=""
                placeholder="Buscar"
                variant="search"
                icon={buscar}
                height="35px"
                rules={{ required: true }}
              />
            </div>
            <div className={styles.requests}>
              {data.map((item: any, index: number) => {
                return (
                  <CardRequest
                    key={item.uuid}
                    id={item.uuid}
                    imageUrl={item.image?.url}
                    name={item.name}
                    requestStatus={item.status}
                    hour={item.date}
                    onClick={() => handleShowRequest(item.uuid)}
                    methods={methods}
                  />
                )
              })}
            </div>
          </div>
        )}
        {activeIndex === 1 && (
          <div className={styles.ContainerRequests}>
            <p className={styles.title}>Solicitudes nuevas</p>
            <div style={{ width: "248px" }}>
              <InputText
                name="email"
                label=""
                placeholder="Buscar"
                variant="search"
                icon={buscar}
                height="35px"
                rules={{ required: true }}
              />
            </div>
            <div style={{ width: "150px" }} className={styles.buttonSelection}>
              <Button
                type='button'
                onClick={handleMultipleSelection}
                height="25px"
                variant={multipleSelection ? "third" : "secondary"}
              >
                {multipleSelection ? "Cancelar" : "Selección multiple"}
              </Button>
            </div>
            <div className={styles.requests2}>
              {registerData.map((item: any, index: number) => {
                return (
                  <CardRequest
                    key={item.uuid}
                    id={item.uuid}
                    imageUrl={item.image?.url}
                    name={item.name}
                    requestStatus={item.status}
                    hour={item.date}
                    isGroup={item.isGroup}
                    selection={multipleSelection}
                    onClick={() => handleOnClickRequest(item.uuid, item.isGroup)}
                    methods={methods}
                  />
                )
              })}
            </div>
          </div>
        )}
      </FormHookProvider>
      <div className={styles.tabsRequest}>
        <div className={activeIndex === 2 ? styles.tabsBtns3 : styles.tabsBtns}>
          {tabs.map((item: any) => {
            return (
              <div key={item.id} className={styles.cont_tabs}>
                <div style={{ width: "223px" }}>
                  <Button
                    type="button"
                    onClick={() => setActiveIndex(item.id)}
                    className={`${activeIndex === item.id && styles.active}`}
                    variant={activeIndex === item.id ? "primary" : "secondary"}
                    height="40px"
                  >
                    {item.label}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.container}>
          <TabView
            className={styles.tabView}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel className={styles.TabPanel}>
              <div className={styles.contFuel}>
                <div className={styles.image}>
                  <Image src={recarga} alt="icon" />
                </div>
                <p className={styles.textBold}>
                  Solicitudes de recarga de combustible
                </p>
                <p className={styles.text}>
                  Revisa y acepta solicitudes de usuarios para la carga de
                  combustible.
                </p>
              </div>
              {showNewRequest && (<NewRequest onHide={() => setShowNewRequest(false)} />)}
            </TabPanel>
            <TabPanel className={styles.TabPanel}>
              <div className={styles.contFuel}>
                <div className={styles.image}>
                  <Image src={recargarCombustible} alt="icon" />
                </div>
                <p className={styles.textBold}>Recargas de combustible</p>
                <p className={styles.text}>
                  Registra las recargas autorizadas.
                </p>
              </div>
              {showRegister && multipleSelection === false && <RechargeRegister onHide={() => setShowRegister(false)} />}
              {multipleSelection && <NewGroup />}
              {showGroupRegister && <GroupRegister onHide={() => setShowGroupRegister(false)} />}
            </TabPanel>
            <TabPanel className={styles.TabPanel}>
              <FuelLoadCompletedProvider>
                <RechargesCompleted />
              </FuelLoadCompletedProvider>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  )
}
