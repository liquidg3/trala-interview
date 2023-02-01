import { Contact, Fetch } from "../../ContactBookApi";

interface IApiFixture {
    lastUrl: string | undefined;
    fakedResponse: Contact[];
}
export const ApiFixture: IApiFixture = {
    lastUrl: undefined,
    fakedResponse: []
};
export const spyFetch: Fetch = async function (url: RequestInfo | URL, _options?: RequestInit): Promise<Response> {
    ApiFixture.lastUrl = url as string;
    const response = new Response();
    response.json = async () => ApiFixture.fakedResponse;
    return response;
};
