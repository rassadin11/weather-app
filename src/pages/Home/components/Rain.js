let nbDrop = 200;

function computePosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createRain() {
    let array = []
    let positions = []

    for (let i = 0; i < Math.floor(nbDrop / 2); i++) {
        let dropLeft = computePosition(0, document.body.clientWidth);
        let dropTop = computePosition(-1000, 1400);

        positions.push([dropLeft, dropTop])

        array.push(<div key={i} className="drop" id={`drop${i}`} style={{
            left: dropLeft + 'px',
            top: dropTop + "px"
        }}></div>)
    }

    for (let i = 0; i < Math.floor(nbDrop / 2); i++) {
        array.push(<div key={`${i + Math.floor(nbDrop / 2)} `} className="drop" id={`drop${i}`} style={{
            left: positions[i][0] + 'px',
            top: positions[i][1] - 1000 + "px"
        }}></div>)
    }

    return array
}