const { Listener } = require('discord-akairo');
const {reactions,defaultAvatar} = require.main.require('./common');
const config = require.main.require('./config')
const commandVars = require.main.require('./common').commandVars(__filename);

class ReadyListener extends Listener {
	constructor() {
		super(commandVars.id, {
			emitter: 'client',
			event: commandVars.name,
			category: commandVars.category,
		});
	}

	async exec() {
// 		var client = this.client;
// 		// Log that the bot is online.
// 		client.logger.info(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, 'ready');
// 		// Set the bot status
// 		client.user.setActivity(process.env.ACTIVITY||'Type '+client.commandHandler.prefix+'help to get started', { type: 'PLAYING' });
// 		//trigger listeners
		
		
// 		const Guild = client.guilds.cache.forEach(function(Guild){ //.get("690661623831986266"); // Getting the guild.
// 			let voiceChannels = Guild.channels.cache.filter(c => c.type == 'voice').array();
// 			voiceChannels.forEach(function(channel){
// 				if(channel.id === Guild.afkChannelID){
// 					return false
// 				}
// 				Guild.members.cache.forEach(function(member){
// 				//channel.members.forEach(function(member){
// 					if(member.user.bot){
// 						return false;
// 					}
// 					// The member is connected to a voice channel.
// 					//console.log('user in voice, triggering voicestateupdate for ',member);
							
// 					for (const [voice, text] of Object.entries(config.voiceTextLinkMap)) {
// 						client.emit('voiceStateUpdate',{channelID:voice},member.voice);
// 					}
					
// 				}) //end members
// 			}); //end voicechannels
			
// 			return
// 			//read all previous commands
// 			let textChannels = Guild.channels.cache.filter(c => c.type == 'text').array();
// 			textChannels.forEach(function(channel){
// 				if(!(channel.permissionsFor(Guild.me).has("VIEW_CHANNEL"))){
// 					return;
// 				}
				
// 				var p=channel.messages.fetch()
// 				.then(function(messages){
// 					messages.forEach(function(message){
// 						if(message.author.bot){
// 							return
// 						}
// 						getReactedUsers(message,reactions.shipwash,function(users){
// 							console.log(message.id,message.content,'reacted with shipwash',users);
// 						});
						
// 					}) //end messages
// 				}) //end then
// 				.catch(console.error);
// 			}) //end textchannels




// // 			var memory=client.memory
// // 			if(!memory){return}
// // 			var player=memory.get({guild}, 'player');
// // 			if(!player){return}
// // 			var queues=memory.get({guild}, 'queues')||[];
// // 			queues.forEach(function(queue){
// // 				var message = queue.firstMessage
// // 				if(player.isPlaying(message)){
// // 				  common.nowPlaying(message,null,'I have crashed or gone to sleep!')
// // 				}	
//  			}); //end guilds

	} //end exec

}


module.exports = ReadyListener;