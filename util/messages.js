const GUIMessages = require.main.require('./templates/messages');
const { Command } = require('discord-akairo');
const { Player } = require("discord-player");
const emotes={error:":error:"}
const {reactions,defaultAvatar} = require.main.require('./common');
const common = require.main.require('./common');
const commandVars = common.commandVars(__filename);
const _ = require('lodash');
const web = require.main.require('./web');
const yaml = require('js-yaml');

module.exports.encapsulate = function(message,input){
	if(!input){
		message.content;
	}
  	  let doc=null;
	    // Get document, or throw exception on error
	    try {
	      doc = yaml.load(input);
	    } catch (e) {
	      console.error(e);
	      message.channel.send(e.toString())
	    }
	    var type = typeof doc;
	    if(type == 'string'){
		    let split = input.split('\n');
		    doc = {};
		    if(split.length==1){
		    	doc.title = '> '+split[0];
		    }else{
			doc.title = split.shift();
			doc.description = split.join('\n')
		    }
	    }else if(Array.isArray(doc)){
		    return message.channel.send('Can not process arrays');
	    }
	    let user = message.member || message.author
	    let author = {
	      name: user.displayName || user.tag,
	      icon_url: message.author.avatarURL() || common.defaultAvatar,
	      url: ` https://discordapp.com/users/${user.id}`,
	    }
	    doc.author=author;
	    message.channel.send({embed:doc});
	}

