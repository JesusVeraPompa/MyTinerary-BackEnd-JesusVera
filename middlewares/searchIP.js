// Middlewares para saber la Ubicacion de donde realizan la consulta HTTP

function searchIP(req, res, next) {
    fetch('https://api.ipify.org?format=json')
        .then((response) => response.json())
        .then((data) => {
            console.log('Consulta desde dirección IP:', data)
            fetch(`https://api.ipstack.com/${data.ip}?access_key=2123c969cbfc1d86d8cf755c399ce8af`)
                .then((response2) => response2.json())
                .then((data2) => {
                    console.log('Continente: ', data2.continent_name)
                    console.log('Pais: ', data2.country_name)
                    console.log('Region: ', data2.region_name)
                    console.log('Cuidad: ', data2.city)
                    
                    const zeroPad = (val) => val.toString().padStart(2, '0')
                    let odate = new Date()
                    let year = odate.getFullYear()
                    let month = zeroPad(odate.getMonth() + 1)
                    let day = zeroPad(odate.getDate())
                    let hour = zeroPad(odate.getHours())
                    let mins = zeroPad(odate.getMinutes())

                    console.log(
                        'Fecha y Hora: ',
                        day + '/' + month + '/' + year + ' - ' + hour + ':' + mins
                    )
                })
                .catch((error2) => console.error('Hubo un error al obtener la IP:', error2))
        })
        .catch((error) => console.error('Hubo un error al obtener la IP:', error))
    next()
}

export default searchIP
