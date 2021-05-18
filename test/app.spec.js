const app = require('../src/app');

describe('App', () => {

    it(`responds with 401 Unauthorized for GET /`, () => {
        return supertest(app)
            .get('/')
            .expect(401, { error: 'Unauthorized request' })
    });

    it('GET / responds with 200 containing "Hello, Bookmarks!"', () => {
        return supertest(app)
            .get('/')
            .set('Authorization', `Bearer ${process.env.API_TOKEN}`)
            .expect(200, 'Hello, Bookmarks!');
    });
});