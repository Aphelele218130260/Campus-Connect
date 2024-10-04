import axios from 'axios';

const ROOM_API_BASE_URL = "http://localhost:8080/room";

class RoomService {
  // Fetch all rooms
  getAllRooms() {
    return axios.get(`${ROOM_API_BASE_URL}/getAll`);
  }

  // Fetch a single room by ID
  getRoomById(roomID) {
    return axios.get(`${ROOM_API_BASE_URL}/read${roomID}`);
  }

  // Create a new room
  createRoom(room) {
    return axios.post(`${ROOM_API_BASE_URL}/create`, room);
  }

  // Update a room
  updateRoom(room) {
    return axios.post(`${ROOM_API_BASE_URL}/update`, room);
  }

  // Delete a room
  deleteRoom(roomID) {
    return axios.delete(`${ROOM_API_BASE_URL}/delete${roomID}`);
  }
}

export default new RoomService();
