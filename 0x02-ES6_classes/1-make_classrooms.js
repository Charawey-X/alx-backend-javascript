import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const classes = [];
  classes.push(new ClassRoom(19));
  classes.push(new ClassRoom(20));
  classes.push(new ClassRoom(34));
  return classes;
}
