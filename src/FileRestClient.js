class Entity {
    constructor(name, owner, lastModification, fileSize) {
        this.name = name;
        this.owner = owner;
        this.lastModification = lastModification;
        this.fileSize = fileSize;
    }
}

const FileRestClient = {
    getAllFiles: function(uid) {

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

    getFile: function(value) {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
    }
};

export default FileRestClient;