// queueManager.js
const queues = new Map(); // Create a Map to hold the queue for each guild

module.exports = {
  getQueue(guildId) {
    return queues.get(guildId); // Retrieve the queue for the specified guild
  },
  setQueue(guildId, queue) {
    queues.set(guildId, queue); // Set the queue for the specified guild
  },
  deleteQueue(guildId) {
    queues.delete(guildId); // Remove the queue for the specified guild
  },
};
