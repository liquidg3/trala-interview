export type Fetch = typeof fetch;
export default class ContactBookApi {

    protected fetch: Fetch;
    private static instance: ContactBookApi | undefined;
    public static defaultFetch = window.fetch.bind(window);

    protected constructor(f: Fetch) {
        this.fetch = f;
    }

    public static getInstance(f?: Fetch): ContactBookApi {
        if (!this.instance) {
            this.instance = new this(f ?? this.defaultFetch);
        }
        return this.instance
    }

    public async listContacts(): Promise<Contact[]> {
        const results = await this.fetch('https://address-book.trala.com:8080/v1/contacts')
        const json = await results.json()
        return json
    }

    public static reset() {
        this.instance = undefined
    }
}


export interface Contact {
    id: string
    email: string
    first_name: string
    middle_initial: string
    last_name: string
    birth_date: string
    country_code: string
    phone_number: string
}