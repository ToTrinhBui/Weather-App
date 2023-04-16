export  function formatIconTime(string) {
    let time = string.charAt(2)
    if (time === 'n')
        return 'night'
    else return 'day'
}

export  function formatIconMain(string) {
    let id = string.substring(0, 2)
    if (id === '01') {
        return 'Sun'
    }
    else if (id === '09' || id === '10') {
        return 'Rain'
    }
    else if (id === '11') {
        return 'Storm'
    }
    else if (id === '13') {
        return 'Snow'
    }
    else {
        return 'Clouds'
    }
}