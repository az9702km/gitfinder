import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"
import { IconAlertCircle } from "@tabler/icons-react"

function Alert() {

  const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div className="flex items-center mb-4 space-x-2">
      {alert.type === 'error' && (
        <IconAlertCircle className="text-red-500"/>
      )}
      <p className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.msg}</strong>
      </p>
    </div>
  )
}
export default Alert