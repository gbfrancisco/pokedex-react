import { Outlet } from 'react-router-dom';

const UiMainLayout = () => {
  return (
    <>
      <div className="bg-red-500 p-5 text-4xl text-white font-nunito">Pokédex</div>
      <Outlet />
    </>
  );
};

export default UiMainLayout;
