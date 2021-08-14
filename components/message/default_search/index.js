const googleIt = require("google-it");

class Search {
  constructor() {
    this.options = {
      query: "",
      includeSites: "",
      limit: 1,
      disableConsole: true,
    };
  }

  query(query) {
    this.options.query = query;
  }

  target(target) {
    this.options.includeSites = target;
  }

  limit(limit) {
    this.options.limit = limit;
  }

  async result() {
    return await googleIt(this.options);
  }
}

async function main() {
  let search = new Search();
  search.query("teste");

  let result = await search.result();
  console.log(result);
}

main();
