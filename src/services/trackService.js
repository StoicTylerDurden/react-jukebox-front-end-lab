const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getTracks = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
};

const createTrack = async (track) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(track),
    });
  } catch (error) {
    console.error("Error adding track:", error);
  }
};

const updateTrack = async (track) => {
  try {
    const res = await fetch(`${BASE_URL}/${track._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(track),
    });
  } catch (error) {
    console.error("Error updating track:", error);
  }
};

const deleteTrack = async (trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting track:", error);
  }
};

export default { getTracks, createTrack, updateTrack, deleteTrack };