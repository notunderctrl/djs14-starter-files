module.exports = {
  run: ({ interaction }) => {
    interaction.reply('Pong!');
  },

  data: {
    name: 'ping',
    description: 'Pong!',
  },
};
