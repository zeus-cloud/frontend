const FileRestClient = {
    getAllFiles: function (uid) {

        return fetch(`http://localhost:8085/${uid}/folder`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(unprocessedResponse => unprocessedResponse.json())
    },

    getFile: function (value) {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    },

    uploadFile: function (fileData, fileName) {

        const fileDataArray = Array.prototype.slice.call(new Int8Array(fileData));

        const bufferDto = {
            type: "Buffer",
            data: fileDataArray
        };

        let jsonObject = {
            postMongo: {
                directory: [{
                    logical_path: fileName
                }],
                shared: [],
                _id: "5dc1990691f92a1ebad703c1",
                user: "5dc1990691f92a1ebad703c0",
                __v: 0
            },
            stream: {
                originalname: fileName,
                buffer: bufferDto
            }
        };

        return fetch('http://localhost:8085/gato/folder', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonObject)
        })
    }
};

export default FileRestClient;