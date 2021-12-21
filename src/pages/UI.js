import { getDate, getDay, getMonth, parseISO } from "date-fns";

const daysInWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthInWords = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const computeDay = (date) => {
    let day = new Date().getDay()
    let d = new Date().getDate()

    if ((day === getDay(parseISO(date))) && (d === getDate(parseISO(date)))) {
        return "Today"
    }

    if ((day + 1 === getDay(parseISO(date))) && (d + 1 !== getDate(parseISO(date)))) {
        return 'Tomorrow'
    }

    return daysInWords[getDay(parseISO(date))]
}

export const computeDirectDay = (date) => {
    let dayNumber = getDate(parseISO(date))
    return `${dayNumber} ${monthInWords[getMonth(parseISO(date))].toLowerCase()}`
}

export const choiceIcon = (id) => {

    if (id === 'snow') {
        return 'snow'
    } else if (id === 'rain') {
        return 'rain'
    } else if (id === 'fog') {
        return 'fog'
    } else if (id === 'wind' || id === 'cloudy') {
        return 'mainly_cloudy'
    } else if (id === 'partly-cloudy-day' || id === 'partly-cloudy-night') {
        return 'small_rain_sun'
    } else if (id === 'clear-day' || id === 'clear-night') {
        return 'sun'
    }

    return 'mainly_cloudy'
}

export const computeTemperature = (temp) => {
    if (Math.round((temp - 32) * 5 / 9) > 0) {
        return `+${Math.round((temp - 32) * 5 / 9)}`
    } else {
        return Math.round((temp - 32) * 5 / 9)
    }
}

export function getDirection(angle) {
    let directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
    return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
}

export function measurePowerOfWind(speed) {
    if (speed < 3) {
        return 'light'
    } else if (speed < 7) {
        return 'small'
    } else if (speed < 10) {
        return 'average'
    } else if (speed < 15) {
        return 'hard'
    } else if (speed < 20) {
        return 'extreme'
    }
}

export function measureAmountOfRains(amount) {
    if (amount < 0.01) {
        return 'without precipitation'
    } else if (amount < 0.1) {
        return 'a few precipitation'
    } else if (amount < 0.3) {
        return 'low precipitation'
    } else if (amount < 0.6) {
        return 'medium precipitation'
    } else if (amount < 0.9) {
        return 'heavy precipitation'
    } else {
        return 'extreme precipitation'
    }
}