class Entity {
    constructor(name, owner, lastModification, fileSize) {
        this.name = name;
        this.owner = owner;
        this.lastModification = lastModification;
        this.fileSize = fileSize;
    }
}

const FileRestClient = {
    getAllFiles: function (uid) {

        return fetch(`http://10.30.129.72/${uid}/folder`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    },

    getFile: function (value) {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    },

    uploadFile: function (fileData, fileName) {

        const bufferDto = {
            type: "Buffer",
            data: new Int8Array(fileData)
        };

        let jsonObject = {
            postMongo: {
                directory: [{
                    logical_path: "./test.txt"
                }],
                shared: [],
                _id: "5db8bb333a9f7335c4d91373",
                user: "5db8bb333a9f7335c4d91372",
                __v: 0
            },
            stream: {
                originalname: fileName,
                buffer: bufferDto
            }
        };

        console.log(jsonObject);

        return fetch('http://10.30.129.72/gato/folder', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: jsonObject
        })
    }
};

export default FileRestClient;