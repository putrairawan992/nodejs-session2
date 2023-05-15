const multer = require("multer");

exports.storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './public');
    },
    filename: function (request, file, callback) {
        var temp_file_arr = file.originalname.split(".");

        var temp_file_name = temp_file_arr[0];

        var temp_file_extension = temp_file_arr[1];

        callback(null, temp_file_name + '-' + Date.now() + '.' + temp_file_extension);
    }
});

