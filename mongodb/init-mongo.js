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

db = new Mongo().getDB("testDB");

db.createCollection('departments', { capped: false });
db.createCollection('employers', { capped: false });