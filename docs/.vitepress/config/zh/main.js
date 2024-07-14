import { defineConfig } from "vitepress";

import { navbar } from "./navbar";
import { sidebar_hardwares } from "./sidebar_hardwares";
import { sidebar_lat } from "./sidebar_lat";
import { sidebar_liblol } from "./sidebar_liblol";

export const zh = defineConfig({
    lang: "zh",
    title: "LoongArch 兼容性数据库",
    description: "适用于龙架构的兼容性数据网站",
    themeConfig: {
        outline: {
            label: "页面导航",
        },
        nav: navbar,
        sidebar: {
            "/hardwares/": [
                {
                    text: "硬件相关",
                    items: sidebar_hardwares,
                },
            ],
            "/lat/": [
                {
                    text: "LAT 相关",
                    items: sidebar_lat,
                },
            ],
            "/liblol/": [
                {
                    text: "LibLoL 相关",
                    items: sidebar_liblol,
                },
            ],
        }
    },
});

export const search_locales_zh = {
    placeholder: '搜索文档',
    translations: {
        button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
        },
        modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: '关闭',
            },
        },
    }
}