import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  desc: string;
}

function ProfileCard({ name, desc }: ProfileCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openProfile: string = 'Показать профиль';
  const closeProfile: string = 'Закрыть профиль';

  return (
    <>
      {isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>{closeProfile}</button>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>{openProfile}</button>
      )}
      {isOpen ? (
        <div>
          {' '}
          <h1>{name}</h1> <p>{desc}</p>{' '}
        </div>
      ) : null}
    </>
  );


  // <div>
  //   <button onClick={() => setVisible(!visible)}>
  //     {visible ? 'Скрыть профиль' : 'Показать профиль'}
  //   </button>

  //   {visible && (
  //     <div>
  //       <h2>{name}</h2>
  //       <p>{description}</p>
  //     </div>
  //   )}
  // </div>;
}

export default ProfileCard;
