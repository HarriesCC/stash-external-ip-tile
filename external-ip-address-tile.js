$httpClient.get("http://ip-api.com/json/", function (error, response, data) {
    let content =  data["as"] + "\r\n" + data["query"]
    $done({
        title: "当前 IP 地址",
        content: content,
        backgroundColor: "#663399",
        icon: "network",
    })
})
