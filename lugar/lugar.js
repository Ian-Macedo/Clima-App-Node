const getLatLon = async(dir) => {
    const encodedURL = encodeURI(dir);
    const NodeGeocoder = require('node-geocoder');

    let geoCoder = NodeGeocoder(options = {
        provider: 'mapquest',
        apiKey: 'yFx1DWkR3S9I4yRewJBitqhxAa9Gq1KK'
    });

    const resp = await geoCoder.geocode(encodedURL);

    if (resp.length === 0)
        throw new Error(`No hay resultados para ${dir}`);

    const data = resp[0];
    const direccion = data.formattedAddress;
    const lat = data.latitude;
    const lon = data.longitude;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLatLon
}