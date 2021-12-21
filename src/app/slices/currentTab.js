import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeTab: 0,
    tabs: [
        { value: "For a week" },
        { value: "For 14 days" }
    ]
}

export const currentTab = createSlice({
    name: "currentTab",
    initialState,
    reducers: {
        changeActiveTab(state, action) {
            state.activeTab = action.payload
        }
    }
})

export const { changeActiveTab } = currentTab.actions

export default currentTab.reducer