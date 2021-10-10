import Mock from 'mockjs'
Mock.mock("api/table", "get", require("./TableData.json"))