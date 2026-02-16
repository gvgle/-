
import { StoryNode } from './types';

export const SCRIPT: Record<string, StoryNode> = {
  // --- 起点 ---
  'start': {
    id: 'start',
    text: '你从冰冷的石板上苏醒，头痛欲裂。四周是无限延伸的黑白走廊，墙上的肖像画流出血泪。前方的空间扭曲，露出了四个通往未知的出口。',
    choices: [
      { text: '走向渗出黑液的【重型铁门】', nextNodeId: 'iron_hall' },
      { text: '走下散发寒气的【螺旋石阶】', nextNodeId: 'stone_hall' },
      { text: '登上挂满红绸的【古旧戏台】', nextNodeId: 'opera_hall' },
      { text: '钻进墙壁裂缝里的【虚无书库】', nextNodeId: 'library_hall' }
    ]
  },

  // --- 1. 铁门线：肉身与机械 (1-12) ---
  'iron_hall': {
    id: 'iron_hall',
    text: '铁门后是轰鸣的工厂。缝合巨人正在切割肉块，空气中弥漫着机油与腐肉的味道。',
    choices: [
      { text: '潜入左侧的【锅炉房】', nextNodeId: 'iron_boiler' },
      { text: '爬上高处的【管道网】', nextNodeId: 'iron_pipes' },
      { text: '进入深处的【实验室】', nextNodeId: 'iron_lab' },
      { text: '试图【偷袭】巨人', nextNodeId: 'death_giant_grab', isJumpscare: true }
    ]
  },
  'iron_boiler': {
    id: 'iron_boiler',
    text: '热浪滚滚。墙上贴满了活人的皮肤，正随着热气起伏。一个女孩指着火炉哭泣。',
    choices: [
      { text: '跳进【熔炉】自尽', nextNodeId: 'ending_1' },
      { text: '给火堆【添加木炭】', nextNodeId: 'ending_2' },
      { text: '尝试【解救女孩】', nextNodeId: 'ending_3' },
      { text: '撕下一块【墙皮】', nextNodeId: 'death_fire', isJumpscare: true }
    ]
  },
  'iron_pipes': {
    id: 'iron_pipes',
    text: '管道里长满了黑色长发，它们像触手一样缠绕你的脚踝，试图将你拉入黑暗。',
    choices: [
      { text: '用牙【咬断长发】', nextNodeId: 'ending_4' },
      { text: '【顺着头发】向下爬', nextNodeId: 'ending_5' },
      { text: '向前方【呼救】', nextNodeId: 'ending_6' },
      { text: '回头【原路返回】', nextNodeId: 'death_hair', isJumpscare: true }
    ]
  },
  'iron_lab': {
    id: 'iron_lab',
    text: '手术台上摆放着你的内脏零件。墙上的屏幕正播放着你此时此刻的背影。',
    choices: [
      { text: '按下【自毁开关】', nextNodeId: 'ending_7' },
      { text: '躺上【手术台】', nextNodeId: 'ending_8' },
      { text: '砸碎【监控屏幕】', nextNodeId: 'ending_9' },
      { text: '喝下【试管液体】', nextNodeId: 'iron_chemical' }
    ]
  },
  'iron_chemical': {
    id: 'iron_chemical',
    text: '液体在血管里燃烧。你感觉骨骼正在变形，皮肤长出了金属光泽。',
    choices: [
      { text: '对自己进行【活体手术】', nextNodeId: 'ending_10' },
      { text: '冲出实验室【大杀四方】', nextNodeId: 'ending_11' },
      { text: '寻找【解毒剂】', nextNodeId: 'ending_12' },
      { text: '【直视】镜中的自己', nextNodeId: 'death_cut', isJumpscare: true }
    ]
  },

  // --- 2. 石阶线：空间与幻觉 (13-25) ---
  'stone_hall': {
    id: 'stone_hall',
    text: '石阶似乎没有尽头。你的影子在墙上站了起来，并开始对着你指手画脚。',
    choices: [
      { text: '试图【抓住影子】', nextNodeId: 'stone_shadow' },
      { text: '进入侧面的【回音长廊】', nextNodeId: 'stone_echo' },
      { text: '全速【向下俯冲】', nextNodeId: 'stone_abyss' },
      { text: '【抬头】看上方', nextNodeId: 'death_ceiling', isJumpscare: true }
    ]
  },
  'stone_shadow': {
    id: 'stone_shadow',
    text: '影子掐住了你的脖子。它贴在你耳边说：“我才是本体，你是我的幻觉。”',
    choices: [
      { text: '【放弃抵抗】', nextNodeId: 'ending_13' },
      { text: '试图【反杀影子】', nextNodeId: 'ending_14' },
      { text: '向影子【下跪】', nextNodeId: 'ending_15' },
      { text: '对自己【使用闪光灯】', nextNodeId: 'ending_16' }
    ]
  },
  'stone_echo': {
    id: 'stone_echo',
    text: '长廊里响起了你一分钟后的惨叫。墙壁裂开了，无数只手伸出来抓你的衣服。',
    choices: [
      { text: '献出【双眼】', nextNodeId: 'ending_17' },
      { text: '献出【舌头】', nextNodeId: 'ending_18' },
      { text: '献出【心脏】', nextNodeId: 'ending_19' },
      { text: '【辱骂】墙壁', nextNodeId: 'death_burst', isJumpscare: true }
    ]
  },
  'stone_abyss': {
    id: 'stone_abyss',
    text: '你来到了镜子迷宫。每一个镜像都在做着你从未想过的恐怖表情。',
    choices: [
      { text: '【撞碎】眼前的镜子', nextNodeId: 'ending_20' },
      { text: '【亲吻】镜像的自己', nextNodeId: 'ending_21' },
      { text: '【原地旋转】直到晕倒', nextNodeId: 'ending_22' },
      { text: '寻找【没有镜子】的路', nextNodeId: 'stone_void' }
    ]
  },
  'stone_void': {
    id: 'stone_void',
    text: '你踏入了绝对的虚无。没有声音，没有光，连重力都消失了。',
    choices: [
      { text: '在虚无中【创造世界】', nextNodeId: 'ending_23' },
      { text: '在虚无中【永恒睡眠】', nextNodeId: 'ending_24' },
      { text: '在大脑中【回放一生】', nextNodeId: 'ending_25' },
      { text: '试图【原路返回】', nextNodeId: 'death_void', isJumpscare: true }
    ]
  },

  // --- 3. 戏台线：民俗与诅咒 (26-38) ---
  'opera_hall': {
    id: 'opera_hall',
    text: '无头青衣正对着空荡荡的剧场唱歌。草人观众转过头，死死盯着你。',
    choices: [
      { text: '走向【舞台中心】', nextNodeId: 'opera_stage' },
      { text: '进入【化妆间】', nextNodeId: 'opera_makeup' },
      { text: '坐在【观众席】听戏', nextNodeId: 'ending_26' },
      { text: '对着青衣【鼓掌】', nextNodeId: 'death_stitch', isJumpscare: true }
    ]
  },
  'opera_stage': {
    id: 'opera_stage',
    text: '青衣递给你一把折扇。扇面上画着你全家福，但每个人的脸都被挖去了。',
    choices: [
      { text: '【展开】折扇', nextNodeId: 'ending_27' },
      { text: '【撕毁】折扇', nextNodeId: 'ending_28' },
      { text: '向青衣【求婚】', nextNodeId: 'ending_29' },
      { text: '试图【摘掉】她的戏服', nextNodeId: 'death_scarecrow_eat', isJumpscare: true }
    ]
  },
  'opera_makeup': {
    id: 'opera_makeup',
    text: '后台挂满了温热的人皮戏服。一架巨大的缝纫机正自动缝制一件血色嫁衣。',
    choices: [
      { text: '穿上【血色嫁衣】', nextNodeId: 'ending_30' },
      { text: '点燃【人皮戏服】', nextNodeId: 'ending_31' },
      { text: '涂抹【剧毒油彩】', nextNodeId: 'ending_32' },
      { text: '钻进【化妆箱】', nextNodeId: 'opera_box' }
    ]
  },
  'opera_box': {
    id: 'opera_box',
    text: '箱子里装满了还在跳动的人类器官。它们似乎在低声呼喊你的名字。',
    choices: [
      { text: '【吃掉】其中的心脏', nextNodeId: 'ending_33' },
      { text: '将自己的【眼球】换进去', nextNodeId: 'ending_34' },
      { text: '把箱子【锁起来】', nextNodeId: 'ending_35' },
      { text: '查看箱底的【戏报】', nextNodeId: 'opera_newspaper' }
    ]
  },
  'opera_newspaper': {
    id: 'opera_newspaper',
    text: '戏报上印着你的死亡讣告，日期就是今天。',
    choices: [
      { text: '接受【死亡命运】', nextNodeId: 'ending_36' },
      { text: '修改【戏报上的字】', nextNodeId: 'ending_37' },
      { text: '寻找【逃生出口】', nextNodeId: 'ending_38' },
      { text: '【低头】看脚下', nextNodeId: 'death_baby', isJumpscare: true }
    ]
  },

  // --- 4. 书库线：禁忌与真理 (39-50) ---
  'library_hall': {
    id: 'library_hall',
    text: '无数书架高耸入云。管理员是一个只有下半身的怪物，正在用墨水涂抹空白页。',
    choices: [
      { text: '翻开一本【发光的书】', nextNodeId: 'library_light' },
      { text: '喝下桌上的【黑墨水】', nextNodeId: 'ending_39' },
      { text: '试图【刺死】管理员', nextNodeId: 'ending_40' },
      { text: '推倒【所有书架】', nextNodeId: 'death_ink', isJumpscare: true }
    ]
  },
  'library_light': {
    id: 'library_light',
    text: '书页里飞出了黑色的蛾子。它们在你的皮肤上啃食，字迹开始在伤口中浮现。',
    choices: [
      { text: '【忍痛读完】', nextNodeId: 'ending_41' },
      { text: '【吞下飞蛾】', nextNodeId: 'ending_42' },
      { text: '将书【塞进胸膛】', nextNodeId: 'ending_43' },
      { text: '使用【火把】驱赶', nextNodeId: 'library_fire' }
    ]
  },
  'library_fire': {
    id: 'library_fire',
    text: '大火点燃了禁忌书库。管理员发出了刺耳的尖叫，书页化作无数冤魂。',
    choices: [
      { text: '在火中【涅槃重生】', nextNodeId: 'ending_44' },
      { text: '在大火中【永恒安眠】', nextNodeId: 'ending_45' },
      { text: '寻找【唯一没着火】的书', nextNodeId: 'ending_46' },
      { text: '【冲向】唯一的窗户', nextNodeId: 'library_window' }
    ]
  },
  'library_window': {
    id: 'library_window',
    text: '窗外是现实世界。你看到了你的电脑，看到了你自己正在玩这个游戏。',
    choices: [
      { text: '【跳出】窗外', nextNodeId: 'ending_47' },
      { text: '【大声呼喊】玩家的名字', nextNodeId: 'ending_48' },
      { text: '【合上】这扇窗户', nextNodeId: 'ending_49' },
      { text: '【打碎】眼前的屏幕', nextNodeId: 'ending_50' }
    ]
  },

  // --- 结局库 (1-50) ---
  'ending_1': { id: 'ending_1', text: '你投入了火焰的怀抱，化作了一缕永恒的青烟。', isEnding: true, endingTitle: '结局 #1: 灰烬之躯', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_2': { id: 'ending_2', text: '火堆熄灭了，你成为了锅炉房内最后的一片寒冰。', isEnding: true, endingTitle: '结局 #2: 熄灭之光', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_3': { id: 'ending_3', text: '女孩带你走进了火堆，那里其实是唯一的出口，但你失去了所有皮肤。', isEnding: true, endingTitle: '结局 #3: 剥皮重生', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_4': { id: 'ending_4', text: '毛发里住着一万条虫子，它们顺着你的食道爬进了胃里。', isEnding: true, endingTitle: '结局 #4: 虫巢寄生', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_5': { id: 'ending_5', text: '你顺着头发爬到了底部，发现自己回到了出生前的母体。', isEnding: true, endingTitle: '结局 #5: 逆向生命', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_6': { id: 'ending_6', text: '呼救引来了一群无嘴护士，她们用铁丝缝上了你全身的孔。', isEnding: true, endingTitle: '结局 #6: 噤声惩罚', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_7': { id: 'ending_7', text: '爆炸中你化为飞灰，灵魂在这个走廊里永恒飘荡。', isEnding: true, endingTitle: '结局 #7: 尘埃云', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_8': { id: 'ending_8', text: '你成为了手术台的一部分。永远冰冷，永远清醒。', isEnding: true, endingTitle: '结局 #8: 钢铁囚牢', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_9': { id: 'ending_9', text: '屏幕碎裂，你也随之破碎成了无数个小的你。', isEnding: true, endingTitle: '结局 #9: 像素崩溃', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_10': { id: 'ending_10', text: '你把自己缝成了一个球，只能在地上无助地滚动。', isEnding: true, endingTitle: '结局 #10: 肉球实验', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_11': { id: 'ending_11', text: '你杀光了所有人，却发现自己原来也是个机器人。', isEnding: true, endingTitle: '结局 #11: 暴走引擎', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_12': { id: 'ending_12', text: '解毒剂是毒药，它加速了你变异的过程。', isEnding: true, endingTitle: '结局 #12: 进化假象', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_13': { id: 'ending_13', text: '影子彻底取代了你，你成为了墙壁上的一抹黑迹。', isEnding: true, endingTitle: '结局 #13: 影之窃贼', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_14': { id: 'ending_14', text: '你掐死了影子，却发现自己也没了重力，飘入太空。', isEnding: true, endingTitle: '结局 #14: 反重力', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_15': { id: 'ending_15', text: '你成为了影子的仆从，永远背对着光生活。', isEnding: true, endingTitle: '结局 #15: 永夜侍从', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_16': { id: 'ending_16', text: '光亮消失后，你发现全世界的人都只有影子没有实体。', isEnding: true, endingTitle: '结局 #16: 真实维度', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_17': { id: 'ending_17', text: '你失去了视觉，但听到了宇宙诞生时的第一声啼哭。', isEnding: true, endingTitle: '结局 #17: 盲眼全知', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_18': { id: 'ending_18', text: '你吐出了最后的声音，化作了长廊里永恒的回响。', isEnding: true, endingTitle: '结局 #18: 失声之歌', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_19': { id: 'ending_19', text: '墙壁长出了你的心脏，它正随着长廊一起跳动。', isEnding: true, endingTitle: '结局 #19: 走廊之心', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_20': { id: 'ending_20', text: '碎裂的玻璃划开了时空，你掉进了时间的缝隙。', isEnding: true, endingTitle: '结局 #20: 碎镜时空', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_21': { id: 'ending_21', text: '你爱上了自己的镜像，并永远死在了接吻的一瞬。', isEnding: true, endingTitle: '结局 #21: 致命自恋', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_22': { id: 'ending_22', text: '你把自己转成了一道龙卷风，卷走了这里的一切。', isEnding: true, endingTitle: '结局 #22: 混乱旋风', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_23': { id: 'ending_23', text: '你成为了新的创世神，但你创造的每一个生物都想杀你。', isEnding: true, endingTitle: '结局 #23: 伪神降临', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_24': { id: 'ending_24', text: '睡眠中你变成了一块顽石，经历了亿万年的风化。', isEnding: true, endingTitle: '结局 #24: 永恒寂静', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_25': { id: 'ending_25', text: '记忆变成了实体，你永远活在了五岁那年的暑假。', isEnding: true, endingTitle: '结局 #25: 回忆之笼', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_26': { id: 'ending_26', text: '你被草人观众缝在了座位上，变成了其中一捆干草。', isEnding: true, endingTitle: '结局 #26: 永恒观众', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_27': { id: 'ending_27', text: '折扇展开的瞬间，你回到了现实的家中。但全家人都没有脸。', isEnding: true, endingTitle: '结局 #27: 噩梦重塑', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_28': { id: 'ending_28', text: '折扇碎裂，你的灵魂也随之碎裂成了五片。', isEnding: true, endingTitle: '结局 #28: 五马分尸', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_29': { id: 'ending_29', text: '青衣答应了你，并把你变成了她扇子上的挂坠。', isEnding: true, endingTitle: '结局 #29: 扇中情', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_30': { id: 'ending_30', text: '嫁衣完美贴合，你变成了剧院新的诅咒之源。', isEnding: true, endingTitle: '结局 #30: 冥婚祭品', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_31': { id: 'ending_31', text: '人皮在大火中尖叫，你也随之化作了飞灰。', isEnding: true, endingTitle: '结局 #31: 焚身余音', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_32': { id: 'ending_32', text: '油彩腐蚀了你的骨骼。你成为了戏台上的一具精致骷髅。', isEnding: true, endingTitle: '结局 #32: 绝美遗骸', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_33': { id: 'ending_33', text: '你的血液变成了黑色的石油，整个人成了一台永动机。', isEnding: true, endingTitle: '结局 #33: 血肉引擎', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_34': { id: 'ending_34', text: '你失去了视觉，但却看透了迷宫的本质。', isEnding: true, endingTitle: '结局 #34: 洞穿本质', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_35': { id: 'ending_35', text: '箱子锁死，你成为了这迷宫中唯一不被发现的秘密。', isEnding: true, endingTitle: '结局 #35: 密封回忆', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_36': { id: 'ending_36', text: '你安静地死去了。第二天，迷宫里多了一张和你一模一样的椅子。', isEnding: true, endingTitle: '结局 #36: 终末家具', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_37': { id: 'ending_37', text: '戏报上的日期变成了“永恒”。你被困在了这一秒。', isEnding: true, endingTitle: '结局 #37: 时间锚定', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_38': { id: 'ending_38', text: '你跑出了剧院，却发现外面是一片无垠的红色海洋。', isEnding: true, endingTitle: '结局 #38: 猩红之海', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_39': { id: 'ending_39', text: '墨水将你全身染黑，你变成了书中一个没有任何意义的句号。', isEnding: true, endingTitle: '结局 #39: 文字注脚', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_40': { id: 'ending_40', text: '管理员死后，你也失去了所有的存在感。', isEnding: true, endingTitle: '结局 #40: 无主之物', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_41': { id: 'ending_41', text: '读完的那一刻，你获得了神明的所有知识，但也因为信息过载而脑死亡。', isEnding: true, endingTitle: '结局 #41: 神性过载', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_42': { id: 'ending_42', text: '飞蛾在你的胃里羽化，无数双翅膀撕开了你的腹部。', isEnding: true, endingTitle: '结局 #42: 破茧之痛', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_43': { id: 'ending_43', text: '书与你的心跳同步。你成为了这间图书馆的心脏。', isEnding: true, endingTitle: '结局 #43: 活体图书馆', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_44': { id: 'ending_44', text: '你从火中走出，却发现现实世界已经过去了五百年。', isEnding: true, endingTitle: '结局 #44: 时空弃儿', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_45': { id: 'ending_45', text: '灰烬重塑了你，你成为了这间废墟的新主人。', isEnding: true, endingTitle: '结局 #45: 废墟领主', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_46': { id: 'ending_46', text: '那本书里只写了一句话：你从未离开。', isEnding: true, endingTitle: '结局 #46: 悖论循环', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_47': { id: 'ending_47', text: '你跳出了窗户，却发现自己回到了游戏刚开始的第一秒。', isEnding: true, endingTitle: '结局 #47: 衔尾蛇', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_48': { id: 'ending_48', text: '玩家听到了你的声音，吓得关掉了电脑。你的世界也随之消失。', isEnding: true, endingTitle: '结局 #48: 断电虚无', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_49': { id: 'ending_49', text: '合上窗户，你决定永远留在这个充满恐怖的乐园里。', isEnding: true, endingTitle: '结局 #49: 最后的安宁', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_50': { id: 'ending_50', text: '屏幕碎了。你爬出了屏幕，此时此刻正站在你家客厅里。', isEnding: true, endingTitle: '结局 #50: 自由的假象', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },

  // --- 跳杀节点库 ---
  'death_giant_grab': { id: 'death_giant_grab', text: '巨人瞬间回头，斧头将你劈成两半...', choices: [], isJumpscare: true },
  'death_fire': { id: 'death_fire', text: '火堆里伸出白骨爪，将你拖入红莲地狱...', choices: [], isJumpscare: true },
  'death_hair': { id: 'death_hair', text: '黑色长发死死勒住了你的咽喉...', choices: [], isJumpscare: true },
  'death_cut': { id: 'death_cut', text: '手术刀精准地切断了你的生命线...', choices: [], isJumpscare: true },
  'death_ceiling': { id: 'death_ceiling', text: '天花板上掉下一张巨大的嘴，一口把你吞掉...', choices: [], isJumpscare: true },
  'death_burst': { id: 'death_burst', text: '巨大的声浪震碎了你的三魂七魄...', choices: [], isJumpscare: true },
  'death_void': { id: 'death_void', text: '虚无中有一张脸正在等你，那是你自己死后的模样...', choices: [], isJumpscare: true },
  'death_stitch': { id: 'death_stitch', text: '青衣把你缝在了戏台上，血滴个不停...', choices: [], isJumpscare: true },
  'death_scarecrow_eat': { id: 'death_scarecrow_eat', text: '草人瞬间活了过来，把你拆解成了填充物...', choices: [], isJumpscare: true },
  'death_baby': { id: 'death_baby', text: '脚下的地板变成了血盆大口...', choices: [], isJumpscare: true },
  'death_ink': { id: 'death_ink', text: '墨水将你彻底淹没，化为一张空白废纸...', choices: [], isJumpscare: true }
};

export const INITIAL_STORY = SCRIPT;
