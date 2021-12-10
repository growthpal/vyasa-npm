const { default: axios } = require("axios")

let apiEndpoint, apiKey

exports.setKey = async (key) => { apiKey = key }

exports.setEndpoint = async (endpoint) => { apiEndpoint = endpoint }

exports.logger = async (logData) => {
    let data = JSON.stringify(logData);
    let options = {
        method: 'post',
        url: `${apiEndpoint}/logger`,
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
        },
        data: data
    };
    try {
        await axios(options);
    }
    catch (error) {
        console.log(error);
    }
} 