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

        const rows = [
            new Entity('Archivo0', 'Alejandro Bullrich', '17/07/2019', 24 + 'MB'),
            new Entity('Archivo1', 'Macarena Lui', '12/06/2019', 24 + 'MB'),
        ];

        for (var i = 0; i < 100; i++) {
            rows.push(new Entity('Archivo0', 'Alejandro Bullrich', '17/07/2019', 24 + 'MB'));
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