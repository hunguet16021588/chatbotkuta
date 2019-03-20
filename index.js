const login = require("facebook-chat-api");
const axios = require("axios");
// Create simple echo bot
var i = 0;
login({ email: "0964055498", password: "Hbdc06031998-" }, (err, api) => {
    if (err) return console.error(err);
    api.listen((err, message) => {
        if (i == 0) {

            if (message.body != "#1" && message.body != "#2" && message.body != "#3" && message.body != "#4" && message.body != "#5")
                api.sendMessage("Haiiiii Hiện tôi đang k online facebook :)\nCheck list bên dưới để xem xem bạn có thể làm gì trong khi chờ đợi tôi phản hồi :D\n#1: Tôi sẽ rep bạn khi có thể, cảm ơn đã inbox.\n#2: Xem thêm thông tin về tôi :>\n#3: Gọi cho tôi ngay lập tức.\n#4 Nếu như bạn nhắn nhầm, tôi sẽ bỏ qua tin nhắn này và k rep nữa.\n#5 Nếu bạn chán, hãy #5 để nhắn tin với 1 người đặc biệt :))", message.threadID);
            if (message.body == "#1")
                api.sendMessage("Okkk, tôi sẽ rep bạn ngay khi có thể, cảm ơnnn", message.threadID);
            if (message.body == "#2") {
                api.sendMessage("Họ tên: Nguyễn Việt Hùng\nNgày sinh: 06/03/1998\nCung hoàng đạo: Song ngư\nTình trạng quan hệ: ???\nChiều cao: ???\nCân nặng: ???\n:)", message.threadID);
            }
            //api.sendMessage("hùng chưa có ny nha hihi", message.threadID);
            if (message.body == "#3")
                api.sendMessage("0987086398\nSố đấy, gọi đi", message.threadID);
            if (message.body == "#4")
                api.sendMessage("Ok fine :)", message.threadID);
            if (message.body == "#5") {
                i = 1;
                api.sendMessage("Ô hai ô yo kai ta, i am Kuta con của Kudo cùng trò chuyện nào :>>\n#pp để thoát khỏi kuta :)\n Chào!!", message.threadID);
            }
        }
        if (i == 1 && message.body != "#5") {
            if (message.body == "#pp") {
                i = 0;
                api.sendMessage("Bye :( Cam xa mi ta, hẹn gặp lại", message.threadID);
            } else {
                axios.get('http://api.minhhieu.asia/vi.php', { params: { text: message.body } }).then(response => {
                    api.sendMessage(response.data, message.threadID);
                })
            }
        
        }
    });
});