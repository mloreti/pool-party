import { useState, useEffect } from "react";
import { getPlayerById } from "../../api/players";


function usePlayerName(id: string) {
  const [name, setName] = useState('');

  useEffect(() => {
    getPlayerById(id).then(player => {
      setName(player.name);
    })
  }, [id])

  return name
}

export default usePlayerName;
