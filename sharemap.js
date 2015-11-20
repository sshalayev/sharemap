
function drawShareMap() {

    $("#node_layer").empty(); //clear the layer with interactive elements

    var share_map = JSON.parse($("#sm_data").val());
    var node_layer = document.getElementById("node_layer");

    //pen and check icons from SVG
    var check = new Path2D("M12.8 371.2c-12.8 12.8-12.8 44.8 0 57.6l102.4 102.4c12.8 12.8 44.8 12.8 57.6 0l166.4-166.4c12.8-12.8 44.8-12.8 57.6 0l454.4 454.4c12.8 12.8 44.8 19.2 57.6 0l102.4-102.4c12.8-12.8 19.2-44.8 0-57.6l-550.4-556.8c-12.8-12.8-44.8-32-70.4-32h-51.2c-25.6 0-51.2 12.8-70.4 32l-256 268.8z");
    var pen = new Path2D("M1024 711.314l-248.686 248.686-658.286-658.286-117.029-365.714 365.714 117.029 658.286 658.286zM87.771 23.771l80.457 248.686 168.229-168.229-248.686-80.457z");

    var canvas = document.getElementById("sm");
    var ctx = canvas.getContext("2d");
    var default_avatar = "avatars/default.png";
    var color = {
        nodetop: "#FFFFFF",
        nodebot: "#47cc9e",
        nodeact: "#ffac26",
        nodecurr: "#fc4051",
        dlink: "#b6bbbf",
        ulink: "#47cc9e",
        dlink_p: "rgba(182, 187, 191, 0.5)",
        ulink_p: "rgba(71, 204, 58, 0.5)",
        inactive: "#d5d9dc",
        lane_p: "#4c5b71",
        lane_cur: "#0f1b26",
        lane_ch: "#dfe3e6",
        txt: "#000000"
        };
    var col_width = 80;
    var lanes = {
        parent: {
            color: color.lane_p,
            height: 44
        },
        current: {
            color: color.lane_cur,
            height: 80
        },
        child: {
            color: color.lane_ch,
            height: 50
        }
    };

    //return team state according to the last event state
    //true - current, no activities pending; false - in progress
    function getTeamState(team){
        var res = [];
        share_map.actions.map(function(v){
           if (v.to == team || v.from == team){
               res.push(v.state);
           }
            return v;
        });
        var res_str = res.pop();
        if (res_str == "normal" || res_str == "connected"){
            return true;
        }
        else {
            return false;
        }
    }

    //transform team and version to actual X and Y on sharemap
    function teamToY(team) {
        var ypos = 0;
        for (var i = 0; i < share_map.teams.length; i++) {
            if (share_map.teams[i].id == team){
                return ypos + lanes[share_map.teams[i].role].height/2;
            }
            ypos += lanes[share_map.teams[i].role].height;
        }
    }

    function versionToX(version) {
        return canvas.width - (version*col_width) + (col_width/2);
    }

    function drawNode(x, y, style, content) {

        content = content || "";

        switch(style) {

            case "ignored":
                ctx.save();
                ctx.fillStyle = color.dlink;
                ctx.beginPath();
                ctx.arc(x,y,10,0,Math.PI*2);
                ctx.fill();
                ctx.restore();
                break;

            case "pending":
                ctx.save();
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = color.nodeact;
                ctx.beginPath();
                ctx.arc(x,y,16,0,Math.PI*2);
                ctx.fill();

                ctx.fillStyle = color.nodetop;
                ctx.beginPath();
                ctx.arc(x,y,10,0,Math.PI*2);
                ctx.fill();
                ctx.restore();
                break;

            case "opened":
                ctx.save();
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = color.nodetop;
                ctx.beginPath();
                ctx.arc(x,y,16,0,Math.PI*2);
                ctx.fill();

                ctx.fillStyle = color.nodeact;
                ctx.setTransform(0.015,0,0,-0.015,x-7,y+7);
                ctx.fill(pen);
                ctx.restore();
                break;

            case "connected":
                ctx.save();
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = color.nodetop;
                ctx.beginPath();
                ctx.arc(x,y,16,0,Math.PI*2);
                ctx.fill();

                ctx.fillStyle = color.nodebot;
                ctx.setTransform(0.015,0,0,-0.015,x-7,y+7);
                ctx.fill(check);
                ctx.restore();
                break;

            default:
                ctx.save();
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = color.nodebot;
                ctx.beginPath();
                ctx.arc(x,y,16,0,Math.PI*2);
                ctx.fill();

                ctx.fillStyle = color.nodetop;
                ctx.beginPath();
                ctx.arc(x,y,10,0,Math.PI*2);
                ctx.fill();
                ctx.restore();
                ctx.font = "12px Arial";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                ctx.fillText(content, x, y);
                break;
        }
    }

    function connectNodes(from_team, to_team, version, dir) {
        var fx, fy, tx, ty;
        var radius = 10;

        fy = teamToY(from_team);
        ty = teamToY(to_team);

        if (dir == "down_from_me") {
            fx = versionToX(version);
            tx = fx - col_width/2;

            ctx.save();
            ctx.strokeStyle = color.dlink;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(fx, ty-radius);
            ctx.quadraticCurveTo(fx, ty, fx-radius, ty);
            ctx.lineTo(tx,ty);
            ctx.stroke();
            ctx.restore();
        }
        else if (dir == "up_to_me") {
            tx = versionToX(version);
            fx = tx + col_width/2;

            ctx.save();
            ctx.strokeStyle = color.ulink;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(tx+radius, fy);
            ctx.quadraticCurveTo(tx, fy, tx, fy-radius);
            ctx.lineTo(tx,ty);
            ctx.stroke();
            ctx.restore();
        }
        else if (dir == "up_to_me_pending"){
            fx = versionToX(version) - col_width/2;
            tx = versionToX(version + 1);
            ty = fy - (lanes.child.height/4);

            ctx.save();
            ctx.strokeStyle = color.dlink;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(tx+radius, fy);
            ctx.quadraticCurveTo(tx, fy, tx, fy-radius);
            ctx.lineTo(tx,ty);
            ctx.stroke();
            ctx.fillStyle = color.nodeact;
            ctx.beginPath();
            ctx.arc(tx,ty,6,0,Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
        else if (dir == "down_to_me") {
            tx = versionToX(version);
            fx = tx + col_width/2 - 10;

            ctx.save();
            ctx.strokeStyle = color.dlink_p;
            ctx.fillStyle = color.dlink_p;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(fx, ty-radius);
            ctx.quadraticCurveTo(fx, ty, fx-radius, ty);
            ctx.lineTo(tx,ty);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(fx,fy-6,6,0,Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
        else if (dir == "up_from_me") {
            fx = versionToX(version);
            tx = fx - col_width/2 + 10;

            ctx.save();
            ctx.strokeStyle = color.ulink_p;
            ctx.fillStyle = color.ulink_p;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(tx+radius, fy);
            ctx.quadraticCurveTo(tx, fy, tx, fy-radius);
            ctx.lineTo(tx,ty);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(tx,ty-6,6,0,Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
    }

    //draw straight line connection
    function drawConn(fx,fy,tx,ty,color) {

        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(tx, ty);
        ctx.stroke();
    }
    //MAIN PART STARTS HERE

    //define current team
    var current_team = share_map.teams.filter(function(val){
        return val.role == "current";
    }).pop();

    //calculate and set canvas and node_layer dimensions
    var can_height = 0;
    for (var i = 0; i < share_map.teams.length; i++) {
        can_height += lanes[share_map.teams[i].role].height;
    }
    canvas.height = can_height;
    node_layer.style.height = can_height;
    canvas.width = share_map.versions.length * col_width + 300;
    node_layer.style.width = canvas.width;

    console.log(share_map.actions);
    console.log(share_map.versions);

    //draw the lanes
    var lane_pos = 0;
    for (var i = 0; i < share_map.teams.length; i++) {
        ctx.save();

        switch (share_map.teams[i].role){
            case "parent":
                break;
            case "current":
                ctx.shadowOffsetY = -2;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                break;
            case "child":
                ctx.shadowOffsetY = -1;
                ctx.shadowBlur = 2;
                ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
                break;
            default:
                break;
        }

        ctx.fillStyle = lanes[share_map.teams[i].role].color;
        ctx.fillRect(0, lane_pos, canvas.width, lanes[share_map.teams[i].role].height);
        ctx.restore();
        lane_pos += lanes[share_map.teams[i].role].height;
    }

    //draw columns with dates
    for (var i = 0; i < share_map.versions.length; i++){
        var ver_date = new Date(share_map.versions[i].date);
        var d = ver_date.getMonth().toString() + "/" + ver_date.getDate().toString() + "/" + ver_date.getFullYear().toString();
        console.log(ver_date,d);
        i = parseInt(i);
        ctx.save();
        ctx.strokeStyle = color.lane_p;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(canvas.width - ((i + 1) * col_width), teamToY(current_team.id) - (lanes.current.height/2));
        ctx.lineTo(canvas.width - ((i + 1) * col_width), teamToY(current_team.id) + (lanes.current.height/2));
        ctx.stroke();

        ctx.fillStyle = color.nodetop;
        ctx.font = "11px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.beginPath();
        ctx.fillText(d, canvas.width - ((i+1) * col_width) + (col_width/2), teamToY(current_team.id) - (lanes.current.height/4) - 6);
        ctx.restore();
    }

    //draw user column
    ctx.save();
    ctx.strokeStyle = color.lane_p;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(300,teamToY(current_team.id) - (lanes.current.height/2));
    ctx.lineTo(300, canvas.height);
    ctx.stroke();
    ctx.restore();

    var avatars = [];
    for (var i = 0; i < share_map.teams.length; i++){
        var y = teamToY(share_map.teams[i].id);
        var img_src = share_map.teams[i].ownerUser.avatar;
        if (img_src == null) img_src = default_avatar;

        (function(_i, _y){
            var ypos = _y - 18;
            avatars[_i] = new Image();
            avatars[_i].src = img_src;
            avatars[_i].onload = function() {
                ctx.drawImage(avatars[_i], 32, ypos);
            };
        })(i, y);


        if (share_map.teams[i].role == "child"){
            ctx.save();
            ctx.fillStyle = getTeamState(share_map.teams[i].id) ? color.nodebot : color.nodeact;
            ctx.beginPath();
            ctx.arc(16, y, 6, 0, Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
        ctx.save();
        switch(share_map.teams[i].role){
            case "parent":
                ctx.fillStyle = color.nodetop;
                ctx.font = "12px Arial";
                break;
            case "current":
                ctx.fillStyle = color.nodetop;
                ctx.font = "16px Arial";
                break;
            case "child":
                ctx.fillStyle = color.txt;
                ctx.font = "12px Arial";
                break;
            default:
                ctx.fillStyle = color.txt;
                ctx.font = "12px Arial";
        }
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.beginPath();
        ctx.fillText(share_map.teams[i].ownerUser.name, 80, y);
        ctx.restore();
    }


    //draw connections between nodes
    var nodes = [];
    for (var i = 0; i < share_map.actions.length; i++) {
        var action = share_map.actions[i];

        if (action.state.search(/connected.+/) > -1){
            var target_num = share_map.actions.length - 1 - parseInt(action.state.replace(/.+_(\d+)/,"$1"));
            var con_color = color.ulink;

            if (share_map.actions[target_num].state == "pending") {
                con_color = color.dlink;
                action.state = "opened";
            } else {
                con_color = color.ulink;
                action.state = "connected";
            }
            if(share_map.actions[target_num].version > action.version){
                drawConn(versionToX(action.version) - (col_width / 2), teamToY(action.to), versionToX(share_map.actions[target_num].version) + (col_width / 2), teamToY(action.to), con_color);
                action.state = 'connected';
                console.log(action.version + ": " + action.version + " to " + share_map.actions[target_num].version);
            }
        }

        if (action.from == current_team.id) {
            if (action.to < current_team.id) {
                connectNodes(action.from, action.to, action.version, "up_from_me");
                nodes.push({action_id: action.id,
                            version: action.version,
                            team_to: action.to,
                            state: action.state});
                console.log(action.version + ": " + "up_from_me");
            }
            else if (action.to > current_team.id) {
                connectNodes(action.from, action.to, action.version, "down_from_me");
                nodes.push({action_id: action.id,
                            version: action.version,
                            team_to: action.to,
                            state: action.state});
                console.log(action.version + ": " + "down_from_me");
            }
        }
        else if (action.to == current_team.id) {
            if (action.from < current_team.id) {
                connectNodes(action.from, action.to, action.version, "down_to_me");
                nodes.push({action_id: action.id,
                            version: action.version,
                            team_to: action.to,
                            state: action.state});
                console.log(action.version + ": " + "down_to_me");
            }
            else if (action.from > current_team.id) {
                if (action.state == "pending"){
                    connectNodes(action.from, action.to, action.version, "up_to_me_pending");
                    console.log(action.version + ": " + "up_to_me_pending");
                } else {
                    connectNodes(action.from, action.to, action.version, "up_to_me");
                    nodes.push({action_id: action.id,
                        version: action.version,
                        team_to: action.to,
                        state: action.state});
                    console.log(action.version + ": " + "up_to_me");
                }
            }
        }
    }

    console.log(nodes);

    //draw connections along current lane
    drawConn(versionToX(1), teamToY(current_team.id),versionToX(share_map.versions.length),teamToY(current_team.id), color.ulink);

    // draw version nodes and main chain on current lane
    //create divs on node_layer to make it interactive
    for (var i = 0; i < share_map.versions.length; i++){
        drawNode(versionToX(share_map.versions[i].version),teamToY(current_team.id),"default",share_map.versions[i].version);
        var node_div = document.createElement("div");
        node_div.id = "ver_" + i;
        node_layer.appendChild(node_div);
        node_div.className = "node_div";
        node_div.style.top = teamToY(current_team.id) - 16;
        node_div.style.left = versionToX(share_map.versions[i].version) - 16;
        node_div.setAttribute("action_id",share_map.versions[i].action_id);
        node_div.onclick = function(){
            var content;
            var _this = this;
            share_map.actions.map(function(v){
               if (v.id == _this.getAttribute("action_id")){
                   content = v;
               }
                return v;
            });
            alert("Need some good design here \n" + JSON.stringify(content,null,4));
        };
    }
    //draw childs' nodes
    //create divs on node_layer to make it interactive
    for (var i = 0; i < nodes.length; i++){
        if (nodes[i].state != "normal" && nodes[i].state != "parent"){
            drawNode(versionToX(nodes[i].version)-(col_width/2),teamToY(nodes[i].team_to), nodes[i].state);
            var node_div = document.createElement("div");
            node_div.id = "act_" + i;
            node_layer.appendChild(node_div);
            node_div.className = "node_div";
            node_div.style.top = teamToY(nodes[i].team_to) - 16;
            node_div.style.left = versionToX(nodes[i].version)-(col_width/2) - 16;
            node_div.setAttribute("action_id",nodes[i].action_id);
            node_div.onclick = function(){
                var content;
                var _this = this;
                share_map.actions.map(function(v){
                    if (v.id == _this.getAttribute("action_id")){
                        content = v;
                    }
                    return v;
                });
                alert("Need some good design here \n" + JSON.stringify(content,null,4));
            };

        }
    }
}