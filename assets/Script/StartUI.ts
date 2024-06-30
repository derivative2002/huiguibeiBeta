import HuiguiData from "./HuiguiData"; // 导入回归数据模块
import Main from "./Main"; // 导入主模块

const {ccclass, property} = cc._decorator; // 解构装饰器

@ccclass
export default class StartUI extends cc.Component {

    @property(cc.EditBox)
    txtPlayerName: cc.EditBox = null; // 玩家名称输入框
    
    // @property(cc.Button)
    // btnGuantu:cc.Button = null; // 官图按钮
    // @property(cc.Button)
    // btnZhengjiu:cc.Button = null; // 拯救按钮
    // @property(cc.Button)
    // btnDanshua:cc.Button = null; // 单刷按钮
    // @property(cc.Button)
    // btnShuangda:cc.Button = null; // 双打按钮

    onStart() {
        // 开始时执行的逻辑
    }

    onGuantuClick() {
        // 官图点击事件处理
        HuiguiData.initGuantuData(this.txtPlayerName.string, false); // 初始化官图数据，普通模式
        this.node.parent = null; // 移除当前节点的父节点
        Main.instance.toGuantu(); // 切换到官图场景
    }

    onGuantuTiaozhanClick() {
        // 官图挑战点击事件处理
        HuiguiData.initGuantuData(this.txtPlayerName.string, true); // 初始化官图数据，挑战模式
        this.node.parent = null; // 移除当前节点的父节点
        Main.instance.toGuantu(); // 切换到官图场景
    }
}
