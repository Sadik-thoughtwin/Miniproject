import React, { useState, useEffect } from "react";

export function UserProfile() {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <input type="text" value={userName} onChange={(e) => e.target.value} />
    </div>
  );
}
