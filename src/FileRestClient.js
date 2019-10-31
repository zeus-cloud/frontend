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

        const rows = [];

        for (var i = 0; i < 100; i++) {
            if (i % 2 === 0) {
                rows.push(new Entity('Archivo' + i, 'Alejandro Bullrich', '17/07/2019', 24 + 'MB'));
            } else {
                rows.push(new Entity('Archivo' + i, 'Macarena Lui', '12/06/2019', 24 + 'MB'));
            }
        }

        return rows;
        //fetch('http://jsonplaceholder.typicode.com/users')
        //    .then(res => res.json())
    },

    getFile: function (value) {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    },

    uploadFile: function (fileData, fileName) {
        return fetch('http://172.19.0.60:8085/gato/folder', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
                    archivo: fileName,
                    buffer: {
                        type: "Buffer",
                        data: [fileData]
                    }
                }
            })
        })
    }
};

export default FileRestClient;