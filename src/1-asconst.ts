function request(obj: { url: string; method: "GET" | "POST" | "GUESS" }) {}
const funcObj = {
  url: "https://www.baidu.com",
  method: "GET" as const,
}

request({ url: funcObj.url, method: funcObj.method })
