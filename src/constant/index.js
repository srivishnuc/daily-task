export const api = {
    url: 'http://localhost:8000',
}


export const validateData = (error) => {
    let valid = true;
    Object.values(error).forEach(val => val.length > 0 && (valid = false))
    return valid
}