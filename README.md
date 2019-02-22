# is-country

Returns true if your input is a country. Supports country name, ISO 3166-1 alpha-2, alpha-3, and numeric country codes.

## Usage

Run `npm i is-country` and then you can use this gloriously useful utility, as such:

    const isCountry = require("./index.js");
    async function main()
    {
        console.log(await isCountry("DE"));
        console.log(await isCountry("XX"));
    }
    main();
