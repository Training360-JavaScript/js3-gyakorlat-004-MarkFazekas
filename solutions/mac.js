const checkMac = (address) =>{
    //https://stackoverflow.com/a/51341697/4883952
    const pattern = /([\da-f]{2}[:-]){5}[\da-f]{2}/i
    return address.match(pattern);
}

export default checkMac;