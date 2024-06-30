// 定义一个名为 MatchData 的类，用于存储和管理比赛数据
export default class MatchData {
    index: number; // 比赛的索引或编号
    cmd1: string; // 第一个指挥官的名称
    isShuang: boolean; // 标识是否为双打比赛
    cmd2: string; // 第二个指挥官的名称，仅在双打比赛中使用
    map: string; // 比赛使用的地图名称
    factorCount: number; // 比赛中使用的因素数量
    factors: string[]; // 比赛中使用的具体因素列表
    race: string; // 参赛的种族
    guantuName: string; // 关卡名称

    result: number; // 比赛结果，通常为数字代码表示胜负或其他状态

    // 构造函数，用于初始化 MatchData 实例
    constructor(index: number, isShuang: boolean, factorCount: number) {
        this.index = index; // 设置比赛索引
        this.isShuang = isShuang; // 设置是否为双打
        this.factorCount = factorCount; // 设置因素数量
        this.factors = new Array(factorCount).fill(null); // 初始化因素数组，根据提供的数量填充为 null
    }
}
