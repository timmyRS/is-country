# is-country

Returns true if your input is a country. Supports country name, ISO 3166-1 alpha-2, alpha-3, and numeric country codes.

## Usage

Run `npm i is-country` and then you can use this gloriously useful utility, as such:

    const isCountry = require("is-country");
    async function main()
    {
        console.log(await isCountry("DE")); // true
        console.log(await isCountry("XX")); // false
    }
    main();
