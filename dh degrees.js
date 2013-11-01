on("chat:message", function(msg) {

    
    var message = JSON.parse(msg.content);
    //log(message);
    //var parts = msg.origRoll.split('<');
    if (message.rolls[0].sides != '100') { // (message.rolls[0].mods.success.comp != null)) {
        log('not the right roll');
        return;
    }
    try {
        message.rolls[0].mods.success.comp != null
    } catch (e) {
        log('no comparison');
        return
    }
    try {
        log(message.rolls[0].mods.success.comp);
        if (message.rolls[0].mods.success.comp == '>=') {
            log('wrong comparison');
            return;
        }
    } catch (e) {
        log('wrong comparison');
        return
    }
    
    //sendChat('RollResult', 'degrees of success');
    
    
    
    log("the roll was a d100");
    // how many degrees of sucess
    if (message.total == '1') {
        var under = message.rolls[0].mods.success.point - message.rolls[0].results[0].v;
        log("under by: " + under);
        var test = Math.floor(under /10 );
        log("how many degrees of sucess: " + test);
        sendChat('RollResult', ''+test+' Degrees of success');
        //return;
        // how many dregees of fail
    } else if (message.total == '0') {
        var over = message.rolls[0].results[0].v - message.rolls[0].mods.success.point;
        log("over by: " + over);
        var test = Math.floor(over /10 );
        log("how many degrees of fail: " + test);
        //sendChat('RollResult', ''+test+' Degrees of fail');
        //return;
    }
    
    log("done");
    
});