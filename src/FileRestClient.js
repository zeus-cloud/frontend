const FileRestClient = {
    fileRestStore: {
        files: [],
        error: false,
        errorMessage: ""
    },

    getAllFiles: function (uid) {

        return fetch(`http://35.228.209.99:8085/${uid}/folder`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(unprocessedResponse => unprocessedResponse.json())
            .then(response => {
                if (response.data !== null) {
                    if (response.data[0].directory.length > 0 && response.errors.length === 0) {
                        response.data[0].directory.forEach(file => this.fileRestStore.files.push(file));
                    } else if (response.data[0].directory.length === 0 && response.errors.length === 0) {
                        this.fileRestStore.error = true;
                        this.fileRestStore.errorMessage = "No existen archivos cargados para este usuario.";
                    } else {
                        this.fileRestStore.error = false;
                        this.fileRestStore.errorMessage = "";
                    }

                    if (response.errors.length > 0) {
                        console.error(response.errors[0].message);
                        this.fileRestStore.error = true;
                        this.fileRestStore.errorMessage = "No se pudieron traer los archivos de la base de datos. Por favor, intente más tarde.";
                    }
                }
                return this.fileRestStore;
            });
    },

    downloadFile: function (file) {
        return fetch(`http://35.228.209.99:8085/gato/folder/${file.name}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";

                var blob = new Blob([new Int8Array(response.data[0].buffer.data)], {type: "octet/stream"}),
                    url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = file.name;
                a.click();
                window.URL.revokeObjectURL(url);
            }).catch(e => alert('Unexpected error, please try again. ' + e));
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
        this.fileRestStore.files.push({logical_path: fileName});

        let jsonObject = {
            postMongo: {
                directory: this.fileRestStore.files,
                shared: [],
                _id:  "5dd2c0e576ca405517e9e9aa",
                user: "5dd2c0e476ca40faeae9e9a9",
                __v: 0
            },
            stream: {
                originalname: fileName,
                buffer: bufferDto
            }
        };

        return fetch('http://35.228.209.99:8085/gato/folder', {
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
