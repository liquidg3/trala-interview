import { Contact } from "../../ContactBookApi";
import { generateRandomString } from "../ContactBookApi.test";

export function generateDummyContact(): Contact {
    return {
        id: generateRandomString(),
        first_name: generateRandomString(),
        last_name: generateRandomString(),
        birth_date: generateRandomString(),
        middle_initial: generateRandomString(),
        country_code: generateRandomString(),
        email: generateRandomString(),
        phone_number: generateRandomString(),
    };
}
