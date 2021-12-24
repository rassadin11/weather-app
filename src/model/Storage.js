export const storage = {
    setItem: (name, item = true) => {
        localStorage.setItem(name, JSON.stringify(item))
    },
    getItem: (name) => {
        const item = localStorage.getItem(name)

        if (item !== 'undefined') {
            return JSON.parse(item)
        }

        return false
    }
}