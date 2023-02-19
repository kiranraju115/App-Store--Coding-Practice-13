// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabs, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClick = () => {
    onClickTabs(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <div>
      <li className="tab-list" key={tabId}>
        <button
          type="button"
          className={`tab-button ${activeTabClassName}`}
          onClick={onClick}
        >
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
