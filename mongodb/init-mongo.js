db.createUser({
    user: 'user',
    pwd: 'password',
    roles: [
        {
            role: 'readWrite',
            db: 'testDB',
        },
    ],
});

db = new Mongo().getDB("testDB")