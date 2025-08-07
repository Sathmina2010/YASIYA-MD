const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~1NYEhIjb#9tvS8vvaEoSM_9RV3fBC7UPCQK9P7Y_z8J3jiRj9QuI'
};
