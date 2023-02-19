// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl} = eachApp

  return (
    <>
      <li className="app-card" key={appId}>
        <img src={imageUrl} alt={appName} className="apps-icon" />

        <p className="apps-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
