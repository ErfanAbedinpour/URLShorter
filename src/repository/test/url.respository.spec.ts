import assert from 'node:assert'
import { mock, test } from 'node:test'
import { UrlRepository } from '../url.repository'
import { Client } from 'pg';

test("should be created new Url", async () => {
    const mockPgClient = {
        query: mock.fn((query, config) => ({ rows: ["test"] }))
    }

    const repository = new UrlRepository(mockPgClient as unknown as Client);
    const res = await repository.create({ id: 1234, longUrl: "TestUrl", shortUrl: 'testUrl' })
    assert.strictEqual(res, "test")
    assert.strictEqual(mockPgClient.query.mock.callCount(), 1)
})

test("should be catch Error in create ", async () => {
    const mockPgClient = {
        query: mock.fn((query, config) => {
            throw new Error("fail create")

        })
    }
    const repository = new UrlRepository(mockPgClient as unknown as Client);
    assert.rejects(repository.create({ id: 1234, longUrl: "", shortUrl: "" }), Error("fail create"))

})

test("should be catch Error in find", async () => {
    const mockPgClient = {
        query: mock.fn((query, config) => {
            throw new Error("fail to find")

        })
    }
    const repository = new UrlRepository(mockPgClient as unknown as Client);
    assert.rejects(repository.findWithLongUrl("fake-url"), Error("fail to find"))

})
test("should be return longUrl", async () => {
    const mockPgClient = {
        query: mock.fn((query, config) => ({ rows: ["test2"] }))
    }

    const repository = new UrlRepository(mockPgClient as unknown as Client);
    const res = await repository.findWithLongUrl("longUrl")
    assert.strictEqual(res, 'test2')
})
