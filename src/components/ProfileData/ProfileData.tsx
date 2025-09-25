import { useState } from "react"

export default function ProfileData() {
  const [profile, setProfile] = useState({
    name: 'Leonid',
    age: 30,
    city: "Toronto",
  });

  const increaseAge = () => {
    setProfile({
      ...profile,
      age: profile.age + 1
    })
  }

    const changeName = () => {
      setProfile({
        ...profile,
        name: 'Serhii',
      });
    };
  
    const changeCity = () => {
      setProfile({
        ...profile,
        city: "Vilnus",
      });
    };
  
  
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.city}</p>

      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}