const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Just for fun

client.on('message', mention => {
  if (mention.content === ('who is ' + (client.user))) {
    (mention.reply('Hi im Login-Bot#3329'))
  }
})
//////////////////////////////////
client.on('message', msg => {
  const role = msg.guild.roles.find('name','ServerAccess');
  const roleRemove = msg.guild.roles.find('name','AccessDenied')
    if (msg.content === '-login ' + (msg.author)) {
    msg.channel.send(msg.author.toString() + ' Logged in')
    client.on('message', message => {
      if (message.author == client.user) {
        if (message.content === (msg.author) + ' Logged in') {
          message.channel.send(msg.author.toString() + ' Succesfully accessed the server!')
          msg.member.addRole(role)
          msg.member.removeRole(roleRemove)
        }}});
      }});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const role = member.guild.roles.find('name','AccessDenied')
  member.addRole(role)
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', help => {
  if (help.content === '-help') {
    help.reply('')
  }
})
client.login(process.env.BOT_TOKEN);
