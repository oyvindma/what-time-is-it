exports.handler = async (event) => {
    
    var options = {
    timeZone: 'Europe/Stockholm',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
    };
    
    const response = {
        statusCode: 200,
        body: (new Date()).toLocaleTimeString([], options),
    };
    return response;
};
