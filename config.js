const { Activity } = require("discord.js");

module.exports = {
    app: {
        token: 'MTAxNTMwNDYyMjU1MTg2NzQwMg.GkRccB.1F9tX0LrVRVDMjkvnILE8nolp8DEE0GWYlu9IQ',
        playing: 'Watching ${client.guilds.cache.size}',
        global: 'true'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
