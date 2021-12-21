export const renderPositionX = () => {
    return Math.floor(Math.random() * getWindowDimensions().width)
}

export const renderPositionY = () => {
    return Math.floor(Math.random() * getWindowDimensions().height)
}

export const getWindowDimensions = () => {
    let { innerWidth: width, innerHeight: height } = window;
    width -= 25
    height -= 25

    return { width, height };
}

export const renderDelay = (idx) => {
    if (idx * 0.05 < 1) {
        return `0.${idx * 0.01}`;
    }

    return idx * 0.01
}