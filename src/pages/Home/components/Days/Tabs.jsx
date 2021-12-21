import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab } from "../../../../app/slices/currentTab";
import s from './Days.module.scss'

const Tabs = (props) => {
  const { tabs, activeTab } = useSelector(state => state.currentTab)
  const dispatch = useDispatch()

  const handleChangeTab = (idx) => {
    dispatch(changeActiveTab(idx))
  }

  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {tabs && tabs.map((tab, idx) => {
          return (
            <div key={tab.value} onClick={() => handleChangeTab(idx)} className={activeTab === idx ? `${s.tab} ${s.active}` : `${s.tab}`}>
              <p>{tab.value}</p>
            </div>
          )
        })}
      </div>
      <div className={s.cancel} onClick={() => handleChangeTab(0)}>Cancel</div>
    </div>
  )
};

export default Tabs;