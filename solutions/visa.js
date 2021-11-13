
const checkVisa = (number) => {
    const visaPattern = /4\d{15}/
    return number.match(visaPattern);
}

export default checkVisa;