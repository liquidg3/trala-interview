import ContactBookApi, { Fetch } from "../ContactBookApi"
import { LIST_CONTACTS_URL } from "./LIST_CONTACTS_URL"
import { generateDummyContact } from "./support/generateDummyContact"
import { spyFetch, ApiFixture } from "./support/spyFetch"

type SpyContactBookApi = ContactBookApi & {
    fetch: Fetch
}

let api = ContactBookApi.getInstance(spyFetch) as SpyContactBookApi

beforeEach(() => {
    ContactBookApi.reset()
    api = ContactBookApi.getInstance(spyFetch) as SpyContactBookApi
    ApiFixture.fakedResponse = []
})


test('api returns instance of api', async () => {
    expect(api).toBeInstanceOf(ContactBookApi)
})

test('can set fetch utility', async () => {
    expect(api.fetch).toEqual(spyFetch)
})

test('api uses baked in fetch by default', () => {
    ContactBookApi.reset()
    api = ContactBookApi.getInstance() as SpyContactBookApi
    expect(api.fetch).toEqual(ContactBookApi.defaultFetch)
})

test('can list contacts', async () => {
    const contacts = await api.listContacts()
    expect(contacts).toEqual([])
})

test('listing contacts hits expected endpoint', async () => {
    await api.listContacts()
    expect(ApiFixture.lastUrl).toEqual(LIST_CONTACTS_URL)
})

test('listing contacts returns contacts', async () => {
    ApiFixture.fakedResponse = [
        generateDummyContact()
    ]

    const contacts = await api.listContacts()
    expect(contacts).toEqual(ApiFixture.fakedResponse)
})

test('get instance returns same instance', () => {
    const api = ContactBookApi.getInstance()
    const api2 = ContactBookApi.getInstance()
    expect(api).toEqual(api2)
})

export function generateRandomString(): string {
    return `${new Date().getTime() * Math.random()}`
}
