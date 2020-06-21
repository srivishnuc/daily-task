const isLocalHost = window.location.href.includes('localhost');

export const api = {
    url: isLocalHost ? 'http://localhost:8000' : 'https://dailytask0.herokuapp.com'
}




export const validateData = (error) => {
    let valid = true;
    Object.values(error).forEach(val => val.length > 0 && (valid = false))
    return valid
}