const navbar = [
    { text: "主页", link: "/" },
    {
        text: "兼容性列表",
        items: [
            { text: "硬件兼容性", link: "/list-hardwares" },
            { text: "LAT 兼容性", link: "/list-lat" },
            { text: "LibLOL 兼容性", link: "/list-liblol" },
        ],
    },
    {
        text: "更多文档",
        items: [
            { text: "硬件相关", link: "/hardwares/" },
            { text: "LAT 相关", link: "/lat/" },
            { text: "LibLOL 相关", link: "/liblol" },
            { text: "参与贡献", link: "/contribution" }
        ],
    },
]

export { navbar }