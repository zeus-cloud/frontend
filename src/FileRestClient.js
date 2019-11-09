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
                    if (response.data.length > 0) {
                        response.data[0][0].directory.forEach(file => this.fileRestStore.files.push(file));
                    }

                    if (response.errors.length > 0) {
                        console.error(response.errors[0].message);
                        this.fileRestStore.error = true;
                        this.fileRestStore.errorMessage = "No se pudieron traer los archivos de la base de datos. Por favor, intente más tarde.";
                    } else {
                        this.fileRestStore.error = false;
                        this.fileRestStore.errorMessage = "";
                    }
                }
                return this.fileRestStore;
            });
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
        this.fileRestStore.files.push({ logical_path: fileName });

        let jsonObject = {
            postMongo: {
                directory: this.fileRestStore.files,
                shared: [],
                _id:  "5dc01196c7064e2ef052083b",
                user: "5dc01196c7064e2a7152083a",
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
