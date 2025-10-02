import { useState } from 'react';

enum Color {
  RED = 'RED',
  BLACK = 'BLACK',
  ORANGE = 'ORANGE',
}

export const ColorPicker = () => {
  const [color, setColor] = useState(Color.RED);
  const [profile, setProfile] = useState({ name: 'ivan', favoriteColor: color });
  const colors = Object.values(Color);

  function changeColor(c: Color) {
    setColor(c);
    setProfile(prev => ({ ...prev, favoriteColor: c }));
  }

  return (
    <>
      <div>
        <h1>{profile.name}</h1> <h2>{profile.favoriteColor}</h2>{' '}
        {colors.map(c => (
          <button key={c} onClick={() => changeColor(c)}>
            {c}
          </button>
        ))}
      </div>
    </>
  );
};
