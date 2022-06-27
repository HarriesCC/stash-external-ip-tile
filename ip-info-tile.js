$httpClient.get("http://ip-api.com/json/", function (error, response, data) {
    const result = JSON.parse(data)
    let content =  result.as + "\r\n" + result.query
    $done({
        title: "当前 IP 地址",
        content: content,
        backgroundColor: "#663399",
        icon: "network",
    })
})
