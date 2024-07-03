import React, { useState, useEffect } from 'react';

const UpdateModal = ({ isOpen, onConfirm, onCancel, row }) => {
  
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [occupants, setOccupants] = useState('');
  const [occupantStatus, setOccupantStatus] = useState('');
  const [roomStatus, setRoomStatus] = useState('');

  useEffect(() => {
    if (row) {
      setRoomNumber(row.room_number || '');
      setRoomType(row.room_type || '');
      setOccupants(row.occupants || '');
      setOccupantStatus(row.occupant_status || '');
      setRoomStatus(row.room_status || '');
    }
  }, [row]);

  const handleConfirm = () => {
    onConfirm({
      ...row,
      room_number: roomNumber,
      room_type: roomType,
      occupants: occupants,
      occupant_status: occupantStatus,
      room_status: roomStatus,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Room</h2>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Room Number"
        />
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          placeholder="Room Type"
        />
        <input
          type="text"
          value={occupants}
          onChange={(e) => setOccupants(e.target.value)}
          placeholder="Occupants"
        />
        <input
          type="text"
          value={occupantStatus}
          onChange={(e) => setOccupantStatus(e.target.value)}
          placeholder="Occupant Status"
        />
        <input
          type="text"
          value={roomStatus}
          onChange={(e) => setRoomStatus(e.target.value)}
          placeholder="Room Status"
        />
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
  
};

export default UpdateModal;
